/* global document */
import React from 'react';
import ReactDOM from 'react-dom';

import 'framework7/dist/css/framework7.material.min.css';
import 'framework7/dist/css/framework7.material.colors.min.css';


import './css/app.css';
import App from './components/App.jsx';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
