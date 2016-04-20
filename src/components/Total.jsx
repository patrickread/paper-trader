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
      var percentChangeToday = totals.percentChangeToday;

      var percentChangeTodayString = 'N/A';

      if (percentChangeToday !== undefined && !isNaN(percentChangeToday)) {
        percentChangeTodayString = numeral(totals.percentChangeToday).format('0,0.00%');
      }

      if (percentChangeToday >= 0) {
        changePercentClassName += ' positive';
        percentChangeTodayString = percentChangeTodayString.replace(/^/, '+');
      } else {
        changePercentClassName += ' negative';
      }
    }

    var changeDollarClassName = 'loaded-text holding-change';
    var changeDollarTodayString = '';
    if (totals !== undefined && !isNaN(totals.dollarChangeToday)) {
      var changeDollarTodayString = numeral(totals.dollarChangeToday).format('$0,0.00');

      if (totals.dollarChangeToday >= 0) {
        changeDollarClassName += ' positive';
        changeDollarTodayString = changeDollarTodayString.replace(/^/, '+');
      } else {
        changeDollarClassName += ' negative';
      }
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
