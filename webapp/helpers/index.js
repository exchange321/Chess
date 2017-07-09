/**
 * Created by chuen on 09-Jul-17.
 */
import delay from './delay';

export const validateEmail = (value) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(value);
};

export const validateLoginFields = (email, password) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let hasError = false;
      const errors = {};
      // Email Validation
      if (!validateEmail(email)) {
        hasError = true;
        errors.email = 'Your email address is in invalid format.';
      }
      // Password Validation
      if (password.length < 4) {
        hasError = true;
        errors.password = 'Your password must contain more than 4 characters.';
      }
      if (hasError) {
        reject(errors);
      } else {
        resolve();
      }
    }, delay);
  })
);

export const authenticate = (email, password) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let hasError = false;
      // Email Validation
      if (email !== 'admin@admin.com') {
        hasError = true;
      }
      if (password !== '1234') {
        hasError = true;
      }
      if (hasError) {
        const errors = {
          email: 'Your email address and password do not match.',
          password: 'Your email address and password do not match.',
        };
        reject(errors);
      } else {
        resolve({
          userId: 'qkaskfojq',
          playerName: 'Jason',
          isAuthenticated: true,
        });
      }
    }, delay);
  })
);

export const parseSearchQuery = (query) => {
  const search = query.substring(1);
  return JSON.parse(`{"${decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`);
};

export default () => {};
