import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './routes/Root';
import configureStore from './store/configureStore';

import BootstrapSass from './styles/bootstrap.scss';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

window.store = store;

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
