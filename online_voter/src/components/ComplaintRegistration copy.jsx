"use client";

import { useState } from "react";

export default function ComplaintRegistration() {
  const [complaint, setComplaint] = useState({
    voterName: "",
    voterId: "",
    mobile: "",
    email: "",
    complaintType: "",
    subject: "",
    description: "",
    constituency: "",
    evidence: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Complaint registered successfully! Reference ID: COMP" +
        Math.random().toString(36).substr(2, 9).toUpperCase()
    );
  };

  const handleChange = (e) => {
    setComplaint({
      ...complaint,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setComplaint({
        ...complaint,
        evidence: e.target.files[0],
      });
    }
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#FF9933" }}>
            Complaint Registration
          </h2>
          <p className="lead text-muted">Complaint Registration</p>
          <div
            className="mx-auto"
            style={{ width: "100px", height: "4px", backgroundColor: "#138808", borderRadius: "2px" }}
          ></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0">
              <div className="card-header text-center" style={{ backgroundColor: "#138808", color: "white" }}>
                <h4 className="mb-0">📋 Register Your Complaint</h4>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Voter Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="voterName"
                        value={complaint.voterName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Voter ID *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="voterId"
                        value={complaint.voterId}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Mobile Number *</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="mobile"
                        value={complaint.mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={complaint.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Complaint Type *</label>
                      <select
                        className="form-select"
                        name="complaintType"
                        value={complaint.complaintType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Complaint Type</option>
                        <option value="voter-list">Voter List Issues</option>
                        <option value="polling-booth">Polling Booth Problems</option>
                        <option value="candidate-conduct">Candidate Conduct</option>
                        <option value="electoral-malpractice">Electoral Malpractice</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">Constituency *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="constituency"
                        value={complaint.constituency}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-bold">Subject *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        value={complaint.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-bold">Complaint Description *</label>
                      <textarea
                        className="form-control"
                        name="description"
                        rows={5}
                        value={complaint.description}
                        onChange={handleChange}
                        placeholder="Please provide detailed information about your complaint..."
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-bold">Upload Evidence</label>
                      <input
                        type="file"
                        className="form-control"
                        name="evidence"
                        onChange={handleFileChange}
                        accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                      />
                      <small className="text-muted">Supported formats: JPG, PNG, PDF, DOC (Max 5MB)</small>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-lg px-5"
                      style={{ backgroundColor: "#FF9933", borderColor: "#FF9933", color: "white" }}
                    >
                      📋 Submit Complaint
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}