import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {configure} from 'configureStore'
import css from './style.scss'
import {addNewUser, editUser} from 'actions'

import Main from 'Main'

const store = configure();

store.dispatch(addNewUser({id:1, name: 'Pavel Zadov', email: 'zad@mail.ru', phone: '999-23-44', visitedAt: '------', payment: '-----', count: '-----', active: '-----'}));
store.dispatch(addNewUser({id:2, name: 'Some name', email: 'name@gmail.com', phone: '999-23-45', visitedAt: '------', payment: '-----', count: '-----', active: '-----'}));



ReactDOM.render(
  <Provider store={store}>
  <Main/>
  </Provider>
  ,document.getElementById('app'));
