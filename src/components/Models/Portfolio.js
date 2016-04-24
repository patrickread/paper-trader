import QuoteService from '../Apis/QuoteService'
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

  updateHoldingsFromAPI(callbackFunction) {
    var that = this;
    var promises = [];

    for (var stock of this.holdings) {
      var quoteService = new QuoteService();
      var quotePromise = quoteService.getQuote(stock);
      quotePromise.then(function(data) {
        stock = data.stock;
        stock.price = data.LastPrice;
        stock.priceString = numeral(stock.price).format('$0,0.00');
        stock.changePercentObj = that.changePercentObj(data.ChangePercent);
        stock.holdingChangeObj = that.holdingChangeObj(data.Change, stock.shares);
        stock.previousOpen = data.Open;
      });
      promises.push(quotePromise);
    }

    Promise.all(promises).then(function() {
      console.log("All quote requests finished!");
      that.totals = that.calculateTotals();
      callbackFunction();
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
