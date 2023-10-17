import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [name, setName] = useState("");
  const [fathername, setFathername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      console.log({ name, fathername, email, phoneCode, phone, password });
      const res = await axios.post(
        "http://localhost:5000/api/v1/user/create-user",
        { name, fathername, email, phoneCode, phone, password }
      );
      toast.success(res.data.message);
      console.log(res, "res");
      navigate("/login");
    } catch (error) {
      console.log(error);
      if (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div className="signup-page page">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-8 col-10 mx-auto">
            <form onSubmit={submitHandler}>
              <div className="row">
                <div className="col">
                  <h4 className="form-title">Sign Up</h4>
                </div>
              </div>
              <div className="form-group mb-3">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="form-control"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="">Father name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="form-control"
                  required
                  value={fathername}
                  onChange={(e) => setFathername(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="Doe"
                  className="form-control"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="row">
                <label htmlFor="">Phone number</label>
                <div className="col-md-3">
                  <div className="form-group mb-3">
                    <input
                      type="number"
                      placeholder="+91"
                      className="form-control"
                      value={phoneCode}
                      required
                      onChange={(e) => setPhoneCode(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="form-group mb-3">
                    <input
                      type="number"
                      placeholder="123456789"
                      className="form-control"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
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
              <button className="btn btn-submit btn-success">Sign Up</button>
              <p className="another-opt">
                Already a member? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
