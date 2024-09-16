import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Redux/Actions/authActions"; // Import your logout action

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user); // Access user data from Redux store

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>Welcome, {user ? user.name : "User"}!</p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
