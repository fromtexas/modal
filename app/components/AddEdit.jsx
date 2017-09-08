import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addNewUser, editUser, switchStatus, currentEditingUser} from 'actions'


class AddEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.edit.name,
      phone: this.props.edit.phone,
      email: this.props.edit.email
    }
  }


  componentDidMount() {
      setTimeout(()=>{
        this.refs.form.style.maxHeight = '100%';
        this.refs.form.style.opacity = '1';
        this.refs.form.style.paddingBottom = '60px';
        this.refs.form.style.marginBottom = '25px';
      }, 10)

  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      name: nextProps.edit.name,
      phone: nextProps.edit.phone,
      email: nextProps.edit.email
    })
  }

  handleStatusClose () {
    this.props.dispatch(switchStatus(''))
  }

  handleEdit (e) {
    this.setState({[e.target.dataset.ref]: e.target.value});
  }

  handleAction (e) {
    e.preventDefault();
    const id = Date.now();
    const name = this.refs.name.value;
    const phone = this.refs.phone.value;
    const email = this.refs.email.value;
    const visitedAt = '-----';
    const payment = '-----';
    const count = '-----';
    const active = '------';

    if(name && phone && email) {
      const user = {
        id,
        name,
        phone,
        email,
        visitedAt,
        payment,
        count,
        active
      }
      if(this.props.status === 'add'){
      this.props.dispatch(addNewUser(user));
      this.props.dispatch(currentEditingUser({}));
      this.props.dispatch(switchStatus(''));
      } else {
         this.props.dispatch(editUser({id: this.props.edit.id, name, phone, email}));
         this.props.dispatch(switchStatus(''));
      }
      this.refs.form.reset();
    }else {
      this.refs.name.focus()
    }


  }
  render () {

    return (
      <form ref='form' onSubmit={this.handleAction.bind(this)}>
        <div className='form-row'>
          <div className='form-group col-md-7'>
            <label className='col-form-label'>Имя</label>
            <input data-ref='name' onChange={this.handleEdit.bind(this)} value={this.state.name} ref='name' type='text' className='form-control' placeholder='Имя'/>
          </div>
          <div className='form-group col-md-5'>
            <label className='col-form-label'>Телефон</label>
            <input data-ref='phone' onChange={this.handleEdit.bind(this)} value={this.state.phone} ref='phone' type='text' className='form-control'  placeholder='Телефон'/>
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group col-md-7'>
            <label className='col-form-label'>E-mail</label>
            <input data-ref='email' onChange={this.handleEdit.bind(this)} value={this.state.email} ref='email' type='email' className='form-control' placeholder='E-mail' />
          </div>
          <div className='form-group col-md-5'>
            <button type='submit' className='btn btn-primary'>Сохранить</button>
          </div>
        </div>
        <i onClick={this.handleStatusClose.bind(this)} className='fa fa-angle-up' ></i>
        <i onClick={this.handleStatusClose.bind(this)} className='fa fa-angle-up'></i>
      </form>
    )
  }
}

export default connect(({status, edit}) => {
  return {
    status,
    edit
  }
})(AddEdit)
