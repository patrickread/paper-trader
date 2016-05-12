import React from 'react'

var moment = require('moment');

var DatePicker = React.createClass({
  getInitialState: function () {
    return {
      lockedToNow: true,
      value: 'now'
    }
  },

  componentWillMount: function () {
    if (!!this.props.lockedToNow) {
      this.state.lockedToNow = this.props.lockedToNow;
    }
  },

  componentWillUnmount () {
    
  },

  nowClicked: function() {
    this.setState({
      lockedToNow: false,
      value: moment().format("YYYY-MM-DD")
    })
  },

  onChange: function(evt) {
    var value = evt.target.value;
    this.setState({
      value: value
    });

    var timestamp = moment(value).format("YYYY-MM-DDTHH:mm:ss");
    this.props.onChange(timestamp);
  },

  render: function () {
    if (this.state.lockedToNow) {
      return <div className="text-bottom-border text" onClick={this.nowClicked}>now</div>
    } else {
      return <div className="text">on <input id="timestamp-picker" type="date" value={this.state.value} onChange={this.onChange}></input></div>
    }
  },

  confirm: function(event) {
    event.stopPropagation();
    this.props.confirm();
  },

  cancel: function(event) {
    event.stopPropagation();
    this.props.cancel();
  }
})

export default DatePicker