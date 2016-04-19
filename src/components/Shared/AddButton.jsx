import React from 'react'

var AddButton = React.createClass({
  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  render: function () {
    
    return <button className="add-button" onClick={this.props.onClick}>
      <div className="icon icon-plus">
      </div>
    </button>
  }
})

export default AddButton
