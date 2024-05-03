import { legacy_createStore as createStore,applyMiddleware } from "redux";
// Store.js

import thunk from 'redux-thunk';
import MainReducer from './reducer/MainReducer'; // assuming you have reducers

const Store = createStore(MainReducer, applyMiddleware(thunk));

export default Store;
