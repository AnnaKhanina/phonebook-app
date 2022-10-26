import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {}
});

const addContact = createAsyncThunk(
  'contacts/addContact',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      Notify.success('Контакт додано');

      return data;
    } catch (error) {
      Notify.failure('Щось пішло не так.. Спробуй ще.');
    }
  }
);

const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
  try {
    await axios.delete(`contacts/${id}`);
    Notify.success('Контакт видалено');

    return id;
  } catch (error) {
    Notify.failure('Щось пішло не так.. Спробуй ще.');
  }
});

const contactsOperation = { fetchContacts, addContact, deleteContact };

export default contactsOperation;
