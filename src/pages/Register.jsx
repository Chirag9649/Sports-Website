import React from "react";

const Register = () => {
  return (
    <div id="register" className="d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="p-4 rounded"
        style={{
          width: "50%",
          backgroundColor: "rgba(0, 0, 0, 0.3)", 
          
        }}
      >
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;