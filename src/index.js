import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/';
import App from './components/App';
import { createLogger } from 'redux-logger';
import './style.css';

let store;
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  store = createStore(rootReducer, applyMiddleware(logger));
} else if (process.env.NODE_ENV === 'production') {
  store = createStore(rootReducer);
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);