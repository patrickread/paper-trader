import React from 'react'

var SymbolChoice = React.createClass({
  componentWillUnmount () {
    
  },

  onClick: function() {
    this.props.parentOnClick(this.props.choice);
  },

  render: function () {
    var choice = this.props.choice
    return <li data-name={choice.Symbol} onClick={this.onClick}>{choice.Symbol} - {choice.Name}</li>
  }
})

export default SymbolChoice
