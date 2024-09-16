import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authSlice";
import userReducer from "./Reducers/userSlice"; // Ensure correct path

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer, // Ensure this matches your slice name
  },
});

export default store;
