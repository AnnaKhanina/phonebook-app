import React from 'react';
import ButtonDeleteStyle from './ButtonDelete.styled';
import PropTypes from 'prop-types';
import contactsOperation from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { IoTrashBinOutline } from 'react-icons/io5';

const ButtonDelete = ({ id }) => {
  const dispatch = useDispatch();
  const isLoad = useSelector(state => state.contacts.isLoad);

  return (
    <ButtonDeleteStyle
      type="button"
      disabled={isLoad}
      onClick={() => dispatch(contactsOperation.deleteContact(id))}
    >
      <IoTrashBinOutline />
    </ButtonDeleteStyle>
  );
};

export default ButtonDelete;

ButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
};