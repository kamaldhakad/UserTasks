import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Protected = ({ Component }) => {
  const navigate = useNavigate();
  let isLogin = localStorage.getItem("login-user");

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <Component />
    </>
  );
};

export default Protected;
