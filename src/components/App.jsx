import React from 'react'
import Portfolio from './Models/Portfolio'
import Header from './Shared/Header'
import Tabs from './Shared/Tabs'
import Tab from './Shared/Tab'
import PortfolioTab from './PortfolioTab'
import TransactionsTab from './TransactionsTab'
import AddButton from './Shared/AddButton'
import LoadingDialog from './Shared/LoadingDialog'
import CreateTransaction from './CreateTransaction'
import ApiService from './Apis/ApiService'

import '../styles/app.less'

var App = React.createClass({
  getInitialState: function () {
    return {
      loadingDialog: {
        open: false,
        error: false,
        message: ""
      },
      activeTab: 0,
      transactions: [ ],
      portfolio: { holdings: [], cash: null, transactions: [] },
      createTransactionDialogOpen: false,
      newTransaction: {

      }
    }
  },

  componentWillMount: function () {
    this.refreshTransactions();
  },

  componentWillUnmount () {
    
  },

  render: function () {
    var stockLines = []

    var appClassName = 'paper-trader-app';

    var token = reactCookie.load('id_token');
    if (token !== undefined) {
      if (this.state.loadingDialog.open) {
        appClassName += ' loading';
      } else if (this.state.createTransactionDialogOpen) {
        appClassName += ' creating-transaction';
      }

      var tabbedContent = React.cloneElement(this.props.children, {portfolio: this.state.portfolio, deleteTransaction: this.deleteTransaction});

      var authedSection = 
        <div>
          <section className="content">
            {tabbedContent}
          </section>
          <AddButton onClick={this.openCreateTransactionDialog}>
          </AddButton>
        </div>
    }

    var newTransaction = { transaction: this.state.newTransaction };

    return <div style={this.props.style} className={appClassName} onClick={this.appClicked}>
      <Header loginStarted={this.loginStarted} loginCompleted={this.loadTransactionsFromServer} logoutCompleted={this.resetUI}></Header>
      <Tabs>
        <Tab to="/portfolio">Portfolio</Tab>
        <Tab to="/transactions">Transactions</Tab>
      </Tabs>
      {authedSection}
      <LoadingDialog message={this.state.loadingDialog.message} error={this.state.loadingDialog.error}></LoadingDialog>
      <CreateTransaction needTransactionCreation={this.createTransaction} cancel={this.transactionCancelled} {...newTransaction}></CreateTransaction>
    </div>
  },

  refreshTransactions: function() {
    this.loadTransactionsFromServer();
  },

  trade: function(symbol, name, price) {
    this.setState({
      newTransaction: {
        symbol: symbol,
        name: name,
        price: price
      },
      createTransactionDialogOpen: true
    });
  },

  loginStarted: function() {
    this.setState({ 
      loadingDialog: {
        open: true,
        message: "Logging in…"
      }
    });
  },

  loadTransactionsFromServer: function() {
    this.setState({
      loadingDialog: {
        open: true,
        message: "Acquiring the portfolio…"
      }
    });

    var token = reactCookie.load('id_token');
    this._apiService = new ApiService(token);

    this._apiService.getTransactions(this.transactionsLoaded, this.transactionsFailedToLoad);
  },

  deleteTransaction: function(transaction) {
    var transactions = this.state.portfolio.transactions;
    for (var trans of transactions) {
      if (trans.id === transaction.id) {
        transactions.splice(trans, 1);
      }
    }
    var portfolio = new Portfolio(transactions);

    this.setState({
      portfolio: portfolio
    });

    this._apiService.deleteTransaction(transaction, 
      function() {

      },
      function() {

      });
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

  transactionsFailedToLoad: function(response) {
    this.setState({ loadingDialog: {
      open: true,
      error: true,
      message: "Uh Oh! It seems there was a problem loading your portfolio. Please logout and log back in and see if that helps."
    }});
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
  },

  openCreateTransactionDialog: function() {
    this.setState({
      newTransaction: {
        symbol: null
      },
      createTransactionDialogOpen: true
    })
  },

  createTransaction: function(transaction, doneCallback) {
    var that = this;
    this._apiService.createTransaction(transaction, function() {
      that.setState({
        createTransactionDialogOpen: false
      });
      that.refreshTransactions();

      var portfolio = that.state.portfolio;
      portfolio.addTransaction(transaction);
      that.setState({
        portfolio: portfolio
      });

      doneCallback();
    }, function() {
      console.log("There was a problem creating the transaction. We need error handling here.");
    });
  },

  transactionCancelled: function() {

    this.setState({
      createTransactionDialogOpen: false
    });
  },

  appClicked: function(event) {
    if (this.state.createTransactionDialogOpen) {
      this.setState({
        createTransactionDialogOpen: false
      });
      event.stopPropagation();
    }
  }
})

export default App
