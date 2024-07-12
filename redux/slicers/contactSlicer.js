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

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
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
      });
  },
});

export default contactSlice.reducer;
