import React from 'react'

import Header from './Shared/Header'
import StockLine from './StockLine'

require('velocity-animate');
require('velocity-animate/velocity.ui');

import '../assets/css/app.less'

var App = React.createClass({
  getInitialState: function () {
    return {
      stocks: [{
        key: 1,
        symbol: 'AAPL',
        name: 'Apple Inc.',
        price: 199.09
      },
      {
        key: 2,
        symbol: 'GOOG',
        name: 'Alphabet Inc.',
        price: 186.42
      }]
    }
  },

  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  render: function () {
    var components = []

    for (var stock of this.state.stocks) {
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
