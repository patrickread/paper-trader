import React from 'react'
import ExpandingInput from './Shared/ExpandingInput'
import QuoteService from './Apis/QuoteService'
import SymbolChoice from './SymbolChoice'

var SymbolLookupInput = React.createClass({
  getInitialState: function () {
    return {
      value: null,
      choices: [],
      choicesOpen: false
    }
  },

  componentWillMount: function () {
    if (!!this.props.value) {
      this.state.value = this.props.value;
    }
  },

  componentWillReceiveProps: function(newProps) {
    this.state.value = newProps.value;
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
          that.setState({
            choices: data,
            choicesOpen: true
          })

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

  onChange: function (event) {
    this.props.onInputChange(event);
  },

  selectChoice: function (choice) {
    this.setState({
      value: choice.Symbol,
      choicesOpen: false
    })
  },

  render: function () {
    var choicesList = '';
    if (this.state.choicesOpen) {
      var choices = [];

      for (var choice of this.state.choices) {
        choices.push(<SymbolChoice choice={choice} parentOnClick={this.selectChoice}></SymbolChoice>)
      }

      choicesList = <ul className="choices">
          {choices}
        </ul>
    }

    var props = Object.assign({}, this.props)
    delete props.value

    return <div className="symbol-lookup-input text">
        <ExpandingInput type="text" 
          value={this.state.value}
          onBlur={this.handleBlur}
          onInputChange={this.onChange} {...props} />
        {choicesList}
      </div>
  }
})

export default SymbolLookupInput
