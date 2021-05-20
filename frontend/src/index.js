import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/rootReducer'

const loggerMeddleware = store => next => action =>{
  const result = next(action)
  console.log('Middleware', store.getState())
  return result
}

const store = createStore(rootReducer, applyMiddleware(loggerMeddleware, thunk))

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root')
);

serviceWorker.unregister();
