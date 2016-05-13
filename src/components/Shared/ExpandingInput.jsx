import React from 'react'

var ExpandingInput = React.createClass({
  getInitialState: function () {
    return {
      value: null
    }
  },

  componentWillMount: function () {
    if (!!this.props.value) {
      this.state.value = this.props.value;
    }

    this.state.width = this.props.width;
  },

  componentWillReceiveProps: function(newProps) {
    if (!!newProps.value) {
      this.state.value = newProps.value;
    }

    this.state.width = newProps.width;
  },

  componentWillUnmount () {
    
  },

  onChange: function(evt) {
    var value = evt.target.value;

    var width = this.getTextWidth(value, 'Roboto 18pt');
    var multiplier = 1.5;
    var buffer = 40;
    var adjustedWidth = width * multiplier + buffer
    console.log('width: ' + adjustedWidth);

    this.setState({
      value: value,
      width: adjustedWidth
    });

    this.props.onInputChange(evt);
  },

  getTextWidth(text, font) {
    // re-use canvas object for better performance
    var canvas = this.canvas || (this.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    return metrics.width;
  },

  render: function () {
    if (!!this.state.width) {
      var style = {
        width: this.state.width
      }
    }

    return <input value={this.state.value} onChange={this.onChange} style={style} {...this.props} />
  }
})

export default ExpandingInput
