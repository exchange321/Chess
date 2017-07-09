/**
 * Created by chuen on 09-Jul-17.
 */
import { AUTH_ACTIONS } from './actionTypes';

export const registerUser = user => ({
  type: AUTH_ACTIONS.REGISTER_USER,
  user,
});

export default () => {};
