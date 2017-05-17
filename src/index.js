import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'
import App from './App';

const logger = createLogger();

const store = createStore(
	reducer,
	applyMiddleware(thunk,promise,logger)
);

render(
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);
