import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import ChangePassword from "./Change_Password";
import Clubs from "./Clubs";
import ClubDetails from "./Clubs/ClubDetails";
import Contact from "./Contact";
import Events from "./Events";
import Feedback from "./Feedback";
import Home from "./Home";
import StudentsInfo from "./Students_Info";

const Tabs = () => {
  return sessionStorage.getItem("user_token") ? (
    <Routes>
      <Route exect path="/Change_Password" element={<ChangePassword />} />
      <Route exect path="/Clubs" element={<Clubs />} />
      <Route exect path="/Clubs/:Id" element={<ClubDetails />} />
      <Route exect path="/Contact" element={<Contact />} />
      <Route exect path="/Events" element={<Events />} />
      <Route exect path="/Feedback" element={<Feedback />} />
      <Route exact path="/Home" element={<Home />} />
      <Route exect path="/Students_Info" element={<StudentsInfo />} />
    </Routes>
  ) : (
    <Navigate to="/login" />
  );
};

export default Tabs;
