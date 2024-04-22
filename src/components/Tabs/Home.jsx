import React from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
  return sessionStorage.getItem("user_token") ? (
    <div className="updates">
      <h2 className="headers">
        Current Updates
        <span style={{ color: "red" }}>*</span>
      </h2>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;
