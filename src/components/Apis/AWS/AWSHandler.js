//import * as apigClientFactory from '../AWS/JSSDK/apigClientFactory'

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

  getTransactions(getTransactionsSucceeded) {
    var apiClient = this.getSecureApiClient();
    apiClient.transactionsGet({},{})
      .then(function(response) {
        getTransactionsSucceeded(response.data.transactions);
      }).catch(function(response) {
        console.log("Error getting transactions: " + response);
      });
  }
}

export default AWSHandler
