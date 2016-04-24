import React from 'react'

var Dialog = React.createClass({
  getInitialState: function () {
    return {
      
    }
  },

  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  render: function () {
    return <dialog>
      <div>
        <h1>{this.props.title}</h1>
        <section className="body">
          <div>
            <div className="text">{this.props.body}</div>
          </div>
        </section>
        <section className="options">
          <button onClick={this.cancel}>{this.props.cancelText}</button>
          <button onClick={this.confirm}>{this.props.confirmText}</button>
        </section>
      </div>
    </dialog>
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

export default Dialog
