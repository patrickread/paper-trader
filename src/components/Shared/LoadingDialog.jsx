import React from 'react'

var LoadingDialog = React.createClass({
  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  render: function () {
    var classes = "loading-dialog";
    if (this.props.error) {
      classes += " error";
    }
    return <dialog className={classes}>
      <div>
        {this.props.message}
      </div>
    </dialog>
  }
})

export default LoadingDialog
