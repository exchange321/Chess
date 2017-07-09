/**
 * Created by chuen on 09-Jul-17.
 */
import { AUTH_ACTIONS } from '../actions/actionTypes';
import initialState from './initialState';

const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.REGISTER_USER: {
      return {
        ...state,
        ...action.user,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
