//import * as apigClientFactory from '../AWS/JSSDK/apigClientFactory'
import ApiClient from './JSSDK/APIClient'

class AWSHandler {
  constructor(credentials) {
    this.credentials = credentials;
  }

  getSecureApiClient() {
    this.apiClient = new ApiClient({
        accessKey: this.credentials.AccessKeyId,
        secretKey: this.credentials.SecretAccessKey,
        sessionToken: this.credentials.SessionToken,
        region: 'us-east-1'
    });

    return this.apiClient;
  }

  getTransactions(getTransactionsSucceeded) {
    var apiClient = this.getSecureApiClient();
    apiClient.transactionsGet(getTransactionsSucceeded);
  }
}

export default AWSHandler
