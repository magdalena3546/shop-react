import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';
import { StrictMode } from 'react/cjs/react.production.min';

ReactDOM.render( 
 <StrictMode>
  <App /> 
 </StrictMode>,
  document.getElementById('root')
);