import React from "react";

import { Navigate } from "react-router-dom";

const Events = () => {
  return sessionStorage.getItem("user_token") ? (
    <>
      <div>
        <b>Please find all upcoming events here:</b>
      </div>
      <br />
      <textarea style={{ width: "70vw", height: "50vh" }} />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default Events;
