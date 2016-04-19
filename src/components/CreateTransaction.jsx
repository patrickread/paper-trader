import React from 'react'

var CreateTransaction = React.createClass({
  getInitialState: function () {
    return {
      transaction: {
        shares: this.props.shares,
        symbol: this.props.symbol,
        price: this.props.price,
        commission: this.props.commission
      }
    }
  },

  componentWillReceiveProps: function(newProps) {
    this.setState({
      transaction: newProps
    })
  },

  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  render: function () {
    var classes = "create-transaction";

    return <dialog className={classes} onClick={this.onClick}>
      <div>
        <h1>Make a trade</h1>
        <section className="body">
          <div>
            I would like to buy <input type="text" id="shares" name="shares" placeholder="12" value={this.state.transaction.shares} /> shares of <input type="text" id="symbol" name="symbol" placeholder="MSFT" value={this.state.transaction.symbol} /> for <input type="text" id="price" name="price" placeholder="$56.46" value={this.state.transaction.price} /> a share now.
          </div>
          <div>
            My broker charged me <input type="text" id="commission" name="commission" placeholder="$7.00" value={this.state.transaction.commission} /> commission on this deal.
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
    this.props.success();
  },

  cancel: function(event) {
    this.props.cancel();
  }
})

export default CreateTransaction
