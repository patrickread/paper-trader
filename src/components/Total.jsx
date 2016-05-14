import React from 'react'
import EditIcon from './images/edit_icon@2x.png';

import DownArrow from './images/down_arrow@2x.png';

var numeral = require('numeral');

var Total = React.createClass({
  getInitialState: function () {
    return {
      expanded: false
    }
  },

  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  editCash: function() {
    this.props.openCreateCashTransaction();
  },

  onToggleExpand: function() {
    this.setState({
      expanded: !this.state.expanded
    })
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

    var costBasisString = '';
    if (totals !== undefined) {
      costBasisString = numeral(totals.costBasis).format('$0,0.00');
    }

    var marketValueString = '';
    if (totals !== undefined) {
      marketValueString = numeral(totals.marketValue).format('$0,0.00');
    }

    var overallReturnString = '';
    var overallReturnClassName = 'loaded-text regular right';
    if (totals !== undefined) {
      overallReturnString = numeral(totals.overallReturn).format('$0,0.00');

      if (totals.overallReturn >= 0) {
        overallReturnClassName += ' positive';
        overallReturnString = overallReturnString.replace(/^/, '+');
      } else {
        overallReturnClassName += ' negative';
      }
    }

    var topLineClasses = 'content-line stock-line total-line container';

    if (this.state.expanded) {
      topLineClasses += ' expanded';
    }

    return <div style={this.props.style} className={topLineClasses}>
      <div className="row">
        <div className="col-xs-6 col-sm-3">
          <h2>
            Summary
          </h2>
        </div>
        <div className="hidden-xs col-sm-3">
          <label className="loaded-label">Cash</label>
          <div className="loaded-text price">{numeral(this.props.cash).format('$0,0.00')}</div>
          <div className="edit-icon" onClick={this.editCash}><img src={EditIcon} /></div>
        </div>
        <div className="hidden-xs col-sm-3">
          <label className="loaded-label">% Change Today</label>
          <div className={changePercentClassName}>{percentChangeTodayString}</div>
        </div>
        <div className="col-xs-6 col-sm-3">
          <label className="loaded-label holding-change-label">$ Change Today</label>
          <h1 className={changeDollarClassName}>{changeDollarTodayString}</h1>
        </div>
      </div>
      <div className="row expanded-row extra">
        <div className="col-xs-6 hidden-sm">
          <label className="loaded-label">Total Cost Basis</label>
          <div className="loaded-text regular">{costBasisString}</div>
        </div>
      </div>
      <div className="row expanded-row">
        <div className="hidden-xs col-sm-offset-3 col-sm-3">
          <label className="loaded-label">Total Cost Basis</label>
          <div className="loaded-text regular">{costBasisString}</div>
        </div>
        <div className="col-xs-6 col-sm-3">
          <label className="loaded-label">Total Market Value</label>
          <div className="loaded-text regular">{marketValueString}</div>
        </div>
        <div className="col-xs-6 col-sm-3">
          <label className="loaded-label right">Overall Return</label>
          <div className={overallReturnClassName}>{overallReturnString}</div>
        </div>
      </div>
      <div className="row toolbar">
        <div className="toolbar-item toolbar-right" onClick={this.onToggleExpand}>
          <img src={DownArrow} />
        </div>
      </div>
    </div>
  }
})

export default Total
