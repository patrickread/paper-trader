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
      loadingDialog: {
        open: false,
        message: ""
      },
      activeTab: 0,
      transactions: [ ],
      portfolio: { holdings: [], cash: null }
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
      if (this.state.loadingDialog.open) {
        appClassName += ' loading';
      }

      if (this.state.portfolio.holdings.length > 0) {
        for (var stock of this.state.portfolio.holdings) {
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

      var authedSection = 
        <div>
          <section className="content">
            <Total cash={this.state.portfolio.cash} portfolio={this.state.portfolio}></Total>
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
      <LoadingDialog message={this.state.loadingDialog.message}></LoadingDialog>
    </div>
  },

  trade: function(symbol) {
    console.log("Gonna trade " + symbol + "! Not implemented yet, though.");
  },

  loginStarted: function() {
    this.setState({ 
      loadingDialog: {
        open: true,
        message: "Logging in…"
      }
    });
  },

  loadTransactionsFromAWS: function(awsCredentials) {
    this.setState({
      loadingDialog: {
        open: true,
        message: "Acquiring the portfolio…"
      }
    });

    var awsHandler = new AWSHandler(awsCredentials);
    awsHandler.getTransactions(this.transactionsLoaded);
  },

  // We've logged out; reset everything
  resetUI: function() {
    this.setState({
      transactions: null,
      portfolio: { holdings: [], cash: null }
    })
  },

  transactionsLoaded: function(transactions) {
    this.setState({ loadingDialog: {
      open: true,
      message: "Infiltrating the exchanges…"
    }, transactions: transactions });
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
        loadingDialog: {
          open: false,
          message: ""
        },
        portfolio: portfolio
      })
    });
  }
})

export default App
