import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Login from "./Login";
import Container from "./Container";

const app = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="*" element={<Container />} />
      <Route exect path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default app;
