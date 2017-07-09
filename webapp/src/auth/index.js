/**
 * Created by chuen on 09-Jul-17.
 */
import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';
import { routerActions } from 'react-router-redux';

export const PageForUserOnly = connectedReduxRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => state.auth && state.auth.isAuthenticated,
  wrapperDisplayName: 'PageForUserOnly',
  redirectAction: routerActions.replace,
});

export const PageForGuestOnly = connectedReduxRedirect({
  redirectPath: '/',
  authenticatedSelector: state => !state.auth || !state.auth.isAuthenticated,
  wrapperDisplayName: 'PageForGuestOnly',
  redirectAction: routerActions.replace,
  allowRedirectBack: false,
});

export default () => {};
