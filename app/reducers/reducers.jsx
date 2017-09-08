export const usersReduser = (state=[], action) => {
  switch (action.type) {

    case 'ADD_NEW_USER':
    return [...state, action.user];

    case 'DELETE_USER':
    let newArrAfterRemovingUser = state.filter((item) => {
          if(item.id !== action.id){
               return item;
             }
        });
    return newArrAfterRemovingUser;

    case 'EDIT_USER':
        let newArrAfterEditUser = state.map((item) => {
          if(item.id !== action.user.id){
            return item;
          }else{
            return {
              ...item,
              name: action.user.name,
              email: action.user.email,
              phone: action.user.phone
            };
          }
        });
        return newArrAfterEditUser;
    default:
      return  state;

  }
}

export const addOrEditReducer = (state='', action) => {
  switch (action.type) {
    case 'SWITCH_STATUS':
    return action.status
    default:
      return  state;
  }
};

export const userEditReducer = (state={}, action) => {
  switch (action.type) {
    case 'CURRENT_EDITING_USER':
    return action.user
    default:
      return  state;
  }
}
