import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [emailMobile, setEmailMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/login-user",
        { emailMobile, password }
      );

      toast.success(res.data.message);
      localStorage.setItem("login-user", JSON.stringify(res.data.user));
      console.log(res.data.user, "res");
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="login-page page">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-8 col-10 mx-auto">
            <form onSubmit={submitHandler}>
              <div className="row">
                <div className="col">
                  <h4 className="form-title">Login</h4>
                </div>
              </div>
              <div className="form-group mb-3">
                <label>email/mobile</label>
                <input
                  type="text"
                  placeholder="John"
                  className="form-control"
                  required
                  value={emailMobile}
                  onChange={(e) => setEmailMobile(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="123456789"
                  className="form-control"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn btn-submit btn-success">Login</button>
              <p className="another-opt">
                Not a member? <Link to="/signup">SignUp</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
