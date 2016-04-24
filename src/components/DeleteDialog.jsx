import React from 'react'
import Dialog from './Shared/Dialog'

var DeleteDialog = React.createClass({
  getInitialState: function () {
    return {
      
    }
  },

  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  render: function () {
    var deleteBody = "Would you like to delete the " + this.props.transaction.transaction_type + 
        " transaction on " + this.props.transaction.symbol + "?"

    return <Dialog title="Delete?" body={deleteBody} cancelText="Nevermind" confirmText="Let's do it!" {...this.props} />
  }
})

export default DeleteDialog
