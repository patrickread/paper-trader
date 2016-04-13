import React from 'react'
import Auth0Lock from 'auth0-lock'
import Auth0 from 'auth0-js'
import cookie from 'react-cookie'

var LoginButton = React.createClass({
  getInitialState: function () {
    var profile = reactCookie.load('profile');
    return {
      profile: profile || null
    }
  },

  componentWillMount: function() {
    
  },

  componentWillUnmount: function() {
    
  },

  openLoginDialog: function(event) {
    var that = this;
    event.preventDefault();
    var lock = new Auth0Lock('XNwuDLFBYLgKT24xr8MhT004LNNkSKrB', 'beamtech.auth0.com');
    lock.show(function onLogin(err, profile, id_token) {
      if (err) {
        // There was an error logging the user in
        return alert(err.message);
      } else {
        that.setState({ profile: profile });

        // also save in a cookie
        reactCookie.save('profile', profile, { expires: new Date(Date.now() + 86400000) })

        that.getDelegationToken(id_token);
      }

      // User is logged in
    });
  },

  getDelegationToken: function(id_token) {
    var auth0 = new Auth0({
      domain:       'beamtech.auth0.com',
      clientID:     'XNwuDLFBYLgKT24xr8MhT004LNNkSKrB',
      callbackURL:  'dummy'
    });

    var options = {
      "id_token": id_token,
      "role":"arn:aws:iam::462736229559:role/access-to-api-gateway-per-user",
      "principal": "arn:aws:iam::462736229559:saml-provider/auth0"
    };

    var that = this;

    auth0.getDelegationToken(options, function(err, delegationResult) {
      that.setState({ awsCredentials: delegationResult.Credentials });

      if (that.props.loginCompleted !== undefined) {
        that.props.loginCompleted(delegationResult.Credentials);
      }
    });
  },

  render: function () {
    if (this.state.profile !== null) {
      return <div className="user-button"><span className="user-email">{this.state.profile.email}</span><img className="user-avatar" src={this.state.profile.picture} /></div>
    } else {
      return <button className="login-button" onClick={this.openLoginDialog}>Login</button>
    }
  }
})

export default LoginButton
