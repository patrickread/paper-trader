import React from 'react'
import QuoteService from './Apis/QuoteService'
import { Select, Option } from './Shared/Select'

var CreateTransaction = React.createClass({
  getInitialState: function () {
    return {
      transaction: {
        shares: this.props.shares,
        symbol: this.props.symbol,
        price: this.props.price,
        commission: this.props.commission,
        type: "buy"
      },
      errors: {}
    }
  },

  componentWillReceiveProps: function(newProps) {
    var transaction = newProps.transaction;
    for (var attrname in this.state.transaction) { transaction[attrname] = this.state.transaction[attrname]; }
    
    this.setState({
      transaction: transaction
    })
  },

  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  handleChange: function(event) {
    if (typeof event === 'string' || event instanceof String) {
      var targetName = 'type';
      var value = event;
    } else {
      var targetName = event.target.name;
      var value = event.target.value;
    }

    // validate here
    if (targetName === "shares") {
      this.validateShares(value);
    } else if (targetName === "price") {
      this.validatePrice(value);
    } else if (targetName === "commission") {
      this.validateCommission(value);
    }

    var transaction = this.state.transaction;
    transaction[targetName] = value;

    this.setState({ transaction: transaction});
  },

  validateShares: function(shares) {
    var sharesInt = parseInt(shares);
    var errorMessage = "";
    if (isNaN(sharesInt)) {
      errorMessage = "Shares should be a number.";
    } else if (sharesInt <= 0) {
      errorMessage = "Shares should be a number greater than zero.";
    } else if (sharesInt > 1000000) {
      errorMessage = "Really? You're buying more than a million shares? C'mon.";
    }

    var errors = this.state.errors;
    errors.shares = errorMessage;
    this.setState({
      errors: errors
    });
  },

  validatePrice: function(price) {
    var priceFloat = parseFloat(price);
    var errorMessage = "";
    if (isNaN(priceFloat)) {
      errorMessage = "Price should be a number.";
    } else if (priceFloat <= 0) {
      errorMessage = "Price can't be negative.";
    } else if (priceFloat > 1000000) {
      errorMessage = "Over a million dollars? This seems inaccurate.";
    }

    var errors = this.state.errors;
    errors.price = errorMessage;
    this.setState({
      errors: errors
    });
  },

  validateCommission: function(commission) {
    var commissionFloat = parseFloat(commission);
    var errorMessage = "";
    if (isNaN(commissionFloat)) {
      errorMessage = "Commission should be a number.";
    } else if (commissionFloat <= 0) {
      errorMessage = "Commission can't be negative.";
    } else if (commissionFloat > 1000000) {
      errorMessage = "Over a million dollars? This seems inaccurate.";
    }

    var errors = this.state.errors;
    errors.commission = errorMessage;
    this.setState({
      errors: errors
    });
  },

  handleBlur: function(event) {
    var targetName = event.target.name;
    var value = event.target.value;

    if (targetName === 'symbol') {
      var quoteService = new QuoteService();
      var that = this;
      quoteService.lookupCompany(value).then(function(data) {
        if (data.length > 0) {
          var name = data[0].Name;
          var transaction = that.state.transaction;
          transaction.name = name;
          
          var errors = that.state.errors;
          errors.symbol = "";

          that.setState({
            transaction: transaction,
            errors: errors
          });
        } else {
          var errors = that.state.errors;
          errors.symbol = "Should be a valid stock.";
          that.setState({
            errors: errors
          });
        }
      });
    }
  },

  render: function () {
    var classes = "create-transaction";

    var shareClasses = this.getShareElementClassNames();
    var symbolClasses = this.getSymbolElementClassNames();
    var priceClasses = this.getPriceElementClassNames();
    var commissionClasses = this.getCommissionElementClassNames();

    return <dialog className={classes} onClick={this.onClick}>
      <div>
        <h1>Make a trade</h1>
        <section className="body">
          <div>
            <div className="text">I would like to </div>
            <Select name="type" className="select-box type" placeholder="Select" 
              value={this.state.transaction.type} onChange={this.handleChange}>
              <Option value="buy">buy</Option>
              <Option value="sell">sell</Option>
            </Select>
            <input type="text" id="shares" name="shares" className={shareClasses} 
              placeholder="12" type="number" max="1000000" min="0" step="1" 
              value={this.state.transaction.shares} onChange={this.handleChange} />
            <div className="text">shares of </div>
            <input type="text" id="symbol" name="symbol" className={symbolClasses} 
            placeholder="MSFT" value={this.state.transaction.symbol} 
            onChange={this.handleChange} onBlur={this.handleBlur} />
            <div className="text"> for $</div>
            <input type="text" id="price" name="price" className={priceClasses} 
            placeholder="56.46" type="number" max="1000000" min="0" step="0.01" 
            value={this.state.transaction.price} onChange={this.handleChange} />
            <div className="text">a share now.</div>
          </div>
          <div>
            <div className="text">My broker charged me $</div>
            <input type="text" id="commission" name="commission" 
            className={commissionClasses} placeholder="7.00" type="number" max="10000" 
            min="0" step="0.01" value={this.state.transaction.commission} 
            onChange={this.handleChange} />
            <div className="text">commission on this deal.</div>
          </div>
        </section>
        <section className="options">
          <button onClick={this.cancel}>Nevermind</button>
          <button onClick={this.confirmTransaction}>Yep, Looks Good</button>
        </section>
      </div>
    </dialog>
  },

  getShareElementClassNames: function() {
    var shareClasses = "";
    if (this.state.errors.shares !== undefined && this.state.errors.shares !== '') {
      shareClasses = 'error';
    }

    return shareClasses;
  },

  getSymbolElementClassNames: function() {
    var symbolClasses = "";
    if (this.state.errors.symbol !== undefined && this.state.errors.symbol !== '') {
      symbolClasses = 'error';
    }

    return symbolClasses;
  },

  getPriceElementClassNames: function() {
    var priceClasses = "";
    if (this.state.errors.price !== undefined && this.state.errors.price !== '') {
      priceClasses = 'error';
    }

    return priceClasses;
  },

  getCommissionElementClassNames: function() {
    var commissionClasses = "";
    if (this.state.errors.commission !== undefined && this.state.errors.commission !== '') {
      commissionClasses = 'error';
    }

    return commissionClasses;
  },

  onClick: function(event) {
    event.stopPropagation();
  },

  hasErrors: function() {
    var hasErrors = false;
    for (var attrName in this.state.errors) {
      var errorObj = this.state.errors[attrName];
      if (errorObj !== undefined && errorObj !== "") {
        hasErrors = true;
        break;
      }
    }
    
    return hasErrors;
  },

  confirmTransaction: function(event) {
    if (!this.hasErrors()) {
      var transaction = this.state.transaction;
      var moment = require('moment');
      transaction.timestamp = moment().format("YYYY-MM-DDTHH:mm:ss");
    
      this.props.needTransactionCreation(transaction);
    }
  },

  cancel: function(event) {
    this.props.cancel();
  }
})

export default CreateTransaction
