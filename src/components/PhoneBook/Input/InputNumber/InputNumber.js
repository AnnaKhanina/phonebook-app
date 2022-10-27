import React from 'react';
import Input from '../Input.styled';
import PropTypes from 'prop-types';

const InputNumber = ({ onChange, value }) => (
  <Input
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Номер телефону має складатися з цифр і може містити пробіли, тире, круглі дужки та починатися з +"
    required
    placeholder="123-45-67"
    onChange={onChange}
    value={value}
  />
);

export default InputNumber;

InputNumber.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};