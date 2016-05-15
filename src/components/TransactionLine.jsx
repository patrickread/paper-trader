import React from 'react'
import DeleteIcon from './images/delete_icon@2x.png';

var TransactionLine = React.createClass({
  getInitialState: function () {
    return {
      
    }
  },

  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  render: function () {
    return <div className="content-line transaction-line container">
      <button className="delete-icon" onClick={this.delete}><img src={DeleteIcon} /></button>
      <div className="row">
        <div className="col-xs-6 col-sm-3">
          <label className="name">{this.props.transaction.name || ''}</label>
          <h1 className="symbol">{this.props.transaction.symbol}</h1>
        </div>
        <div className="hidden-xs col-sm-1">
          <div className="loaded-text transaction-type">{this.props.transaction.transaction_type}</div>
        </div>
        <div className="hidden-xs col-sm-2">
          <label className="loaded-label">Price</label>
          <div className="loaded-text price">{this.props.transaction.priceString}</div>
        </div>
        <div className="hidden-xs col-sm-1">
          <label className="loaded-label">Shares</label>
          <div className="loaded-text normal-text">{this.props.transaction.shares}</div>
        </div>
        <div className="hidden-xs col-sm-2">
          <label className="loaded-label">Date</label>
          <div className="loaded-text normal-text">{this.props.transaction.timestampString}</div>
        </div>
        <div className="hidden-xs col-sm-1">
          <label className="loaded-label">Commission</label>
          <div className="loaded-text normal-text">{this.props.transaction.commissionString}</div>
        </div>
        <div className="col-xs-6 col-sm-2">
          <label className="right">Total</label>
          <h1 className="loaded-text h1 right">{this.props.transaction.totalString}</h1>
        </div>
      </div>
    </div>
  },

  delete: function(event) {
    this.props.delete(this.props.transaction);
  }
})

export default TransactionLine
