import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createAPI} from './services/api.js';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './store/reducers/root-reducer.js';
import App from './components/app/app.jsx';
import {getHotels} from './store/api-actions.js';

const api = createAPI();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk.withExtraArgument(api)
    )
  )
);

store.dispatch(getHotels());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById(`root`)
);
