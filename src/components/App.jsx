import React, {PropTypes} from 'react';
import MainViews from './MainViews';
import LoginPopup from './LoginPopup.jsx';

import {
	Framework7App,
	Statusbar,
} from 'framework7-react';

import routes from '../routes';

export const App = () => (
	//Change themeType to "material" to use the Material theme
	<Framework7App themeType="material" routes={routes} material>
		<Statusbar />
		<MainViews />
		<LoginPopup opened={true}/>
	</Framework7App>
);
