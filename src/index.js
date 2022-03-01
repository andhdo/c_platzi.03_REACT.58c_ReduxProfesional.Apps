import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';

import { compose, applyMiddleware } from 'redux';
import { logActions, reportError } from './middlewares';

import thunk from 'redux-thunk';



const composeAlternative1= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // composedEnhancers;

const composedEnhancers = composeAlternative1( //compose(
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  //applyMiddleware(logActions)
  applyMiddleware(thunk, logActions, reportError)
);


const store = createStore(
  rootReducer,
  composedEnhancers
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>

  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
