"use client"

import { useState } from "react"

export default function VolunteerPortal({ user }) {
  const [volunteerData, setVolunteerData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    interest: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Volunteer request submitted successfully!")
  }

  const handleChange = (e) => {
    setVolunteerData({
      ...volunteerData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#FF9933" }}>
            Volunteer Portal
          </h2>
          <p className="lead text-muted">Join as a volunteer for election activities</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0">
              <div className="card-header text-center" style={{ backgroundColor: "#138808", color: "white" }}>
                <h4 className="mb-0">👥 Volunteer Registration</h4>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Full Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={volunteerData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={volunteerData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Phone Number *</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={volunteerData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Select Role *</label>
                      <select
                        className="form-select"
                        name="role"
                        value={volunteerData.role}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose Role</option>
                        <option value="polling-agent">Polling Agent</option>
                        <option value="election-observer">Election Observer</option>
                        <option value="voter-education">Voter Education</option>
                        <option value="technical-support">Technical Support</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-bold">Area of Interest *</label>
                      <textarea
                        className="form-control"
                        name="interest"
                        rows={4}
                        value={volunteerData.interest}
                        onChange={handleChange}
                        placeholder="Describe your interest and experience in electoral processes..."
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-lg px-5"
                      style={{ backgroundColor: "#FF9933", borderColor: "#FF9933", color: "white" }}
                    >
                      👥 Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
