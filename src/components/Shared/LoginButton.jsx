import React from 'react'
import Auth0Lock from 'auth0-lock'

var LoginButton = React.createClass({
  componentWillMount: function() {
    
  },

  componentWillUnmount: function() {
    
  },

  openLoginDialog: function(event) {
    event.preventDefault();
    var lock = new Auth0Lock('XNwuDLFBYLgKT24xr8MhT004LNNkSKrB', 'beamtech.auth0.com');
    lock.show(function onLogin(err, profile, id_token) {
      if (err) {
        // There was an error logging the user in
        return alert(err.message);
      } else {
        console.log("Logged in!");
      }

      // User is logged in
    });
  },

  render: function () {
    return <button className="login-button" onClick={this.openLoginDialog}>Login</button>
  }
})

export default LoginButton
