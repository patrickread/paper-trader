import React from 'react'
import DeleteIcon from './images/delete_icon@2x.png';

var CashTransactionLine = React.createClass({
  getInitialState: function () {
    return {
      
    }
  },

  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  render: function () {
    return <div className="content-line transaction-line cash-transaction-line container">
      <button className="delete-icon" onClick={this.delete}><img src={DeleteIcon} /></button>
      <div className="row">
        <div className="col-xs-6 col-sm-3">
          <label className="name">Type</label>
          <h1 className="symbol">CASH</h1>
        </div>
        <div className="hidden-xs col-sm-2">
          <div className="loaded-text transaction-type">{this.props.cashTransaction.transaction_type}</div>
        </div>
        <div className="hidden-xs col-sm-2">
          <label className="loaded-label">Date</label>
          <div className="loaded-text normal-text">{this.props.cashTransaction.timestampString}</div>
        </div>
        <div className="col-xs-6 col-sm-offset-2 col-sm-3">
          <label className="right">Total</label>
          <h1 className="loaded-text h1 right">{this.props.cashTransaction.amountString}</h1>
        </div>
      </div>
    </div>
  },

  delete: function(event) {
    this.props.delete(this.props.cashTransaction);
  }
})

export default CashTransactionLine
