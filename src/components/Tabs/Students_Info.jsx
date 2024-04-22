import React from "react";

import { Navigate } from "react-router-dom";

const Student_Info = () => {
  return sessionStorage.getItem("user_token") ? (
    <div>Student_Info</div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Student_Info;
