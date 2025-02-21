import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import APIManager from "../../api/APIManager";

export const getContacts = createAsyncThunk(
  "contact/fetchContacts",
  async () => {
    const response = await APIManager("/contact", {
      method: "GET",
    });

    return response.data;
  }
);

export const getContactById = createAsyncThunk(
  "contact/fetchContactById",
  async (contactId) => {
    const response = await APIManager(`/contact/${contactId}`, {
      method: "GET",
    });

    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (contactId) => {
    await APIManager(`/contact/${contactId}`, {
      method: "DELETE",
    });

    return contactId;
  }
);

export const newContact = createAsyncThunk(
  "contact/newContact",
  async (payload) => {
    const response = await APIManager("/contact", {
      method: "POST",
      data: payload,
    });

    return payload;
  }
);

export const updateContact = createAsyncThunk(
  "contact/updateContact",
  async (payload) => {
    const response = await APIManager(`/contact/${payload.id}`, {
      method: "PUT",
      data: payload,
    });

    return payload;
  }
);

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    contactDetails: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload.data;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getContactById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getContactById.fulfilled, (state, action) => {
        state.loading = false;
        state.contactDetails = action.payload.data;
      })
      .addCase(getContactById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(newContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          (item) => item.id === action.payload.id
        );

        if (index !== -1) {
          state.contacts[index] = action.payload;
        }
      });
  },
});

export default contactSlice.reducer;
