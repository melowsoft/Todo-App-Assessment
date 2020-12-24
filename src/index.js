import React from 'react';

//redux imports
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from "./store/reducers"

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

