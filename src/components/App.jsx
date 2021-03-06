/* global window */
import React, { Component, PropTypes } from 'react';
import {
  Framework7App,
  Statusbar,
} from 'framework7-react';
import SrceClient from 'srce-issp-client';

import Dashboard from './dashboard/dashboard.jsx';
import LeftPanel from './dashboard/leftPanel.jsx';
import LoginPopup from './login/loginPopup.jsx';

import routes from '../routes';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.setLogedInState = this.setLogedInState.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      loggedIn: false,
      user: {},
      receipts: [],
    };
  }

  setLogedInState(user, receipts) {
    window.receipts = receipts;
    this.setState({
      loggedIn: true,
      user,
      receipts,
    });
  }

  logout() {
    this.setState({ loggedIn: false });
    const client = new SrceClient();
    SrceClient.logout();
  }

  render() {
    return (
      // Change themeType to "material" to use the Material theme
      <Framework7App themeType="material" routes={routes}>
        <Statusbar />
        <LeftPanel user={this.state.user} logout={this.logout}/>
        <Dashboard receipts={this.state.receipts} user={this.state.user}/>
        <LoginPopup opened={!this.state.loggedIn} setLogedInState={this.setLogedInState}/>
      </Framework7App>
    );
  }
}
