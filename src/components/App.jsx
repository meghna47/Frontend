import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";

const app = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exect path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);

export default app;
