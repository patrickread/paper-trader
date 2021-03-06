import React from 'react'
import { Select, Option } from './Shared/Select'
import DatePicker from './Shared/DatePicker'
import ExpandingInput from './Shared/ExpandingInput'
import SymbolLookupInput from './SymbolLookupInput'

var moment = require('moment');

var CreateTransaction = React.createClass({
  getInitialState: function () {
    return {
      transaction: {
        shares: this.props.shares,
        symbol: this.props.symbol,
        price: this.props.price,
        commission: this.props.commission,
        transaction_type: "buy"
      },
      errors: {},
      transactionInProgress: false
    }
  },

  componentWillReceiveProps: function(newProps) {
    var transaction = this.state.transaction;
    for (var attrname in newProps.transaction) { transaction[attrname] = newProps.transaction[attrname]; }
    
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
      var targetName = 'transaction_type';
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

  onTimestampChanged: function(value) {
    var transaction = this.state.transaction;
    transaction.timestamp = value;

    this.setState({
      transaction: transaction
    });
  },

  validateShares: function(value) {
    if (value === undefined) {
      value = this.state.transaction.shares || '';
    }

    var sharesInt = parseInt(value);
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

  validatePrice: function(value) {
    if (value === undefined) {
      value = this.state.transaction.price || '';
    }

    var priceFloat = parseFloat(value);
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

  validateCommission: function(value) {
    if (value === undefined) {
      value = this.state.transaction.price || '';
    }

    var commissionFloat = parseFloat(value);
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

  // Just check that there's a symbol at all, handleBlur will validate against
  // a set of valid symbols.
  validateSymbol: function() {
    var errorMessage = "";
    
    if (this.state.transaction.symbol === null || this.state.transaction.symbol === "") {
      errorMessage = "Symbol must be filled out.";
    }

    var errors = this.state.errors;
    errors.symbol = errorMessage;
    this.setState({
      errors: errors
    });
  },

  validateAll: function() {
    this.validateShares();
    this.validatePrice();
    this.validateCommission();
    this.validateSymbol();
  },

  symbolFound: function(stockName, errorMessage) {
    if (!!errorMessage) {
      var errors = this.state.errors;
      errors.symbol = "Should be a valid stock.";
      this.setState({
        errors: errors
      });
    } else {
      var transaction = this.state.transaction;
      transaction.name = name;
      var errors = this.state.errors;
      errors.symbol = "";

      this.setState({
        transaction: transaction,
        errors: errors
      });
    }
  },

  render: function () {
    var classes = "create-transaction create";

    var shareClasses = this.getShareElementClassNames();
    var symbolClasses = this.getSymbolElementClassNames();
    var priceClasses = this.getPriceElementClassNames();
    var commissionClasses = this.getCommissionElementClassNames();

    if (this.state.transactionInProgress) {
      var confirmTransactionClasses = "disabled";
    } else {
      var confirmTransactionClasses = "";
    }

    return <dialog className={classes} onClick={this.onClick}>
      <div>
        <h1>Make a trade</h1>
        <section className="body">
          <div>
            <div className="text">I would like to </div>
            <Select id="transaction_type" name="transaction_type" className="select-box transaction-type" placeholder="Select" 
              value={this.state.transaction.transaction_type} onChange={this.handleChange}>
              <Option value="buy">buy</Option>
              <Option value="sell">sell</Option>
            </Select>
            <ExpandingInput type="text" id="shares" name="shares" className={shareClasses} 
              placeholder="12" type="number" max="1000000" min="0" step="1" 
              value={this.state.transaction.shares} onInputChange={this.handleChange} />
            <div className="text">shares of </div>
            <SymbolLookupInput id="symbol" name="symbol" className={symbolClasses} 
              placeholder="MSFT" value={this.state.transaction.symbol} 
              onInputChange={this.handleChange} symbolFound={this.symbolFound} />
            <div className="text"> for $</div>
            <ExpandingInput type="text" id="price" name="price" className={priceClasses} 
            placeholder="56.46" type="number" max="1000000" min="0" step="0.01" 
            value={this.state.transaction.price} onInputChange={this.handleChange} />
            <div className="text">a share</div>
            <DatePicker value={this.state.transaction.timestamp} onChange={this.onTimestampChanged} />
            <div className="text">.</div>
          </div>
          <div>
            <div className="text">My broker charged me $</div>
            <ExpandingInput type="text" id="commission" name="commission" 
            className={commissionClasses} placeholder="7.00" type="number" max="10000" 
            min="0" step="0.01" value={this.state.transaction.commission} 
            onInputChange={this.handleChange} />
            <div className="text">commission on this deal.</div>
          </div>
        </section>
        <section className="options">
          <button onClick={this.cancel}>Nevermind</button>
          <button className={confirmTransactionClasses} onClick={this.confirmTransaction}>Yep, Looks Good</button>
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
    this.validateAll();
    if (!this.hasErrors() && !this.state.transactionInProgress) {
      this.setState({
        transactionInProgress: true
      });

      var transaction = this.state.transaction;

      if (!transaction.timestamp) {
        transaction.timestamp = moment().format("YYYY-MM-DDTHH:mm:ss");
      }
    
      this.props.needTransactionCreation(transaction, this.transactionCompleted);
    }
  },

  transactionCompleted: function() {
    this.setState({
      transactionInProgress: false,
      transaction: {
        shares: this.props.shares,
        symbol: this.props.symbol,
        price: this.props.price,
        commission: this.props.commission,
        transaction_type: "buy",
        timestamp: 'now'
      }
    })
  },

  cancel: function(event) {
    this.props.cancel();
  }
})

export default CreateTransaction
