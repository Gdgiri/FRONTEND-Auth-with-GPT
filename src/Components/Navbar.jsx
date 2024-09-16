import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Redux/Actions/authActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user); // Access user data from Redux store
  const users = useSelector((state) => state.users.users); // Access user list from Redux store
  const userCount = users.length; // Get the number of users

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* User's name */}
        <h5 className="me-3">Welcome, {user ? user.name : "User"}!</h5>

        {/* Centered Circle and Label */}
        <div className="circle-container mx-auto d-flex flex-column align-items-center">
          <strong>
            <h5 className="mb-2">User Details</h5>
          </strong>
         
        </div>

        {/* Logout Button */}
        <button className="btn btn-danger ms-3" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
