import React from 'react'

import Portfolio from './Models/Portfolio'
import Header from './Shared/Header'
import { Tabs, Tab } from 'react-mdl'
import AddButton from './Shared/AddButton'
import LoadingDialog from './Shared/LoadingDialog'
import StockLine from './StockLine'
import Total from './Total'
import AWSHandler from './Apis/AWS/AWSHandler'

require('velocity-animate');
require('velocity-animate/velocity.ui');

import '../assets/css/app.less'

var App = React.createClass({
  getInitialState: function () {
    return {
      loading: true,
      activeTab: 0,
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
      ],
      cash: 1034.97,
      portfolio: { holdings: [] }
    }
  },

  componentWillMount: function () {
    // Check for pre-saved AWS credentials
    var awsCredentials = reactCookie.load('awsCredentials');
    if (awsCredentials !== undefined) {
      this.loadTransactionsFromAWS(awsCredentials);
    }
  },

  componentWillUnmount () {
    
  },

  render: function () {
    var stockLines = []

    var appClassName = 'paper-trader-app';

    var awsCredentials = reactCookie.load('awsCredentials');
    if (awsCredentials !== undefined) {
      if (this.state.loading) {
        appClassName += ' loading';
      }

      for (var stock of this.state.portfolio.holdings) {
        stockLines.push(<StockLine key={stock.key} stock={stock} onTrade={this.trade}>
                        </StockLine>)
      }

      var authedSection = 
        <div>
          <section className="content">
            <Total cash={this.state.cash} portfolio={this.state.portfolio}></Total>
            <hr />
            {stockLines}
          </section>
          <AddButton>
          </AddButton>
        </div>
    }

    return <div style={this.props.style} className={appClassName}>
      <Header loginStarted={this.loginStarted} loginCompleted={this.loadTransactionsFromAWS} logoutCompleted={this.resetUI}></Header>
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
        <Tab>Portfolio</Tab>
        <Tab>Transactions</Tab>
        <Tab>Settings</Tab>
      </Tabs>
      {authedSection}
      <LoadingDialog></LoadingDialog>
    </div>
  },

  trade: function(symbol) {
    console.log("Gonna trade " + symbol + "! Not implemented yet, though.");
  },

  loginStarted: function() {
    this.setState({ loading: true });
  },

  loadTransactionsFromAWS: function(awsCredentials) {
    var awsHandler = new AWSHandler(awsCredentials);
    awsHandler.getTransactions(this.transactionsLoaded);
  },

  // We've logged out; reset everything
  resetUI: function() {
    this.setState({
      transactions: null,
      portfolio: { holdings: [] },
      cash: null
    })
  },

  transactionsLoaded: function(transactions) {
    this.setState({ loading: false, transactions: transactions });
    this.loadPortfolioFromTransactions();
  },

  loadPortfolioFromTransactions: function() {
    var portfolio = new Portfolio(this.state.transactions);
    var that = this;

    this.setState({
      portfolio: portfolio
    });

    portfolio.updateHoldingsFromAPI(function() {
      // refresh portfolio with new data
      that.setState({
        loading: false,
        portfolio: portfolio
      })
    });
  }
})

export default App
