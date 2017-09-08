import React, {Component} from 'react'
import {connect} from 'react-redux'
import {currentEditingUser, deleteUser, switchStatus} from 'actions'


class User extends Component {
  handleEdit () {
    const user = {
      id: this.props.id,
      name: this.props.name,
      phone: this.props.phone,
      email: this.props.email
    }
    this.props.dispatch(currentEditingUser(user))
    this.props.dispatch(switchStatus('edit'))
  }
  handleDelete () {
    this.props.dispatch(deleteUser(this.props.id))
  }
  render () {
    const {id, name, phone, email, visitedAt, payment, count, active} = this.props;
    return (
      <tr>
        <td><i onClick={this.handleDelete.bind(this)} className="fa fa-times"></i><i onClick={this.handleEdit.bind(this)} className="fa fa-pencil"></i></td>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{visitedAt}</td>
        <td>{payment}</td>
        <td>{count}</td>
        <td>{active}</td>
      </tr>
    )
  }
}

export default connect()(User)
