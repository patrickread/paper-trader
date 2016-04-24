import React from 'react';
import { Link } from 'react-router'

var Tab = React.createClass({
  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  render: function () {
    return <li className="tab">
      <Link to={this.props.to} activeClassName="active">
        {this.props.children}
      </Link>
    </li>
  }
})

export default Tab
