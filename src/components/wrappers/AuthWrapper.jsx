import React from "react";
import { Navigate } from "react-router-dom";

const wrap = (Component) =>
  sessionStorage.getItem("user_token") ? (
    <Component />
  ) : (
    <Navigate to="/login" />
  );
export default wrap;
