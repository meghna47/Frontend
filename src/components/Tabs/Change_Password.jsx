import React from "react";

import { Navigate } from "react-router-dom";

const Change_Password = () => {
  return sessionStorage.getItem("user_token") ? (
    <div>CHANGE PASSWORD</div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Change_Password;
