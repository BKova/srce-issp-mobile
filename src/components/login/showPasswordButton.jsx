import React, { PropTypes } from 'react';
import Eye from 'mdi-react/EyeIcon';
import EyeOff from 'mdi-react/EyeOffIcon';
import style from './styles/showPasswordButton.style.jsx';

const Icon = ({ hidePassword }) =>
  (hidePassword ?
    <EyeOff fill="rgba(0, 0, 0, 0.35)" /> :
    <Eye fill="rgba(0, 0, 0, 0.35)"/>
  );

export default ({ hidePassword, onClick }) => (
  <div className="ripple"
    onClick={onClick}
    style={ style.showPasswordButton }>
    <Icon hidePassword={hidePassword} />
  </div>
);
