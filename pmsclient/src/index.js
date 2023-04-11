import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';

import { hydrateRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = hydrateRoot(domNode, reactNode);

hydrateRoot(
  document.getElementById('root'),
  <App />
);

module.exports=App;
/*
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
*/
