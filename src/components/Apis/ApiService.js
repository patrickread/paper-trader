class ApiService {
  constructor(idToken) {
    this.idToken = idToken;
  }

  getTransactions(getTransactionsSucceeded, getTransactionsFailed) {
    var headers = this.getDefaultHeaders();

    var params = { method: 'GET',
                   headers: headers };

    fetch('http://localhost:3000/transactions', params)
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

    fetch('http://localhost:3000/transactions', params)
    .then(function(response) {
      response.json().then(function(json) {
        createSucceeded(json);
      });
    }).catch(function(err) {
      createFailed(err);
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
