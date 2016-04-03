import React from 'react'

import Markit from './Apis/QuoteService'

var StockLine = React.createClass({
  getInitialState: function () {
    return {
      price: "$0.00",
      changePercentObj: {
        string: "",
        number: 0.00,
        className: ""
      },
      holdingChangeObj: {
        string: "",
        number: 0.00,
        className: ""
      }
    }
  },

  componentWillMount: function () {
    var that = this;
    var quoteService = new Markit.QuoteService(this.props.symbol, function(jsonResult) {
      that.setState({
        price: "$" + jsonResult.LastPrice.toString(),
        changePercentObj: that.changePercentObj(jsonResult.ChangePercent),
        holdingChangeObj: that.holdingChangeObj(jsonResult.Change, that.props.shares)
      });
    })
  },

  componentWillUnmount () {
    
  },

  render: function () {
    var changePercentClassName = "change-percent " + this.state.changePercentObj.className;
    var holdingChangeClassName = "holding-change " + this.state.holdingChangeObj.className;

    return <div style={this.props.style} className='stock-line container'>
      <div className="row">
        <div className="col-xs-6 col-sm-2">
          <label className="name">{this.props.name}</label>
          <h1 className="symbol">{this.props.symbol}</h1>
        </div>
        <div className="col-xs-6 col-sm-1">
          <div className="price">{this.state.price}</div>
        </div>
        <div className="hidden-xs col-sm-2 col-sm-offset-4">
          <label>Changes Today</label>
          <div className={changePercentClassName}>{this.state.changePercentObj.string}</div>
        </div>
        <div className="hidden-xs col-sm-3">
          <div className={holdingChangeClassName}>{this.state.holdingChangeObj.string}</div>
        </div>
      </div>
      <div className="row toolbar">
      </div>
    </div>
  },

  changePercentObj: function(changePercent) {
    var changePercent = {
      number: Math.round(changePercent * 100.0) / 100.0
    };

    if (changePercent.number >= 0) {
      changePercent.string = "+" + changePercent.number.toString() + "%";
      changePercent.className = "positive";
    } else {
      changePercent.string = changePercent.number.toString() + "%";
      changePercent.className = "negative";
    }

    return changePercent;
  },

  holdingChangeObj: function(dollarChange, shares) {
    var holdingChange = {
      number: Math.round(dollarChange * shares * 100.0) / 100.0
    };
    if (holdingChange.number >= 0) {
      holdingChange.string = "+$" + holdingChange.number.toString();
      holdingChange.className = "positive";
    } else {
      holdingChange.string = "-$" + (holdingChange.number * -1).toString();
      holdingChange.className = "negative";
    }

    return holdingChange;
  }
})

export default StockLine
