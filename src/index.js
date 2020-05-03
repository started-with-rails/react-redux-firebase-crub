import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// redux integrate
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension'
import rootReducers from './reducers';

// create store
const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));

// provide store to react
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
