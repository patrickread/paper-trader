import React from 'react'
import StockLine from './StockLine'
import Portfolio from './Models/Portfolio'
import Total from './Total'

var PortfolioTab = React.createClass({
  getInitialState: function () {
    return {
      
    }
  },

  componentWillMount: function () {
    
  },

  componentWillUnmount () {
    
  },

  openCreateCashTransaction: function() {
    this.props.openCreateCashTransaction();
  },

  render: function () {
    var stockLines = []

    if (this.props.portfolio.holdings.length > 0) {
      for (var stock of this.props.portfolio.holdings) {
        stockLines.push(<StockLine key={stock.key} stock={stock} onTrade={this.trade}>
                        </StockLine>)
      }
    } else {
      var blankStock = Portfolio.blankStock();
      for (var i=0; i<3; i++) {
        stockLines.push(<StockLine key={i} blankEntry={true} stock={blankStock}>
                          </StockLine>)
      }
    }

    return <div>
      <Total cash={this.props.portfolio.cash} portfolio={this.props.portfolio} openCreateCashTransaction={this.openCreateCashTransaction}></Total>
      <hr />
      {stockLines}
      </div>;
  }
})

export default PortfolioTab
