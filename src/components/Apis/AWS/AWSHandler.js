import cookie from 'react-cookie'

class AWSHandler {
  constructor(credentials) {
    this.credentials = credentials;
  }

  getSecureApiClient() {
    this.apiClient = apigClientFactory.newClient({
        accessKey: this.credentials.AccessKeyId,
        secretKey: this.credentials.SecretAccessKey,
        sessionToken: this.credentials.SessionToken,
        region: 'us-east-1'
    });

    return this.apiClient;
  }

  getTransactions(getTransactionsSucceeded, getTransactionsFailed) {
    var apiClient = this.getSecureApiClient();
    var token = reactCookie.load('id_token');
    var headers = {
      authToken: token
    }

    apiClient.transactionsGet(headers,{})
      .then(function(response) {
        getTransactionsSucceeded(response.data.transactions);
      }).catch(function(response) {
        console.log("Error getting transactions: " + response);
        getTransactionsFailed(response);
      });
  }

  createTransaction(transaction, createSucceeded, createFailed) {
    var apiClient = this.getSecureApiClient();
    var token = reactCookie.load('id_token');
    var headers = {
      authToken: token
    }

    apiClient.transactionsPost(headers, transaction)
      .then(function(response) {
        createSucceeded(response.data);
      }).catch(function(response) {
        console.log("Error posting transaction.");
        console.log(response);
        createFailed(response);
      });
  }
}

export default AWSHandler
