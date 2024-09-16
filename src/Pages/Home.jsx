import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-4">
      <h1>Welcome to the Home Page</h1>
      <p>
        This is the home page of your application. You can add more content and
        styling as needed.
      </p>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Home;
