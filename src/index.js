import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createAPI} from './services/api.js';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './store/reducers/root-reducer';
import App from './components/app/app';
import {getCurrentCity} from './store/api-actions';

const api = createAPI();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument(api)
    )
  )
);

store.dispatch(getCurrentCity());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(`root`)
);
