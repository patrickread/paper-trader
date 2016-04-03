import React from 'react'

import Portfolio from './Models/Portfolio'
import Header from './Shared/Header'
import StockLine from './StockLine'

require('velocity-animate');
require('velocity-animate/velocity.ui');

import '../assets/css/app.less'

var App = React.createClass({
  getInitialState: function () {
    return {
      transactions: [
        {
          key: 1,
          symbol: 'AAPL',
          name: 'Apple Inc.',
          timestamp: new Date(2014, 9, 30),
          shares: 40,
          price: 100.78,
          commission: 5.05
        },
        {
          key: 2,
          symbol: 'AAPL',
          name: 'Apple Inc.',
          timestamp: new Date(2014, 10, 14),
          shares: 30,
          price: 98.64,
          commission: 5.03
        },
        {
          key: 3,
          symbol: 'TWTR',
          name: 'Twitter Inc.',
          timestamp: new Date(2015, 4, 29),
          shares: 52,
          price: 38.12,
          commission: 7.00
        },
        {
          key: 4,
          symbol: 'TWTR',
          name: 'Twitter Inc.',
          timestamp: new Date(2015, 5, 29),
          shares: 53,
          price: 36.81,
          commission: 7.00
        }
      ]
    }
  },

  componentWillMount: function () {
    var portfolio = new Portfolio(this.state.transactions);
    this.setState({
      portfolio: portfolio
    });
  },

  componentWillUnmount () {
    
  },

  render: function () {
    var components = []

    for (var stock of this.state.portfolio.holdings) {
      components.push(<StockLine {...stock}>
                      </StockLine>)
    }

    return <div style={this.props.style} className='paper-trader-app'>
      <Header></Header>
      <section className="content">
        {components}
      </section>
    </div>
  }
})

export default App
