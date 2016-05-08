import React from 'react'

import SessionService from '../Apis/SessionService'

var LoginButton = React.createClass({
  getInitialState: function () {
    this.sessionService = new SessionService();
    var profile = this.sessionService.getProfile();

    return {
      profile: profile || null,
      panelOpen: false
    }
  },

  componentWillMount: function() {
    
  },

  componentWillUnmount: function() {
    
  },

  openLoginDialog: function(event) {
    event.preventDefault();

    this.props.loginStarted();
    this.sessionService.login(this.loginCompleted, function(err) {
      alert(err.message);
    });
  },

  loginCompleted: function(profile) {
    this.setState({ profile: profile });

    if (this.props.loginCompleted !== undefined) {
      this.props.loginCompleted();
    }
  },

  render: function () {
    var loginPanelClasses = 'login-panel';
    if (this.state.panelOpen) {
      loginPanelClasses += ' open';
    }

    if (this.state.profile !== null) {
      return <div onClick={this.buttonToggled} className="user-button">
                <span className="user-email">{this.state.profile.email}</span>
                <img className="user-avatar" src={this.state.profile.picture} />
                <div className={loginPanelClasses}>
                  <ul className="user-settings-menu">
                    <li onClick={this.logout}>Logout</li>
                  </ul>
                </div>
              </div>
    } else {
      return <button className="login-button" onClick={this.openLoginDialog}>Login</button>
    }
  },

  buttonToggled: function() {
    this.setState({ panelOpen: !this.state.panelOpen });
  },

  logout: function(event) {
    event.preventDefault();

    this.sessionService.logout();

    // Update UI
    this.setState({
      profile: null,
      awsCredentials: null
    });

    // Update other components
    this.props.logoutCompleted();
  }
})

export default LoginButton
