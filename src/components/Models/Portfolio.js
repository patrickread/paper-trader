import QuoteService from '../Apis/QuoteService'
import PusherService from '../Apis/PusherService'
import ReactDOM from 'react-dom'
import Holding from '../Models/Holding'
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
      var options = {
        key: holdings.length,
        symbol: transaction.symbol,
        name: transaction.name,
        price: transaction.price
      };

      holding = new Holding(options);
      addingNewHolding = true;
    }

    holding.addTransaction(transaction);

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

  removeTransaction(transaction) {
    var transactions = this.transactions;
    for (var i=0; i<transactions.length; i++) {
      var trans = transactions[i];
      if (trans.id === transaction.id) {
        transactions.splice(i, 1);
        break;
      }
    }

    var holding = this.findHolding(this.holdings, transaction.symbol);
    if (!!holding) {
      holding.removeTransaction(transaction);

      if (holding.shares === 0) {
        // remove holding completely, as there's no remaining shares
        for (var i=0; i<this.holdings.length; i++) {
          var thisHolding = this.holdings[i];
          if (holding.symbol === thisHolding.symbol) {
            this.holdings.splice(i, 1);
            break;
          }
        }
      }
    }
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
      stock.update(data);
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
      totalChanges += stock.changeNumbericObj.number;
      startValue += stock.today.open * stock.shares;
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
}

export default Portfolio
