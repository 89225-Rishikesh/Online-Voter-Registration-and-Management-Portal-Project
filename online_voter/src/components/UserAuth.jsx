"use client"

import { useState } from "react"
import { signinUser, signinAdmin, registerAdmin, signupUser } from "./api" // added signupUser

export default function UserAuth({ setUser, type, setActiveSection }) {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
    role: "VOTER",
  })
  const [error, setError] = useState("")
  const [fieldErrors, setFieldErrors] = useState({})

  // Validate fields before submit and update fieldErrors state
  const validateForm = () => {
    const errors = {}

    if (!formData.username.trim()) {
      errors.username = "Username is required"
    } else if (formData.username.length < 3) {
      errors.username = "Username must be at least 3 characters"
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required"
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters"
    }

    if (!isLogin && type !== "admin") {
      if (!formData.email.trim()) {
        errors.email = "Email is required"
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = "Invalid email address"
      }

      if (!formData.mobile.trim()) {
        errors.mobile = "Mobile number is required"
      } else if (!/^\d{10}$/.test(formData.mobile.replace(/\s/g, ''))) {
        errors.mobile = "Mobile number must be 10 digits"
      }
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setFieldErrors({})

    if (!validateForm()) {
      setError("Please fix the errors below")
      return
    }

    try {
      if (isLogin) {
        if (type === "admin") {
          // Admin authentication
          const response = await signinAdmin({
            email: formData.username,
            password: formData.password,
          });

          if (!response.ok) {
            const text = await response.text();
            setError(`Login failed: ${text || "Invalid admin credentials"}`);
            return;
          }

          const result = await response.json();

          if (!result.user || result.user.role.toUpperCase() !== "ADMIN") {
            setError("This account does not have admin privileges");
            return;
          }

          if (result.jwt) {
            localStorage.setItem("authToken", result.jwt);
          }

          setUser({
            user_id: result.user.userId,
            username: result.user.username,
            email: result.user.email,
            mobile: result.user.mobile,
            role: result.user.role,
            created_at: result.user.createdAt,
            token: result.jwt,
          });
          localStorage.setItem('user', JSON.stringify({
            user_id: result.user.userId,
            username: result.user.username,
            email: result.user.email,
            mobile: result.user.mobile,
            role: result.user.role,
            created_at: result.user.createdAt,
            token: result.jwt,
          }));

          // Set active section to admin portal
          setActiveSection("admin");
        } else {
          // Real user login API call

          // Allow login with either username or email
          let loginPayload = { password: formData.password };
          if (formData.username.includes("@")) {
            loginPayload.email = formData.username;
          } else {
            loginPayload.username = formData.username;
          }

          const response = await fetch("http://localhost:8080/users/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginPayload),
          })

          if (!response.ok) {
            const text = await response.text() // Get raw response for debugging
            setError(`Login failed: ${text || "Invalid username or password"}`)
            return
          }

          const result = await response.json()

          if (result.token) {
            localStorage.setItem("authToken", result.token)
          }

          setUser({
            user_id: result.user_id || result.userId,
            username: result.username,
            email: result.email,
            mobile: result.mobile,
            role: result.role || formData.role,
            created_at: result.created_at,
            token: result.token,
          });
          localStorage.setItem('user', JSON.stringify({
            user_id: result.user_id || result.userId,
            username: result.username,
            email: result.email,
            mobile: result.mobile,
            role: result.role || formData.role,
            created_at: result.created_at,
            token: result.token,
          }));

          // Set active section based on role
          if (result.role?.toUpperCase() === "ADMIN") {
            setActiveSection("admin");
          } else {
            setActiveSection("voter-portal");
          }
        }
      } else {
        if (type === "admin") {
          // Admin registration
          const response = await registerAdmin({
            username: formData.username,
            email: formData.email,
            password: formData.password,
            mobile: formData.mobile
          });

          if (!response.ok) {
            const text = await response.text();
            setError(`Admin registration failed: ${text || "Please try again"}`);
            return;
          }

          const result = await response.json();
          setError("Admin registered successfully. Please login.");
          setIsLogin(true);
          return;
        }

        // User registration
        const response = await signupUser({
          username: formData.username,
          password: formData.password,
          email: formData.email,
          mobile: formData.mobile
        });

        if (!response.ok) {
          const text = await response.text();
          setError(`Registration failed: ${text || "Please try again"}`);
          return;
        }

        // Login after registration
        const loginResponse = await signinUser({
          email: formData.email,
          password: formData.password,
        });

        if (!loginResponse.ok) {
          const text = await loginResponse.text()
          setError(`Login after registration failed: ${text || "Please try again"}`)
          return
        }

        const loginResult = await loginResponse.json()

        if (loginResult.token) {
          localStorage.setItem("authToken", loginResult.token)
        }

        setUser({
          user_id: loginResult.user_id || loginResult.userId,
          username: loginResult.username,
          email: loginResult.email,
          mobile: loginResult.mobile,
          role: loginResult.role || formData.role,
          created_at: loginResult.created_at,
          token: loginResult.token,
        })
        localStorage.setItem('user', JSON.stringify({
          user_id: loginResult.user_id || loginResult.userId,
          username: loginResult.username,
          email: loginResult.email,
          mobile: loginResult.mobile,
          role: loginResult.role || formData.role,
          created_at: loginResult.created_at,
          token: loginResult.token,
        }));
      }
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.")
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })

    if (fieldErrors[name]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: "",
      })
    }

    if (error) {
      setError("")
    }
  }

  const getTitle = () => {
    if (type === "admin") return "Admin Portal"
    if (type === "volunteer") return "Volunteer Portal"
    return "Voter Registration"
  }

  const getSubtitle = () => {
    if (type === "admin") return "Secure access for election administrators"
    if (isLogin) return "Login to your account"
    return "Create a new account"
  }

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: type === "admin" ? "#138808" : "#FF9933" }}>
            {getTitle()}
          </h2>
          <p className="lead text-muted">{getSubtitle()}</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow-lg border-0">
              <div className="card-header text-center" style={{ backgroundColor: "#138808", color: "white" }}>
                <h4 className="mb-0">{isLogin ? "🔐 Login" : "📝 Register"}</h4>
              </div>
              <div className="card-body p-4">
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} noValidate>
                  {/* Username */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">Username</label>
                    <input
                      type="text"
                      className={`form-control ${fieldErrors.username ? "is-invalid" : ""}`}
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                    {fieldErrors.username && <div className="invalid-feedback">{fieldErrors.username}</div>}
                  </div>

                  {/* Password */}
                  <div className="mb-3">
                    <label className="form-label fw-bold">Password</label>
                    <input
                      type="password"
                      className={`form-control ${fieldErrors.password ? "is-invalid" : ""}`}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    {fieldErrors.password && <div className="invalid-feedback">{fieldErrors.password}</div>}
                  </div>

                  {/* Registration extra fields */}
                  {!isLogin && (
                    <>
                      <div className="mb-3">
                        <label className="form-label fw-bold">Email</label>
                        <input
                          type="email"
                          className={`form-control ${fieldErrors.email ? "is-invalid" : ""}`}
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        {fieldErrors.email && <div className="invalid-feedback">{fieldErrors.email}</div>}
                      </div>

                      <div className="mb-3">
                        <label className="form-label fw-bold">Mobile Number</label>
                        <input
                          type="tel"
                          className={`form-control ${fieldErrors.mobile ? "is-invalid" : ""}`}
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          required
                        />
                        {fieldErrors.mobile && <div className="invalid-feedback">{fieldErrors.mobile}</div>}
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

                {type !== "admin" && (
                  <div className="text-center">
                    <button
                      className="btn btn-link text-decoration-none"
                      onClick={() => {
                        setIsLogin(!isLogin)
                        setError("")
                        setFieldErrors({})
                      }}
                    >
                      {isLogin ? "New user? Register here" : "Already registered? Login here"}
                    </button>
                  </div>
                )}

                {type === "admin" && (
                  <>
                    <div className="text-center">
                      <button
                        className="btn btn-link text-decoration-none"
                        onClick={() => {
                          setIsLogin(!isLogin)
                          setError("")
                          setFieldErrors({})
                        }}
                      >
                        {isLogin ? "Register new admin" : "Already registered? Login here"}
                      </button>
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-muted small">
                        <strong>{isLogin ? "Admin Login" : "Admin Registration"}</strong>
                        <br />
                        {isLogin ? "Use your admin email and password" : "Create new admin account"}
                      </p>
                      <p className="text-muted small">
                        <strong>Note:</strong> This portal is restricted to authorized election commission personnel only.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}