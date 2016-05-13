import React from 'react'

var onClickOutside = require('react-onclickoutside');

var Select = onClickOutside(React.createClass({
  getInitialState: function() {
    return {
      open: false,
      value: this.props.value,
      display: this.props.display
    }
  },

  componentWillMount: function () {
    
  },

  componentWillReceiveProps: function(newProps) {
    if (!!newProps.value) {
      this.state.value = newProps.value;
    }
  },

  componentWillUnmount () {
    
  },

  renderChildren: function () {
    return React.Children.map(this.props.children, function (child) {
      if (child.props.value === this.state.value) {
        return React.cloneElement(child, {
          onClick: this.optionClicked,
          className: "option selected"
        });
      } else {
        return React.cloneElement(child, {
          onClick: this.optionClicked,
          className: "option"
        });
      }
    }.bind(this))
  },

  render: function () {
    var classes = this.props.className;
    if (this.props.error) {
      classes += " error";
    }

    var optionClasses = "options";
    if (this.state.open) {
      optionClasses += " active";
    }

    var currentlySelected = this.props.placeholder;
    if (this.state.value !== undefined) {
      currentlySelected = this.state.value;
    }

    return <div className={classes}>
      <div className="selected-element" onClick={this.selectBoxClicked}>
        <div className="selected-element-inner" onClick={this.selectBoxClicked}>
          {currentlySelected}
        </div>
        <div className="arrow-box" onClick={this.selectBoxClicked}>

        </div>
      </div>
      <div className={optionClasses}>
        {this.renderChildren()}
      </div>
    </div>
  },

  selectBoxClicked: function(event) {
    event.preventDefault();
    this.setState({
      open: !this.state.open
    });
  },

  optionClicked: function(optionValue, optionDisplay) {
    this.setState({
      value: optionValue,
      display: optionDisplay,
      open: false
    });

    this.props.onChange(optionValue);
  },

  handleClickOutside: function(event) {
    this.setState({
      open: false
    })
  }
}))

var Option = React.createClass({
  componentWillMount: function () {
    this.setState({
      display: this.props.children.first
    })
  },

  componentWillUnmount () {
    
  },

  render: function () {
    return <div className={this.props.className} onClick={this.onClick}>
      {this.props.children}
    </div>
  },

  onClick: function(event) {
    this.props.onClick(this.props.value, this.props.children);
  }
})

export { Select, Option }
