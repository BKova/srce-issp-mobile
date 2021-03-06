import React from 'react';
import style from './styles/spinner.style.jsx';

export default () => (<div style={style} dangerouslySetInnerHTML={{ __html: `<svg width="100%"  height="100%"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-rolling" style="background: none;">
    <circle cx="50" cy="50" fill="none" stroke="#337ab7" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(78.5644 50 50)">
      <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
    </circle></svg>` }} />
);
