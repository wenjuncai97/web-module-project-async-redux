import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducers'

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
