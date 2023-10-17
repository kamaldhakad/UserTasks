import React from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Protected from "./components/Protected";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Protected Component={Home} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
