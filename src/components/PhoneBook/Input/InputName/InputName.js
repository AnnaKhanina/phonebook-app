import React from 'react';
import Input from '../Input.styled';
import PropTypes from 'prop-types';

const InputName = ({ onChange, value }) => (
  <Input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Назва може містити лише літери, апостроф, тире та пробіли"
    required
    placeholder="Enter name"
    onChange={onChange}
    value={value}
  />
);

export default InputName;

InputName.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};