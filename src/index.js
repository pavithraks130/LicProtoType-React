import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index'
import LoginComponent from './containers/LoginComponent';

const createLocalStore = applyMiddleware()(createStore);

ReactDOM.render(
	<Provider store={createLocalStore(reducers)}>
		<LoginComponent />
	</Provider>
	,document.querySelector('#root'));