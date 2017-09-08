export const addNewUser = (user) => {
  return {
    type: 'ADD_NEW_USER',
    user
  }
}

export const editUser = (user) => {
  return {
    type: 'EDIT_USER',
    user
  }
}

export const deleteUser = (id) => {
  return {
    type: 'DELETE_USER',
    id
  }
}

export const switchStatus = (status) => {
  return {
    type: 'SWITCH_STATUS',
    status
  }
}

export const currentEditingUser = (user) => {
  return {
    type: 'CURRENT_EDITING_USER',
    user
  }
}
