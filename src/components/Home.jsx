import React from "react";
import { Navigate } from "react-router-dom";
import logo from "../Images/logo.png";
import "../css/Home.css";

import Authenticated from "./wrappers/AuthWrapper";
import { Button } from "antd";

const Home = () => {
  return sessionStorage.getItem("user_token") ? (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img src={logo} alt="" />
        <div style={{ marginTop: "4rem", fontSize: "70px" }}>
          UNIFIED CAMPUS
        </div>
        <Button
          style={{
            margin: "4rem 7rem",
            color: "white",
            backgroundColor: "red"
          }}
        >
          Logout
        </Button>
      </div>
      <div className="homePanel">
        <h2 className="headers">Home</h2>
        <h2 className="headers">Student info</h2>
        <h2 className="headers">Clubs</h2>
        <h2 className="headers">Events</h2>
        <h2 className="headers">Registration Form</h2>
        <h2 className="headers">Change Password</h2>
        <h2 className="headers">Contact</h2>
        <h2 className="headers">Feedback</h2>
      </div>
      <div className="updates">
        <h2 className="headers">
          Current Updates
          <span style={{ color: "red" }}>*</span>
        </h2>
      </div>
      <div className="details"></div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;
