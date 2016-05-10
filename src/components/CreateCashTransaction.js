import React from 'react'
import { Select, Option } from './Shared/Select'

var CreateCashTransaction = React.createClass({
  getInitialState: function () {
    return {
      transaction: {
        amount: null,
        transaction_type: "deposit",
        timestamp: "now"
      },
      errors: {},
      transactionInProgress: false
    }
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
    if (targetName === "amount") {
      this.validateAmount(value);
    }

    var transaction = this.state.transaction;
    transaction[targetName] = value;

    this.setState({ transaction: transaction});
  },

  validateAmount: function(value) {
    if (value === undefined) {
      value = this.state.transaction.amount || '';
    }

    var amountFloat = parseFloat(value);
    var errorMessage = "";
    if (isNaN(amountFloat)) {
      errorMessage = "Amount should be a number.";
    } else if (amountFloat <= 0) {
      errorMessage = "Amount can't be negative.";
    } else if (amountFloat > 100000000) {
      errorMessage = "Over a hundred million dollars? Who are you, Warran Buffett?";
    }

    var errors = this.state.errors;
    errors.price = errorMessage;
    this.setState({
      errors: errors
    });
  },

  render: function () {
    var classes = "create-cash-transaction create";

    var amountClasses = this.getAmountElementClassNames();

    if (this.state.transactionInProgress) {
      var confirmTransactionClasses = "disabled";
    } else {
      var confirmTransactionClasses = "";
    }

    if (this.state.transaction.transaction_type === "deposit") {
      var title = "Deposit money";
    } else {
      var title = "Withdraw money";
    }

    return <dialog className={classes} onClick={this.onClick}>
      <div>
        <h1>{title}</h1>
        <section className="body">
          <div>
            <div className="text">I would like to </div>
            <Select name="transaction_type" className="select-box transaction-type" placeholder="Select" 
              value={this.state.transaction.transaction_type} onChange={this.handleChange}>
              <Option value="deposit">deposit</Option>
              <Option value="withdraw">withdraw</Option>
            </Select>
            <div><div className="text">$</div>
            <input type="text" id="amount" name="amount" className={amountClasses} 
            placeholder="100" type="number" max="100000000" min="0" step="0.01" 
            value={this.state.transaction.amount} onChange={this.handleChange} /></div>
            <div className="text">into my account now.</div>
          </div>
        </section>
        <section className="options">
          <button onClick={this.cancel}>Nevermind</button>
          <button className={confirmTransactionClasses} onClick={this.confirmTransaction}>Yep, Looks Good</button>
        </section>
      </div>
    </dialog>
  },

  getAmountElementClassNames: function() {
    var classes = "";
    if (this.state.errors.amount !== undefined && this.state.errors.amount !== '') {
      classes = 'error';
    }

    return classes;
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
    this.validateAmount();
    if (!this.hasErrors() && !this.state.transactionInProgress) {
      this.setState({
        transactionInProgress: true
      });

      var transaction = this.state.transaction;
      var moment = require('moment');
      transaction.timestamp = moment().format("YYYY-MM-DDTHH:mm:ss");
    
      this.props.needTransactionCreation(transaction, this.transactionCompleted);
    }
  },

  transactionCompleted: function() {
    this.setState({
      transactionInProgress: false,
      transaction: {
        amount: this.props.amount,
        transaction_type: "deposit"
      }
    })
  },

  cancel: function(event) {
    this.props.cancel();
  }
})

export default CreateCashTransaction
