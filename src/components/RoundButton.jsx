import React, { PropTypes } from 'react';
import Eye from 'mdi-react/EyeIcon';
import EyeOff from 'mdi-react/EyeOffIcon';

const Icon = ({ hidePassword }) => (hidePassword ? <EyeOff fill="rgba(0, 0, 0, 0.35)" /> : <Eye fill="rgba(0, 0, 0, 0.35)"/>);

export default ({ hidePassword, onClick }) => (
  <div className="ripple"
    onClick={onClick}
    style={{
      position: 'absolute',
      zIndex: '15',
      height: '24px',
      width: '24px',
      backgroundColor: 'translate',
      borderRadius: '12px',
      bottom: '16%',
      right: '4%',
      alignContent: 'center',
      justifyContent: 'center',
    }}>
    <Icon hidePassword={hidePassword} />
  </div>
);
