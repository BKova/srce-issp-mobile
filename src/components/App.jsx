import React, { PropTypes } from 'react';
import {
  Framework7App,
  Statusbar,
} from 'framework7-react';

import Dashboard from './dashboard/dashboard.jsx';
import LeftPanel from './dashboard/leftPanel.jsx';
import LoginPopup from './login/loginPopup.jsx';

import routes from '../routes';

export default () => (
  // Change themeType to "material" to use the Material theme
  <Framework7App themeType="material" routes={routes}>
    <Statusbar />
    <LeftPanel />
    <Dashboard />
    <LoginPopup opened={true}/>
  </Framework7App>
);
