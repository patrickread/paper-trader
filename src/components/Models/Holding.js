var numeral = require('numeral');

class Holding {
  constructor(options) {
    // apply the options to this object
    for (var key of Object.keys(options)) {
      this[key] = options[key];
    }

    this.today = {};
    this.costBasis = {};
    this.marketValue = {};
    this.overallReturn = {};
    this.shares = 0;

    this.addViewModelProperties();
  }

  static blankHolding() {
    return {
      key: 1,
      symbol: 'PAPR',
      name: 'Paper',
      price: 0,
      shares: 0,
      changePercentObj: {
        number: 0,
        string: "…",
        className: ""
      },
      changeNumbericObj: {
        number: 0,
        string: "…",
        className: ""
      },
      costBasis: {
        number: 0,
        string: "…"
      },
      marketValue: {
        number: 0,
        string: "…"
      },
      overallReturn: {
        number: 0,
        string: "…"
      }
    };
  }

  // Update the holding with numbers from today or the most recent day of trading.
  update(newData) {
    this.price = newData.price;
    this.priceString = numeral(newData.price).format('$0,0.00');
    this.today = { changePercent: newData.change_percent, changeNumeric: newData.change_numeric, open: newData.open }

    this.addViewModelProperties()
  }

  // Generate some presentation layer pieces
  addViewModelProperties(options={}) {
    this.updateChangePercentObj();
    this.updateChangeNumericObj();
    this.priceString = numeral(this.price).format('$0,0.00');

    this.updateMarketValue();
    this.updateOverallReturn();
  }

  addTransaction(transaction) {
    if (transaction.transaction_type == "buy") {
      this.shares += transaction.shares;
    } else {
      // sell
      this.shares -= transaction.shares;
    }

    this.updateChangeNumericObj();
    this.addToCostBasis(transaction);
    this.updateMarketValue();
    this.updateOverallReturn();
  }

  removeTransaction(transaction) {
    // reverse the add
    if (transaction.transaction_type == "buy") {
      this.shares -= transaction.shares;
    } else {
      this.shares += transaction.shares;
    }

    this.updateChangeNumericObj();
    this.removeFromCostBasis(transaction);
    this.updateMarketValue();
    this.updateOverallReturn();
  }

  updateChangePercentObj() {
    this.changePercentObj = this.getChangePercentObj(this.today.changePercent || 0);
  }

  updateChangeNumericObj() {
    this.changeNumbericObj = this.getChangeNumericObj(this.today.changeNumeric || 0, this.shares || 0);
  }

  updateMarketValue() {
    var marketValue = this.price * this.shares;
    this.marketValue = {
      number: marketValue,
      string: numeral(marketValue).format('$0,0.00')
    }
  }

  updateOverallReturn() {
    var overallReturn = (this.marketValue.number || 0) - (this.costBasis.number || 0);
    this.overallReturn = {
      number: overallReturn,
      string: numeral(overallReturn).format('$0,0.00')
    }
  }

  getChangePercentObj(changePercent) {
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

  getChangeNumericObj(dollarChange, shares) {
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

  addToCostBasis(transaction) {
    this.initCostBasisIfNecessary();

    this.costBasis.commission += transaction.commission;
    this.costBasis.trade += transaction.shares * transaction.price;
    this.updateCostBasisSummary();
  }

  removeFromCostBasis(transaction) {
    this.initCostBasisIfNecessary();

    this.costBasis.commission -= transaction.commission;
    this.costBasis.trade -= transaction.shares * transaction.price;
    this.updateCostBasisSummary();
  }

  initCostBasisIfNecessary() {
    if (!this.costBasis || Object.keys(this.costBasis).length === 0) {
      this.costBasis = {
        commission: 0,
        trade: 0,
        number: 0,
        string: ''
      }
    }
  }

  updateCostBasisSummary() {
    this.costBasis.number = this.costBasis.trade + this.costBasis.commission;
    this.costBasis.string = numeral(this.costBasis.number).format('$0,0.00');
  }
}

export default Holding
