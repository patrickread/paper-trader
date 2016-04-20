import React from 'react'
import QuoteService from './Apis/QuoteService'

var CreateTransaction = React.createClass({
  getInitialState: function () {
    return {
      transaction: {
        shares: this.props.shares,
        symbol: this.props.symbol,
        price: this.props.price,
        commission: this.props.commission,
        type: "buy"
      }
    }
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({
      transaction: newProps.transaction
    })
  },

  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  handleChange: function(event) {
    var targetName = event.target.name;
    var value = event.target.value;

    // validate here

    var transaction = this.state.transaction;
    transaction[targetName] = value;

    this.setState({ transaction: transaction});
  },

  handleBlur: function(event) {
    var targetName = event.target.name;
    var value = event.target.value;

    if (targetName === 'symbol') {
      var quoteService = new QuoteService();
      var that = this;
      quoteService.lookupCompany(value).then(function(data) {
        if (data.length > 0) {
          var name = data[0].Name;
          var transaction = that.state.transaction;
          transaction.name = name;
          
          that.setState({
            transaction: transaction
          });
        }
      });
    }
  },

  render: function () {
    var classes = "create-transaction";

    return <dialog className={classes} onClick={this.onClick}>
      <div>
        <h1>Make a trade</h1>
        <section className="body">
          <div>
            I would like to buy <input type="text" id="shares" name="shares" placeholder="12" value={this.state.transaction.shares} onChange={this.handleChange} /> shares of <input type="text" id="symbol" name="symbol" placeholder="MSFT" value={this.state.transaction.symbol} onChange={this.handleChange} onBlur={this.handleBlur} /> for <input type="text" id="price" name="price" placeholder="$56.46" value={this.state.transaction.price} onChange={this.handleChange} /> a share now.
          </div>
          <div>
            My broker charged me <input type="text" id="commission" name="commission" placeholder="$7.00" value={this.state.transaction.commission} onChange={this.handleChange} /> commission on this deal.
          </div>
        </section>
        <section className="options">
          <button onClick={this.cancel}>Nevermind</button>
          <button onClick={this.confirmTransaction}>Yep, Looks Good</button>
        </section>
      </div>
    </dialog>
  },

  onClick: function(event) {
    event.stopPropagation();
  },

  confirmTransaction: function(event) {
    debugger;
    this.props.needTransactionCreation(this.state.transaction);
  },

  cancel: function(event) {
    this.props.cancel();
  }
})

export default CreateTransaction
