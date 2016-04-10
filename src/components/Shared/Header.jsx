import React from 'react';
import LoginButton from '../Shared/LoginButton';

var Header = React.createClass({
  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  render: function () {
    
    return <header style={this.props.style}>
      <h1>Paper Trader</h1>
      <LoginButton />
    </header>
  }
})

export default Header
