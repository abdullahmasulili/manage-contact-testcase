import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./slicers/contactSlicer";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
