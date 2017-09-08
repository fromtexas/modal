import * as redux from 'redux'
import thunk from 'redux-thunk'
import {usersReduser, addOrEditReducer, userEditReducer} from 'reducers';

export var configure = (initialState = {}) => {

  var reducer = redux.combineReducers({
    users: usersReduser,
    status: addOrEditReducer,
    edit: userEditReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;

};
