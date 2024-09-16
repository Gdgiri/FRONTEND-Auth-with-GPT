// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authSlice"; // Adjust path if necessary

const store = configureStore({
  reducer: {
    auth: authReducer, // Name this key according to your slice
    // You can add more reducers here if needed
  },
  // Optional: add additional middleware or enhancers here
});

export default store;
