import React, { PropTypes } from 'react';
import {
  Framework7App,
  Statusbar,
} from 'framework7-react';

import MainViews, { LeftPanel } from './MainViews.jsx';
import LoginPopup from './LoginPopup.jsx';

import routes from '../routes';

export default () => (
  // Change themeType to "material" to use the Material theme
  <Framework7App themeType="material" routes={routes}>
    <Statusbar />
    <LeftPanel />
    <MainViews />
    <LoginPopup opened={true}/>
  </Framework7App>
);
