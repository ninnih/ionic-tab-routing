export const Validator = require('validator');
export const isEmpty = require('is-empty');

export const validateLogInInput = (data) => {
  const errors: any = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is not valid'
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};