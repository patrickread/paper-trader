import React from 'react'
import ExpandingInput from './Shared/ExpandingInput'
import QuoteService from './Apis/QuoteService'

var SymbolLookupInput = React.createClass({
  getInitialState: function () {
    return {
      value: null
    }
  },

  componentWillMount: function () {
    if (!!this.props.value) {
      this.state.value = this.props.value;
    }
  },

  componentWillReceiveProps: function(newProps) {
    if (!!newProps.value) {
      this.state.value = newProps.value;
    }
  },

  componentWillUnmount () {
    
  },

  handleBlur: function(event) {
    var targetName = event.target.name;
    var value = event.target.value;

    var quoteService = new QuoteService();
    var that = this;

    if (!!value) {
      quoteService.lookupCompany(value).then(function(data) {
        if (data.length > 0) {
          var name = data[0].Name;          
          that.props.symbolFound(name, null);
        } else {
          that.props.symbolFound(null, "Should be a valid stock.");
        }
      });
    } else {
      this.props.symbolFound(null, "Should be a valid stock.");
    }
  },

  render: function () {
    if (!!this.state.width) {
      var style = {
        width: this.state.width
      }
    }

    return <ExpandingInput type="text" 
            value={this.state.value}
            onBlur={this.handleBlur} {...this.props} />
  }
})

export default SymbolLookupInput
