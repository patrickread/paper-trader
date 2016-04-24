import React from 'react'
import TransactionLine from './TransactionLine'
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
    
    if (this.props.portfolio.transactions.length > 0) {
      for (var transaction of this.props.portfolio.transactions) {
        transactionLines.push(<TransactionLine key={transaction.id} transaction={transaction} delete={this.deleteTransaction} />);
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
            {transactionLines}
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
