class ApiService {
  constructor(idToken) {
    this.idToken = idToken;
    this.apiRoot = 'http://localhost:3000/';
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

  getDefaultHeaders() {
    return {
      authorization: 'Bearer ' + this.idToken,
      accept: 'application/json',
      "Content-Type": 'application/json'
    };
  }
}

export default ApiService
