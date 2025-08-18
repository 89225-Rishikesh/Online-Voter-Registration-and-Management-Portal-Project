"use client";

import React, { useState } from "react";

export default function VolunteerLogin() {
  const [loginData, setLoginData] = useState({
    volunteerId: "",
    password: "",
    rememberMe: false,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login
    setIsLoggedIn(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  if (isLoggedIn) {
    return (
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3" style={{ color: "#138808" }}>
              Volunteer Dashboard
            </h2>
            <p className="lead text-muted">Welcome to your dashboard</p>
          </div>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div style={{ fontSize: "3rem", color: "#FF9933" }}>📊</div>
                  <h5 className="mt-3">Election Monitoring</h5>
                  <p className="text-muted">
                    Monitor polling stations and report issues
                  </p>
                  <button className="btn btn-outline-primary">Access</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div style={{ fontSize: "3rem", color: "#138808" }}>👥</div>
                  <h5 className="mt-3">Voter Assistance</h5>
                  <p className="text-muted">
                    Help voters with registration and queries
                  </p>
                  <button className="btn btn-outline-success">Access</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div style={{ fontSize: "3rem", color: "#FF9933" }}>📋</div>
                  <h5 className="mt-3">Report Management</h5>
                  <p className="text-muted">
                    Submit and track incident reports
                  </p>
                  <button className="btn btn-outline-warning">Access</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#FF9933" }}>
            Volunteer Login
          </h2>
          <p className="lead text-muted">Volunteer Login Portal</p>
          <div
            className="mx-auto"
            style={{
              width: "100px",
              height: "4px",
              backgroundColor: "#138808",
              borderRadius: "2px",
            }}
          />
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow-lg border-0">
              <div
                className="card-header text-center"
                style={{ backgroundColor: "#138808", color: "white" }}
              >
                <h4 className="mb-0">👥 Volunteer Access</h4>
              </div>
              <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label fw-bold">Volunteer ID</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="volunteerId"
                      value={loginData.volunteerId}
                      onChange={handleChange}
                      placeholder="Enter your Volunteer ID"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label fw-bold">Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      name="password"
                      value={loginData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="rememberMe"
                        id="rememberMe"
                        checked={loginData.rememberMe}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-lg"
                      style={{
                        backgroundColor: "#FF9933",
                        borderColor: "#FF9933",
                        color: "white",
                      }}
                    >
                      🔐 Login
                    </button>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <a href="#" className="text-decoration-none">
                    Forgot Password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
