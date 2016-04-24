import React from 'react'
import TransactionLine from './TransactionLine'

var TransactionsTab = React.createClass({
  getInitialState: function () {
    return {
      
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
        transactionLines.push(<TransactionLine key={transaction.id} transaction={transaction} />);
      }
    }

    return <div>{transactionLines}</div>
  }
})

export default TransactionsTab
