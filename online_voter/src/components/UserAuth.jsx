"use client";

import { useState } from "react";

export default function UserAuth({ setUser, type }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
    role: type === "volunteer" ? "volunteer" : "voter",
  });
  const [error, setError] = useState("");

  // Static user data for login simulation
  const users = {
    "john_doe": "password123",
    "jane_smith": "pass456",
    "volunteer1": "vol123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    if (isLogin) {
      // Login validation
      if (users[formData.username] && users[formData.username] === formData.password) {
        const userData = {
          user_id: Math.floor(Math.random() * 1000),
          username: formData.username,
          role: formData.role,
          created_at: new Date().toISOString(),
        };
        setUser(userData);
      } else {
        setError("Invalid username or password.");
      }
    } else {
      // Registration simulation
      const userData = {
        user_id: Math.floor(Math.random() * 1000),
        username: formData.username,
        email: formData.email,
        mobile: formData.mobile,
        role: formData.role,
        created_at: new Date().toISOString(),
      };
      setUser(userData);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#FF9933" }}>
            {type === "volunteer" ? "Volunteer Portal" : "Voter Registration"}
          </h2>
          <p className="lead text-muted">{isLogin ? "Login to your account" : "Create a new account"}</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow-lg border-0">
              <div className="card-header text-center" style={{ backgroundColor: "#138808", color: "white" }}>
                <h4 className="mb-0">{isLogin ? "🔐 Login" : "📝 Register"}</h4>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  {error && <div className="alert alert-danger mb-3">{error}</div>}
                  <div className="mb-3">
                    <label className="form-label fw-bold">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {!isLogin && (
                    <>
                      <div className="mb-3">
                        <label className="form-label fw-bold">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label fw-bold">Mobile Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </>
                  )}

                  <div className="d-grid mb-3">
                    <button
                      type="submit"
                      className="btn btn-lg"
                      style={{ backgroundColor: "#FF9933", borderColor: "#FF9933", color: "white" }}
                    >
                      {isLogin ? "Login" : "Register"}
                    </button>
                  </div>
                </form>

                <div className="text-center">
                  <button className="btn btn-link text-decoration-none" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "New user? Register here" : "Already registered? Login here"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}