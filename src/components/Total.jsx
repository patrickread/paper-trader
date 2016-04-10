import React from 'react'

var numeral = require('numeral');

var Total = React.createClass({
  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  render: function () {
    var totals = this.props.portfolio.totals;

    var changePercentClassName = 'loaded-text change-percent';
    var percentChangeTodayString = '';
    if (totals !== undefined) {
      if (totals.percentChangeToday >= 0) {
        changePercentClassName += ' positive';
      } else {
        changePercentClassName += ' negative';
      }

      var percentChangeTodayString = numeral(totals.percentChangeToday).format('0,0.00%');
    }

    var changeDollarClassName = 'loaded-text holding-change';
    var changeDollarTodayString = '';
    if (totals !== undefined) {
      if (totals.dollarChangeToday >= 0) {
        changeDollarClassName += ' positive';
      } else {
        changeDollarClassName += ' negative';
      }

      var changeDollarTodayString = numeral(totals.dollarChangeToday).format('$0,0.00');
    }

    return <div style={this.props.style} className='stock-line total-line container'>
      <div className="row">
        <div className="col-xs-6 col-sm-3">
          <h2>
            Summary
          </h2>
        </div>
        <div className="hidden-xs col-sm-1">
          <label className="loaded-label">Cash</label>
          <div className="loaded-text price">{numeral(this.props.cash).format('$0,0.00')}</div>
        </div>
        <div className="hidden-xs col-sm-3 col-sm-offset-2">
          <label className="loaded-label">% Change Today</label>
          <div className={changePercentClassName}>{percentChangeTodayString}</div>
        </div>
        <div className="col-xs-6 col-sm-3">
          <label className="loaded-label holding-change-label">$ Change Today</label>
          <h1 className={changeDollarClassName}>{changeDollarTodayString}</h1>
        </div>
      </div>
    </div>
  }
})

export default Total
