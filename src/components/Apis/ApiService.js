class ApiService {
  constructor(idToken) {
    this.idToken = idToken;
    //this.apiRoot = 'http://localhost:3000/';
    this.apiRoot = 'http://paper-api.uproarlabs.com/';
  }

  getTransactions(getTransactionsSucceeded, getTransactionsFailed) {
    var headers = this.getDefaultHeaders();

    var params = { method: 'GET',
                   headers: headers };

    fetch(this.apiRoot + 'transactions', params)
    .then(function(response) {
        response.json().then(function(json) {
          getTransactionsSucceeded(json);
        });
    }).catch(function(err) {
      getTransactionsFailed(err);
    });
  }

  getCashTransactions(getCashTransactionsSucceeded, getCashTransactionsFailed) {
    var headers = this.getDefaultHeaders();

    var params = { method: 'GET',
                   headers: headers };

    fetch(this.apiRoot + 'cash_transactions', params)
    .then(function(response) {
        response.json().then(function(json) {
          getCashTransactionsSucceeded(json);
        });
    }).catch(function(err) {
      getCashTransactionsFailed(err);
    });
  }

  createTransaction(transaction, createSucceeded, createFailed) {
    var headers = this.getDefaultHeaders();

    var params = { method: 'POST',
                   headers: headers,
                   body: JSON.stringify({ transaction: transaction }) };

    fetch(this.apiRoot + 'transactions', params)
    .then(function(response) {
      response.json().then(function(json) {
        createSucceeded(json);
      });
    }).catch(function(err) {
      createFailed(err);
    });
  }

  createCashTransaction(transaction, createSucceeded, createFailed) {
    var headers = this.getDefaultHeaders();

    var params = { method: 'POST',
                   headers: headers,
                   body: JSON.stringify({ cash_transaction: transaction }) };

    fetch(this.apiRoot + 'cash_transactions', params)
    .then(function(response) {
      response.json().then(function(json) {
        createSucceeded(json);
      });
    }).catch(function(err) {
      createFailed(err);
    });
  }

  deleteTransaction(transaction, deleteSucceeded, deleteFailed) {
    var headers = this.getDefaultHeaders();

    var params = { method: 'DELETE',
                   headers: headers };

    fetch(this.apiRoot + 'transactions/' + transaction.id, params)
    .then(function(response) {
      deleteSucceeded();
    }).catch(function(err) {
      deleteFailed(err);
    });
  }

  deleteCashTransaction(transaction, deleteSucceeded, deleteFailed) {
    var headers = this.getDefaultHeaders();

    var params = { method: 'DELETE',
                   headers: headers };

    fetch(this.apiRoot + 'cash_transactions/' + transaction.id, params)
    .then(function(response) {
      deleteSucceeded();
    }).catch(function(err) {
      deleteFailed(err);
    });
  }

  // returns a promise
  getQuote(symbol) {
    var that = this;
    var headers = this.getDefaultHeaders();

    return new Promise(function(resolve, reject) {
      var quoteUrl = that.apiRoot + "quotes/" + symbol;
      var params = {
        method: 'GET',
        headers: headers
      }

      fetch(quoteUrl, params)
      .then(function(response) {
        response.json().then(function(json) {
          resolve(json);
        });
      }).catch(function(err) {
        reject(Error(err));
      });
    });
  }

  getDefaultHeaders() {
    return {
      authorization: 'Bearer ' + this.idToken,
      accept: 'application/json',
      "Content-Type": 'application/json'
    };
  }
}

export default ApiService
