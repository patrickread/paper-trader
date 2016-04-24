import React from 'react'

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
      <div className="row">
        <div className="col-xs-6 col-sm-3">
          <label className="name">{this.props.transaction.name || ''}</label>
          <h1 className="symbol">{this.props.transaction.symbol}</h1>
        </div>
        <div className="hidden-xs col-sm-1">
          <div className="loaded-text">{this.props.transaction.type}</div>
        </div>
        <div className="hidden-xs col-sm-2">
          <label className="loaded-label">Price</label>
          <div className="loaded-text price">{this.props.transaction.priceString}</div>
        </div>
        <div className="hidden-xs col-sm-1">
          <label className="loaded-label">Shares</label>
          <div className="loaded-text">{this.props.transaction.shares}</div>
        </div>
        <div className="hidden-xs col-sm-2">
          <label className="loaded-label">Date</label>
          <div className="loaded-text">{this.props.transaction.timestampString}</div>
        </div>
        <div className="hidden-xs col-sm-1">
          <label className="loaded-label">Commission</label>
          <div className="loaded-text">{this.props.transaction.commissionString}</div>
        </div>
        <div className="hidden-xs col-sm-1">
          <label className="loaded-label">Total</label>
          <div className="loaded-text">{this.props.transaction.totalString}</div>
        </div>
      </div>
    </div>
  }
})

export default TransactionLine
