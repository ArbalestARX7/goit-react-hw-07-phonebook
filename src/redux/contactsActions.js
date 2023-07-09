import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from './userAPI';

const fetchContacts = createAsyncThunk('users/fetchContacts', async () => {
  const response = await userAPI.fetchById(userId);
  return response.data;
});
