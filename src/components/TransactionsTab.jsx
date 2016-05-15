import React from 'react'
import TransactionLine from './TransactionLine'
import CashTransactionLine from './CashTransactionLine'
import DeleteDialog from './DeleteDialog'

var TransactionsTab = React.createClass({
  getInitialState: function () {
    return {
      dialogShown: false
    }
  },

  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  render: function () {
    var transactionLines = [];
    var cashTransactionLines = [];
    
    if (!!this.props.portfolio.transactions) {
      for (var transaction of this.props.portfolio.transactions) {
        transactionLines.push(<TransactionLine key={transaction.id} transaction={transaction} delete={this.deleteTransaction} />);
      }
    }

    if (!!this.props.portfolio.cashTransactions) {
      for (var transaction of this.props.portfolio.cashTransactions) {
        cashTransactionLines.push(<CashTransactionLine key={transaction.id} cashTransaction={transaction} delete={this.deleteTransaction} />);
      }
    }

    if (this.state.dialogShown) {
      var dialog = <DeleteDialog transaction={this.state.transactionBeingDeleted}
                     cancel={this.cancelDeleteTransaction} 
                    confirm={this.reallyDeleteTransaction} />
    } else {
      var dialog = "";
    }

    return <div>
            {dialog}
            <h2>Stocks</h2>
            {transactionLines}
            <h2>Cash</h2>
            {cashTransactionLines}
          </div>
  },

  deleteTransaction: function(transaction) {
    this.setState({
      transactionBeingDeleted: transaction,
      dialogShown: true
    });
  },

  reallyDeleteTransaction: function() {
    var transaction = this.state.transactionBeingDeleted;
    this.setState({
      transactionBeingDeleted: null,
      dialogShown: false
    });
    this.props.deleteTransaction(transaction);
  },

  cancelDeleteTransaction: function() {
    this.setState({
      transactionBeingDeleted: null,
      dialogShown: false
    });
  }
})

export default TransactionsTab
