import QuoteService from '../Apis/QuoteService'
import PusherService from '../Apis/PusherService'
import ReactDOM from 'react-dom'

var numeral = require('numeral');

class Portfolio {
  constructor(transactions) {
    this.transactions = transactions;
    this.holdings = this.calculateHoldings();
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
    this.transactions.push(transaction);
    var holding = this.addTransactionToHoldings(transaction, this.holdings);
    if (holding !== null) {
      this.holdings.push(holding);
    }

    this.calculateTotals();
  }

  addTransactionToHoldings(transaction, holdings) {
    var addingNewHolding = false;
    var holding = this.findHolding(holdings, transaction.symbol);
    this.addTransactionViewProperties(transaction);

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

  addTransactionViewProperties(transaction) {
    var moment = require('moment');

    if (transaction.name.length > 15) {
      transaction.name = transaction.name.substring(0, 15).trim() + "...";
    }

    transaction.timestampString = moment().format("MM/DD/YYYY");
    transaction.priceString = numeral(transaction.price).format('$0,0.00');
    transaction.commissionString = numeral(transaction.commission).format('$0,0.00');
    transaction.total = (transaction.price * transaction.shares) + transaction.commission;
    transaction.totalString = numeral(transaction.total).format('$0,0.00');
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
      var quotePromise = quoteService.getQuote(stock, that);
      quotePromise.then(this.symbolUpdated);
      pusherService.subscribeForSymbol(stock.symbol, that, this.symbolUpdatedAndUpdateUI);
      promises.push(quotePromise);
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
