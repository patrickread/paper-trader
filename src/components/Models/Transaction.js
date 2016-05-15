var numeral = require('numeral');
var moment = require('moment');

class Transaction {
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
    if (this.name && this.name.length > 17) {
      this.name = this.name.substring(0, 17).trim() + "...";
    }

    this.price = parseFloat(this.price);
    this.shares = parseInt(this.shares);
    this.commission = parseFloat(this.commission);

    this.timestampString = this.timestamp.format("MM/DD/YYYY");
    this.priceString = numeral(this.price).format('$0,0.00');
    this.commissionString = numeral(this.commission).format('$0,0.00');
    this.totalString = numeral(Math.abs(this.total())).format('$0,0.00');
  }

  total() {
    var typeFactor = 1;
    if (this.transaction_type.toLowerCase() === 'sell') {
      typeFactor = -1;
    }

    return (typeFactor * (this.price * this.shares)) + this.commission;
  }
}

export default Transaction
