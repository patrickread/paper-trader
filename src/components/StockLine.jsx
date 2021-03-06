import React from 'react'

import DownArrow from './images/down_arrow@2x.png';

var StockLine = React.createClass({
  getInitialState: function () {
    return {
      expanded: false
    }
  },

  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  onGraph: function() {
    console.log("Gonna graph. Not implemented, though!");
  },

  onToggleExpand: function() {
    this.setState({
      expanded: !this.state.expanded
    })
  },

  onTrade: function() {
    this.props.onTrade(this.props.stock.symbol, this.props.stock.name, this.props.stock.priceString);
  },

  render: function () {
    var changePercentClassName = "loaded-text change-percent ";
    var holdingChangeClassName = "loaded-text holding-change ";
    if (this.props.stock !== undefined) {
      changePercentClassName += this.props.stock.changePercentObj.className;
      holdingChangeClassName += this.props.stock.changeNumbericObj.className;
    }

    var topLineClasses = 'content-line stock-line container';

    if (this.props.blankEntry) {
      topLineClasses += ' blank-entry';
    }

    if (this.state.expanded) {
      topLineClasses += ' expanded';
    }

    return <div style={this.props.style} className={topLineClasses}>
      <div className="row">
        <div className="col-xs-6 col-sm-3">
          <label className="name">{this.props.stock.name || ''}</label>
          <h1 className="symbol">{this.props.stock.symbol}</h1>
        </div>
        <div className="hidden-xs col-sm-3">
          <label className="loaded-label">Share Price</label>
          <div className="loaded-text price">{this.props.stock.priceString}</div>
        </div>
        <div className="hidden-xs col-sm-3">
          <label className="loaded-label">% Change Today</label>
          <div className={changePercentClassName}>{this.props.stock.changePercentObj.string}</div>
        </div>
        <div className="col-xs-6 col-sm-3">
          <label className="loaded-label right">$ Change Today</label>
          <h1 className={holdingChangeClassName}>{this.props.stock.changeNumbericObj.string}</h1>
        </div>
      </div>
      <div className="row expanded-row extra">
        <div className="col-xs-6 hidden-sm">
          <label className="loaded-label">Share Price</label>
          <div className="loaded-text price">{this.props.stock.priceString}</div>
        </div>
        <div className="col-xs-6 hidden-sm">
          <label className="loaded-label right">% Change Today</label>
          <div className={changePercentClassName + " right"}>{this.props.stock.changePercentObj.string}</div>
        </div>
      </div>
      <div className="row expanded-row">
        <div className="col-xs-6 col-sm-3">
          <label className="loaded-label">Total Shares</label>
          <div className="loaded-text regular">{this.props.stock.shares}</div>
        </div>
        <div className="hidden-xs col-sm-3">
          <label className="loaded-label">Cost Basis</label>
          <div className="loaded-text regular">{this.props.stock.costBasis.string}</div>
        </div>
        <div className="hidden-xs col-sm-3">
          <label className="loaded-label">Market Value</label>
          <div className="loaded-text regular">{this.props.stock.marketValue.string}</div>
        </div>
        <div className="col-xs-6 col-sm-3">
          <label className="loaded-label right">Overall Return</label>
          <div className="loaded-text regular right">{this.props.stock.overallReturn.string}</div>
        </div>
      </div>
      <div className="row toolbar">
        <div className="toolbar-item" onClick={this.onTrade}>
          Trade
        </div>
        <div className="toolbar-item" onClick={this.onGraph}>
          Graph
        </div>
        <div className="toolbar-item toolbar-right" onClick={this.onToggleExpand}>
          <img src={DownArrow} />
        </div>
      </div>
    </div>
  }
})

export default StockLine
