/**
 * Created by chuen on 09-Jul-17.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const MaterialTextField = ({ type, name, label, value, onChange, errors }) => (
  <TextField
    type={type}
    name={name}
    fullWidth
    floatingLabelText={label}
    value={value}
    onChange={onChange}
    errorText={errors[name] ? errors[name] : ''}
  />
);

MaterialTextField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MaterialTextField;
