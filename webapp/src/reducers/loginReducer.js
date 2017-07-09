import initialState from './initialState';
import { LOGIN_ACTIONS } from '../actions/actionTypes';

const loginReducer = (state = initialState.loginPage, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.HANDLE_LOGIN_FIELD_CHANGE: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    case LOGIN_ACTIONS.REGISTER_ERRORS: {
      return {
        ...state,
        errors: action.errors,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
