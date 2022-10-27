import React from 'react';
import Input from '../Input.styled';
import PropTypes from 'prop-types';

const InputPassword = ({ onChange, value }) => (
  <Input
    type="password"
    name="password"
    required
    placeholder="Enter password"
    onChange={onChange}
    value={value}
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
    title="Має містити принаймні одну цифру, одну велику та малу літеру та принаймні 6 або більше символів"
  />
);

export default InputPassword;

InputPassword.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};