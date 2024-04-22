import React from "react";
import { Navigate } from "react-router-dom";

import { Button } from "antd";

const Feedback = () => {
  return sessionStorage.getItem("user_token") ? (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <textarea style={{ width: "70vw", height: "50vh" }} />
      <br />
      <Button>SUBMIT</Button>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Feedback;
