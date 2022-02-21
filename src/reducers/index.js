import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';

import thunk from 'redux-thunk';
import autocompleteList from './autocompleteList';

const rootReducer = combineReducers({ autocompleteList });
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
