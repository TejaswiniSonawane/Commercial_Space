/**
 * @format
 */
import React 				from 'react';
import {AppRegistry} 		from 'react-native';
import App 					from './App';
import {name as appName}	from './app.json';
import { createStore, applyMiddleware } 		from 'redux';
import { Provider } 		from 'react-redux';
import thunk from 'redux-thunk';
import reducer 		from './src/redux/store/reducer';

const configureStore = () => {   
  return createStore( reducer, applyMiddleware(thunk)) ;
}
const store = configureStore();

const RNRedux = () => (
  <Provider store = { store }>
    <App />
  </Provider>
)
AppRegistry.registerComponent(appName, () =>  RNRedux);
