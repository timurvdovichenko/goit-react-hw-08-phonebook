// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://connections-api.herokuapp.com',
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth.token;

//       console.log('tokenContactSlice :>> ', token);

//       // If we have a token set in state, let's assume that we should be passing it.
//       if (token) {
//         headers.set('authorization', `Bearer ${token}`);
//       }

//       return headers;
//     },
//   }),

//   endpoints: builder => ({
//     getAllContacts: builder.query({
//       query: () => `/contacts`,
//       providesTags: ['Contact'],
//     }),
//     deleteContact: builder.mutation({
//       query: id => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//     addContact: builder.mutation({
//       query: contact => ({
//         url: `/contacts`,
//         method: 'POST',
//         body: contact,
//       }),
//       invalidatesTags: ['Contact'],
//     }),
//   }),
// });

// export const { useGetAllContactsQuery, useDeleteContactMutation, useAddContactMutation } =
//   contactsApi;
import { deleteContact, fetchContacts, addContact } from './contactsoperations.jsx';

const { createSlice } = require('@reduxjs/toolkit');

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(item => item.id === action.payload.id);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

export const getContacts = state => state.contacts.items;
