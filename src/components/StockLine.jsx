import React from 'react'

import Markit from './Apis/QuoteService'

var StockLine = React.createClass({
  getInitialState: function () {
    return {
      price: "$0.00"
    }
  },

  componentWillMount: function () {
    var that = this;
    var quoteService = new Markit.QuoteService(this.props.symbol, function(jsonResult) {
      that.setState({ price: "$" + jsonResult.LastPrice.toString() });
    })
  },

  componentWillUnmount () {
    
  },

  render: function () {
    
    return <div style={this.props.style} className='stock-line container'>
      <div className="row">
        <div className="col-xs-6 col-sm-2">
          <label className="name">{this.props.name}</label>
          <h1 className="symbol">{this.props.symbol}</h1>
        </div>
        <div className="col-xs-6 col-sm-1">
          <div className="price">{this.state.price}</div>
        </div>
      </div>
      <div className="row toolbar">
      </div>
    </div>
  }
})

export default StockLine
