import React, {Component} from 'react'
import {connect} from 'react-redux'
import User from 'User'

class UsersList extends Component {
  render () {
    const {users} = this.props;
    const renderUsers = users.map((user) => <User key={user.id} {...user}/>)
    return (
      <table className='table'>
        <thead>
          <tr>
            <th width='100'></th>
            <th width='170'>Клиент</th>
            <th width='170'>Телефон</th>
            <th width='170'>E-mail</th>
            <th>Дата последнего посещения</th>
            <th>Сумма оплат</th>
            <th>Количество посещений</th>
            <th>Активный абонемент</th>
          </tr>
        </thead>
        <tbody>
          {renderUsers}
        </tbody>
      </table>
    )
  }
}

export default connect(({users}) => {
  return {
    users
  }
})(UsersList)
