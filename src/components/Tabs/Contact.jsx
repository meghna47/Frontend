import React from "react";
import { Navigate } from "react-router-dom";

const Contact = () => {
  return sessionStorage.getItem("user_token") ? (
    <>
      <div>Contact</div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Contact;
