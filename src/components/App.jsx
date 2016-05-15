import React from 'react'
import Portfolio from './Models/Portfolio'
import Header from './Shared/Header'
import Tabs from './Shared/Tabs'
import Tab from './Shared/Tab'
import AddButton from './Shared/AddButton'
import LoadingDialog from './Shared/LoadingDialog'
import CreateTransaction from './CreateTransaction'
import CreateCashTransaction from './CreateCashTransaction'
import ApiService from './Apis/ApiService'
import { browserHistory } from 'react-router'

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
      dialogOpened: null,
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
      if (this.props.location.pathname === "/") {
        browserHistory.replace('portfolio');
      }

      if (this.state.loadingDialog.open) {
        appClassName += ' loading';
      } else if (this.state.dialogOpened) {
        appClassName += ' ' + this.state.dialogOpened;
      }

      var tabbedContent = React.cloneElement(this.props.children, {portfolio: this.state.portfolio, deleteTransaction: this.deleteAnyTransaction, openCreateCashTransaction: this.openCreateCashTransactionDialog, tradeStock: this.trade});

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
      <CreateCashTransaction needTransactionCreation={this.createCashTransaction} cancel={this.transactionCancelled} />
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
      dialogOpened: 'creating-transaction'
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

  loadCashTransactionsFromServer: function() {
    this.setState({
      loadingDialog: {
        open: true,
        message: "Checking out cash positions…"
      }
    });

    var token = reactCookie.load('id_token');
    this._apiService = new ApiService(token);

    this._apiService.getCashTransactions(this.cashTransactionsLoaded, this.cashTransactionsFailedToLoad);
  },

  deleteAnyTransaction: function(transaction) {
    if (transaction.transaction_type === 'buy' || transaction.transaction_type === 'sell') {
      this.deleteStockTransaction(transaction);
    } else {
      this.deleteCashTransaction(transaction);
    }
  },

  deleteStockTransaction: function(transaction) {
    this.state.portfolio.removeTransaction(transaction);

    this.setState({
      portfolio: this.state.portfolio
    });

    this._apiService.deleteTransaction(transaction, 
      function() {

      },
      function() {

      });
  },

  deleteCashTransaction: function(cashTransaction) {
    this.state.portfolio.removeCashTransaction(cashTransaction);

    this.setState({
      portfolio: this.state.portfolio
    });

    this._apiService.deleteCashTransaction(cashTransaction, 
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

  cashTransactionsLoaded: function(cash_transactions) {
    var portfolio = this.state.portfolio;
    portfolio.setCashTransactions(cash_transactions);

    this.setState({
      loadingDialog: {
        open: false,
        message: ""
      },
      portfolio: portfolio
    });
  },

  cashTransactionsFailedToLoad: function(response) {
    this.setState({ loadingDialog: {
      open: true,
      error: true,
      message: "Uh Oh! It seems there was a problem loading your portfolio. Please logout and log back in and see if that helps."
    }});
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

    portfolio.updateHoldingsFromAPI(this.holdingsUpdated);
  },

  holdingsUpdated: function(portfolio) {
    this.setState({portfolio: portfolio});
    this.loadCashTransactionsFromServer();
  },

  openCreateTransactionDialog: function() {
    this.setState({
      newTransaction: {
        symbol: null
      },
      dialogOpened: 'creating-transaction'
    })
  },

  openCreateCashTransactionDialog: function() {
    this.setState({
      newTransaction: {
        symbol: null
      },
      dialogOpened: 'creating-cash-transaction'
    })
  },

  createCashTransaction: function(transaction, doneCallback) {
    var that = this;
    this._apiService.createCashTransaction(transaction, function() {
      that.setState({
        dialogOpened: null
      });
      that.loadCashTransactionsFromServer();

      var portfolio = that.state.portfolio;
      portfolio.addCashTransaction(transaction);
      that.setState({
        portfolio: portfolio
      });

      doneCallback();
    }, function() {
      console.log("There was a problem updating cash. We need error handling here.");
    });
  },

  createTransaction: function(transaction, doneCallback) {
    var that = this;
    this._apiService.createTransaction(transaction, function() {
      that.setState({
        dialogOpened: null
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
      dialogOpened: null
    });
  },

  appClicked: function(event) {
    if (this.state.dialogOpened) {
      this.setState({
        dialogOpened: null
      });
      event.stopPropagation();
    }
  }
})

export default App
