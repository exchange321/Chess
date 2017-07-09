/**
 * Created by chuen on 09-Jul-17.
 */
import toastr from 'toastr';
import { LOGIN_ACTIONS } from './actionTypes';
import * as helpers from '../../helpers';
import { registerUser } from './authActions';

export const handleLoginFieldChange = (key, value) => ({
  type: LOGIN_ACTIONS.HANDLE_LOGIN_FIELD_CHANGE,
  key,
  value,
});

export const registerErrors = errors => ({
  type: LOGIN_ACTIONS.REGISTER_ERRORS,
  errors,
});

export const handleLoginFormSubmit = () => (dispatch, getState) => (
  new Promise((resolve, reject) => {
    const { email, password } = getState().loginPage;
    helpers.validateLoginFields(email, password).then(() => (
      helpers.authenticate(email, password)
    )).then((user) => {
      dispatch(registerUser(user));
      toastr.success(`Welcome back, ${user.playerName}`);
      resolve();
    }).catch((err) => {
      dispatch(registerErrors(err));
      toastr.error('Errors encountered when logging in...');
      reject();
    });
  })
);

export default () => {};
