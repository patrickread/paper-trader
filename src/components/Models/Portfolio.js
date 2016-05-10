import QuoteService from '../Apis/QuoteService'
import PusherService from '../Apis/PusherService'
import ReactDOM from 'react-dom'
import Transaction from '../Models/Transaction'
import _ from "underscore";

var numeral = require('numeral');

class Portfolio {
  constructor(transactions) {
    this.transactions = _.map(transactions, function(transaction) { return new Transaction(transaction); });
    this.holdings = this.calculateHoldings();
    this.cashTransactions = [];
    this.cash = 1034.56;
  }

  static blankStock() {
    return {
      key: 1,
      symbol: 'PAPR',
      name: 'Paper',
      changePercentObj: {
        number: 0,
        string: "…",
        className: ""
      },
      holdingChangeObj: {
        number: 0,
        string: "…",
        className: ""
      }
    };
  }

  addTransaction(transaction) {
    var transactionModel = new Transaction(transaction);
    this.transactions.push(transactionModel);
    var holding = this.addTransactionToHoldings(transactionModel, this.holdings);
    if (holding !== null) {
      this.holdings.push(holding);
    }

    this.calculateTotals();
  }

  addCashTransaction(cashTransaction) {
    this.cashTransactions.push(cashTransaction);
    this.calculateCashTotals();
  }

  addTransactionToHoldings(transaction, holdings) {
    var addingNewHolding = false;
    var holding = this.findHolding(holdings, transaction.symbol);
    
    transaction.addViewModelProperties();

    if (holding === null) {
      holding = {
        key: holdings.length,
        symbol: transaction.symbol,
        name: transaction.name,
        shares: 0,
        costBasis: 0,
        price: transaction.price,
        priceString: transaction.priceString,
        previousOpen: 0,
        changePercentObj: {},
        holdingChangeObj: {}
      };
      addingNewHolding = true;
    }

    if (transaction.transaction_type == "buy") {
      holding.shares += transaction.shares;
    } else {
      // sell
      holding.shares -= transaction.shares;
    }

    if (addingNewHolding) {
      return holding;
    } else {
      return null;
    }
  }

  calculateHoldings() {
    var holdings = [];
    for (var transaction of this.transactions) {
      var holding = this.addTransactionToHoldings(transaction, holdings);
      if (holding !== null) {
        holdings.push(holding);
      }
    }

    return holdings;
  }

  symbolUpdatedAndUpdateUI(data, caller) {
    caller.symbolUpdated({
      data: data,
      caller: caller
    });

    caller.totals = caller.calculateTotals();
    caller.refreshUI(caller);
  }

  symbolUpdated(options={}) {
    var data = options.data;
    var that = options.caller;

    var stock = that.findStockForSymbol(data.symbol);
    
    if (stock) {
      stock.price = data.price;
      stock.priceString = numeral(stock.price).format('$0,0.00');
      stock.changePercentObj = that.changePercentObj(data.change_percent);
      stock.holdingChangeObj = that.holdingChangeObj(data.change_numeric, stock.shares);
      stock.previousOpen = data.open;
    }
  }

  findStockForSymbol(symbol) {
    for (var holding of this.holdings) {
      if (holding.symbol === symbol) {
        return holding;
      }
    }

    return null;
  }

  updateHoldingsFromAPI(callbackFunction) {
    var that = this;
    var promises = [];
    that.refreshUI = callbackFunction;

    var pusherService = new PusherService();
    var quoteService = new QuoteService();

    for (var stock of this.holdings) {
      if (!!stock.symbol) {
        var quotePromise = quoteService.getQuote(stock, that);
        quotePromise.then(this.symbolUpdated);
        pusherService.subscribeForSymbol(stock.symbol, that, this.symbolUpdatedAndUpdateUI);
        promises.push(quotePromise);
      }
    }

    Promise.all(promises).then(function() {
      console.log("All quote requests finished!");
      that.totals = that.calculateTotals();
      callbackFunction(that);
    });
  }

  calculateTotals() {
    var totalChanges = 0;
    var startValue = 0; // value at the start of trading
    for (var stock of this.holdings) {
      totalChanges += stock.holdingChangeObj.number;
      startValue += stock.previousOpen * stock.shares;
    }

    return {
      dollarChangeToday: totalChanges,
      percentChangeToday: totalChanges / startValue
    }
  }

  calculateCashTotals() {
    var cash = 0;

    // first add in all of the cash transactions
    for (var cashTransaction of this.cashTransactions) {
      if (cashTransaction.transaction_type.toLowerCase() === 'deposit') {
        cash += cashTransaction.amount;
      } else {
        cash -= cashTransaction.amount;
      }
    }

    // then, subtract out the total from all stock transactions
    for (var transaction of this.transactions) {
      cash -= transaction.total();
    }

    this.cash = cash;
  }

  findHolding(holdings, symbol) {
    for (var stock of holdings) {
        if (stock.symbol === symbol) {
            return stock;
        }
    }

    return null;
  }

  changePercentObj(changePercent) {
    var changePercent = {
      number: changePercent / 100.0
    };

    changePercent.string = numeral(changePercent.number).format('0,0.00%');
    if (changePercent.number >= 0) {
      changePercent.string = changePercent.string.replace(/^/, '+');
      changePercent.className = "positive";
    } else {
      changePercent.className = "negative";
    }

    return changePercent;
  }

  holdingChangeObj(dollarChange, shares) {
    var holdingChange = {
      number: dollarChange * shares
    };

    holdingChange.string = numeral(holdingChange.number).format('$0,0.00');
    if (holdingChange.number >= 0) {
      holdingChange.string = holdingChange.string.replace(/^/, '+');
      holdingChange.className = "positive";
    } else {
      holdingChange.className = "negative";
    }

    return holdingChange;
  }
}

export default Portfolio
