import { configureStore } from '@reduxjs/toolkit';
// import { contactsApi, contactsReducer } from './contactsSlice';
import { contactsApi } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    ///delete contacts reducer
    // contacts: contactsReducer,
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), contactsApi.middleware],
});
