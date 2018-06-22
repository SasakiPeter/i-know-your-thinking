import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/';
import App from './components/App';
import { createLogger } from 'redux-logger';
import './style.css';

const logger = createLogger(),
  store = createStore(rootReducer, applyMiddleware(logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);