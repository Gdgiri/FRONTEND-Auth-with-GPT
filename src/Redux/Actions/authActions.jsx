// src/Redux/Actions/authActions.jsx
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const API_URL_REGISTER = "http://localhost:5000/api/auth/register";
const API_URL_LOGIN = "http://localhost:5000/api/auth/login";
const API_URL_PROFILE = "http://localhost:5000/api/auth/profile";

// Register User
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL_REGISTER, formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

// Login User
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL_LOGIN, formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

// Initialize User
export const initializeUser = createAsyncThunk(
  "auth/initializeUser",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.get(API_URL_PROFILE, {
          headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
      } else {
        return rejectWithValue("No token found");
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to initialize user"
      );
    }
  }
);

// Logout User
export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { dispatch }) => {
    localStorage.removeItem("token");
    dispatch({ type: "auth/logout" });
    toast.info("You have been logged out.");
  }
);
