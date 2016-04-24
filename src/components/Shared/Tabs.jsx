import React from 'react';

var Tabs = React.createClass({
  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  render: function () {
    
    return <ul className="tabs">
      {this.props.children}
    </ul>
  }
})

export default Tabs
