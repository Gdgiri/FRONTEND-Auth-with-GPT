// src/Redux/Reducers/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [], // Initial state is an empty array
  },
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload.map((ele) => ({
        id: ele._id,
        name: ele.name,
        email: ele.email,
        age: ele.age,
      }));
    },
    createUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (ele) => ele.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          age: action.payload.age,
        };
      }
    },
    deleteUser: (state, action) => {
      const id = action.payload.id;
      state.users = state.users.filter((ele) => ele.id !== id);
    },
  },
});

export const { getUser, createUser, updateUser, deleteUser } =
  userSlice.actions;
export default userSlice.reducer;
