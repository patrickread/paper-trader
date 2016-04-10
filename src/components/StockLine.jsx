import React from 'react'

var StockLine = React.createClass({
  getInitialState: function () {
    return {
      
    }
  },

  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  onGraph: function() {
    console.log("Gonna graph. Not implemented, though!");
  },

  onTrade: function() {
    this.props.onTrade(this.props.stock.symbol);
  },

  render: function () {
    var changePercentClassName = "loaded-text change-percent " + this.props.stock.changePercentObj.className;
    var holdingChangeClassName = "loaded-text holding-change " + this.props.stock.holdingChangeObj.className;

    return <div style={this.props.style} className='stock-line container'>
      <div className="row">
        <div className="col-xs-6 col-sm-3">
          <label className="name">{this.props.stock.name}</label>
          <h1 className="symbol">{this.props.stock.symbol}</h1>
        </div>
        <div className="hidden-xs col-sm-2">
          <label className="loaded-label">Share Price</label>
          <div className="loaded-text price">{this.props.stock.priceString}</div>
        </div>
        <div className="hidden-xs col-sm-3 col-sm-offset-1">
          <label className="loaded-label">% Change Today</label>
          <div className={changePercentClassName}>{this.props.stock.changePercentObj.string}</div>
        </div>
        <div className="col-xs-6 col-sm-3">
          <label className="loaded-label holding-change-label">$ Change Today</label>
          <h1 className={holdingChangeClassName}>{this.props.stock.holdingChangeObj.string}</h1>
        </div>
      </div>
      <div className="row toolbar">
        <div className="toolbar-item" onClick={this.onTrade}>
          Trade
        </div>
        <div className="toolbar-item" onClick={this.onGraph}>
          Graph
        </div>
      </div>
    </div>
  }
})

export default StockLine
