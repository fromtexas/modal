import React, {Component} from 'react'
import {connect} from 'react-redux'
import {switchStatus, currentEditingUser} from 'actions'
import UsersList from 'UsersList'
import AddEdit from 'AddEdit'

class Main extends Component {
  handleStatusAdd () {
    this.props.dispatch(currentEditingUser({}))
    this.props.dispatch(switchStatus('add'))
  }

  render () {
    const renderForm = () => {
      if(this.props.status){
        return <AddEdit/>
      }
    };
    return (
      <div className='main'>
        <h1>Клиенты</h1>
        <p className='add-client' onClick={this.handleStatusAdd.bind(this)}><i className='fa fa-plus-circle'></i> Добавить клиента</p>
        <i className='fa fa-times close'></i>
        {renderForm()}
        <UsersList/>
      </div>
    )
  }
}

export default connect(({status}) => {
  return {
    status
  }
})(Main)
