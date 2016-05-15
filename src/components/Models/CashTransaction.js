var numeral = require('numeral');
var moment = require('moment');

class CashTransaction {
  constructor(options) {
    // apply the options to this object
    for (var key of Object.keys(options)) {
      if (key === "timestamp") {
        this[key] = moment(options[key]).utc();
      } else {
        this[key] = options[key];
      }
    }

    this.addViewModelProperties();
  }

  addViewModelProperties() {
    this.amount = parseFloat(this.amount);

    this.timestampString = this.timestamp.format("MM/DD/YYYY");
    this.amountString = numeral(Math.abs(this.total())).format('$0,0.00');
  }

  total() {
    var typeFactor = 1;
    if (this.transaction_type.toLowerCase() === 'withdraw') {
      typeFactor = -1;
    }

    return typeFactor * this.amount;
  }
}

export default CashTransaction
