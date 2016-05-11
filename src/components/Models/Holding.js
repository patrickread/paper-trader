var numeral = require('numeral');

class Holding {
  constructor(options) {
    // apply the options to this object
    for (var key of Object.keys(options)) {
      this[key] = options[key];
    }

    this.today = {};
    this.shares = 0;

    this.addViewModelProperties();
  }

  static blankHolding() {
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

  update(newData) {
    this.price = newData.price;
    this.priceString = numeral(newData.price).format('$0,0.00');
    this.today = { changePercent: newData.change_percent, changeNumeric: newData.change_numeric, open: newData.open }

    this.addViewModelProperties()
  }

  addViewModelProperties(options={}) {
    this.updateChangePercentObj();
    this.updateChangeNumericObj();
    this.priceString = numeral(this.price).format('$0,0.00');
  }

  addShares(transaction) {
    if (transaction.transaction_type == "buy") {
      this.shares += transaction.shares;
    } else {
      // sell
      this.shares -= transaction.shares;
    }

    this.updateChangeNumericObj();
  }

  updateChangePercentObj() {
    this.changePercentObj = this.getChangePercentObj(this.today.changePercent || 0);
  }

  updateChangeNumericObj() {
    this.holdingChangeObj = this.getChangeNumericObj(this.today.changeNumeric || 0, this.shares || 0);
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
}

export default Holding
