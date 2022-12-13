import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, filterReducer } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
