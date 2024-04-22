import React from "react";
import { Navigate, Link } from "react-router-dom";

import logo from "../Images/logo.png";
import "../css/Home.css";
import Tabs from "./Tabs";

import { Button } from "antd";

const logout = () => {
  sessionStorage.removeItem("user_token");
  window.location.reload();
};

const Container = () => {
  return sessionStorage.getItem("user_token") ? (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%"
        }}
      >
        <img src={logo} alt="" />
        <div style={{ fontSize: "70px" }}>UNIFIED CAMPUS</div>
        <Button
          style={{
            color: "white",
            backgroundColor: "red"
          }}
          onClick={logout}
        >
          Logout
        </Button>
      </div>
      <div className="homePanel">
        <Link to={"/Home"} style={{ textDecoration: "none", color: "white" }}>
          <h2 className="headers">Home</h2>
        </Link>
        <Link
          to={"/Students_Info"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <h2 className="headers">Student Info</h2>
        </Link>
        <Link to={"/Clubs"} style={{ textDecoration: "none", color: "white" }}>
          <h2 className="headers">Clubs</h2>
        </Link>
        <Link to={"/Events"} style={{ textDecoration: "none", color: "white" }}>
          <h2 className="headers">Events</h2>
        </Link>
        <Link
          to={"/Change_Password"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <h2 className="headers">Change Password</h2>
        </Link>
        <Link
          to={"/Contact"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <h2 className="headers">Contact</h2>
        </Link>
        <Link
          to={"/Feedback"}
          style={{ textDecoration: "none", color: "white" }}
        >
          <h2 className="headers">Feedback</h2>
        </Link>
      </div>
      <div className="details">
        <Tabs />
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Container;
