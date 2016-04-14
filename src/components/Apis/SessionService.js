import cookie from 'react-cookie'
import Auth0Lock from 'auth0-lock'
import Auth0 from 'auth0-js'

const clientID = 'XNwuDLFBYLgKT24xr8MhT004LNNkSKrB';
const auth0Namespace = 'beamtech.auth0.com';

class SessionService {
  constructor() {
    
  }

  getProfile() {
    reactCookie.load('profile');
  }

  login(successCallback, failureCallback) {
    var that = this;

    var lock = new Auth0Lock(clientID, auth0Namespace);
    var params = {
      authParams: {
          scope: 'openid email'
        }
    };

    lock.show(params, function onLogin(err, profile, id_token) {
      if (err) {
        // There was an error logging the user in
        failureCallback(err);
      } else {
        // also save in a cookie
        reactCookie.save('profile', profile, { expires: new Date(Date.now() + 86400000) });
        reactCookie.save('id_token', id_token, { expires: new Date(Date.now() + 86400000) });

        that.getDelegationToken(profile, id_token, successCallback);
      }

      // User is logged in
    });
  }

  // Gets the delegation token from AWS, so we can use IAM credentials
  getDelegationToken(profile, id_token, successCallback) {
    var auth0 = new Auth0({
      domain:       auth0Namespace,
      clientID:     clientID,
      callbackURL:  'dummy'
    });

    var options = {
      "id_token": id_token,
      "role": "arn:aws:iam::462736229559:role/access-to-api-gateway-per-user",
      "principal": "arn:aws:iam::462736229559:saml-provider/auth0"
    };

    var that = this;

    auth0.getDelegationToken(options, function(err, delegationResult) {
      reactCookie.save('awsCredentials', delegationResult.Credentials, { expires: new Date(Date.now() + 86400000) })

      successCallback(profile, delegationResult.Credentials);
    });
  }

  logout() {
    // Remove cookies
    reactCookie.remove('profile');
    reactCookie.remove('awsCredentials');
    reactCookie.remove('id_token');
  }
}

export default SessionService
