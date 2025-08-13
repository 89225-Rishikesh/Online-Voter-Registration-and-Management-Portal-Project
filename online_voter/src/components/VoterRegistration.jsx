"use client"

import { useState } from "react"

export default function VoterRegistration({ user }) {
  const [step, setStep] = useState(1)
  const [voterDetails, setVoterDetails] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    dob: "",
    place_of_birth: "",
    aadhaar_no: "",
    epic_number: "",
    photo_path: null,
  })

  const [address, setAddress] = useState({
    house_no: "",
    street: "",
    locality: "",
    city: "",
    district: "",
    state: "",
    pin_code: "",
    document_path: null,
  })

  const handleVoterDetailsChange = (e) => {
    const { name, value, type, files } = e.target
    setVoterDetails({
      ...voterDetails,
      [name]: type === "file" ? files[0] : value,
    })
  }

  const handleAddressChange = (e) => {
    const { name, value, type, files } = e.target
    setAddress({
      ...address,
      [name]: type === "file" ? files[0] : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Voter registration application submitted successfully!")
    setStep(1)
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#FF9933" }}>
            Voter Registration
          </h2>
          <p className="lead text-muted">Complete your voter registration in simple steps</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Progress Bar */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className={`text-center ${step >= 1 ? "text-success" : "text-muted"}`}>
                    <div
                      className={`rounded-circle d-inline-flex align-items-center justify-content-center ${step >= 1 ? "bg-success" : "bg-secondary"}`}
                      style={{ width: "40px", height: "40px" }}
                    >
                      <span className="text-white fw-bold">1</span>
                    </div>
                    <div className="mt-2 small">Personal Details</div>
                  </div>
                  <div className={`text-center ${step >= 2 ? "text-success" : "text-muted"}`}>
                    <div
                      className={`rounded-circle d-inline-flex align-items-center justify-content-center ${step >= 2 ? "bg-success" : "bg-secondary"}`}
                      style={{ width: "40px", height: "40px" }}
                    >
                      <span className="text-white fw-bold">2</span>
                    </div>
                    <div className="mt-2 small">Upload Documents</div>
                  </div>
                  <div className={`text-center ${step >= 3 ? "text-success" : "text-muted"}`}>
                    <div
                      className={`rounded-circle d-inline-flex align-items-center justify-content-center ${step >= 3 ? "bg-success" : "bg-secondary"}`}
                      style={{ width: "40px", height: "40px" }}
                    >
                      <span className="text-white fw-bold">3</span>
                    </div>
                    <div className="mt-2 small">Submit Application</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow-lg border-0">
              <div className="card-header text-center" style={{ backgroundColor: "#138808", color: "white" }}>
                <h4 className="mb-0">
                  Step {step}:{" "}
                  {step === 1 ? "Personal Details" : step === 2 ? "Upload Documents" : "Submit Application"}
                </h4>
              </div>
              <div className="card-body p-4">
                {step === 1 && (
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-bold">First Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="first_name"
                          value={voterDetails.first_name}
                          onChange={handleVoterDetailsChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Last Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="last_name"
                          value={voterDetails.last_name}
                          onChange={handleVoterDetailsChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Gender *</label>
                        <select
                          className="form-select"
                          name="gender"
                          value={voterDetails.gender}
                          onChange={handleVoterDetailsChange}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="MALE">Male</option>
                          <option value="FEMALE">Female</option>
                          <option value="OTHER">Other</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Date of Birth *</label>
                        <input
                          type="date"
                          className="form-control"
                          name="dob"
                          value={voterDetails.dob}
                          onChange={handleVoterDetailsChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Place of Birth *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="place_of_birth"
                          value={voterDetails.place_of_birth}
                          onChange={handleVoterDetailsChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Aadhaar Number *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="aadhaar_no"
                          value={voterDetails.aadhaar_no}
                          onChange={handleVoterDetailsChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <h5 className="fw-bold mt-4 mb-3" style={{ color: "#FF9933" }}>
                          Address Details
                        </h5>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">House Number *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="house_no"
                          value={address.house_no}
                          onChange={handleAddressChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Street *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="street"
                          value={address.street}
                          onChange={handleAddressChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Locality *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="locality"
                          value={address.locality}
                          onChange={handleAddressChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">City *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          value={address.city}
                          onChange={handleAddressChange}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-bold">District *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="district"
                          value={address.district}
                          onChange={handleAddressChange}
                          required
                        />
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-bold">State *</label>
                        <select
                          className="form-select"
                          name="state"
                          value={address.state}
                          onChange={handleAddressChange}
                          required
                        >
                          <option value="">Select State</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                        </select>
                      </div>
                      <div className="col-md-4">
                        <label className="form-label fw-bold">PIN Code *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="pin_code"
                          value={address.pin_code}
                          onChange={handleAddressChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="text-end mt-4">
                      <button
                        type="button"
                        className="btn btn-lg"
                        style={{ backgroundColor: "#FF9933", borderColor: "#FF9933", color: "white" }}
                        onClick={nextStep}
                      >
                        Next Step →
                      </button>
                    </div>
                  </form>
                )}

                {step === 2 && (
                  <form>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Upload Photo *</label>
                        <input
                          type="file"
                          className="form-control"
                          name="photo_path"
                          onChange={handleVoterDetailsChange}
                          accept="image/*"
                          required
                        />
                        <small className="text-muted">Upload a recent passport-size photograph</small>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-bold">Upload Address Proof *</label>
                        <input
                          type="file"
                          className="form-control"
                          name="document_path"
                          onChange={handleAddressChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                          required
                        />
                        <small className="text-muted">Upload address proof document (PDF/Image)</small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                      <button type="button" className="btn btn-lg btn-outline-secondary" onClick={prevStep}>
                        ← Previous
                      </button>
                      <button
                        type="button"
                        className="btn btn-lg"
                        style={{ backgroundColor: "#FF9933", borderColor: "#FF9933", color: "white" }}
                        onClick={nextStep}
                      >
                        Next Step →
                      </button>
                    </div>
                  </form>
                )}

                {step === 3 && (
                  <div>
                    <div className="text-center mb-4">
                      <h5 className="fw-bold" style={{ color: "#138808" }}>
                        Review Your Application
                      </h5>
                      <p className="text-muted">Please review all the information before submitting</p>
                    </div>

                    <div className="row g-3 mb-4">
                      <div className="col-md-6">
                        <strong>Name:</strong> {voterDetails.first_name} {voterDetails.last_name}
                      </div>
                      <div className="col-md-6">
                        <strong>Gender:</strong> {voterDetails.gender}
                      </div>
                      <div className="col-md-6">
                        <strong>Date of Birth:</strong> {voterDetails.dob}
                      </div>
                      <div className="col-md-6">
                        <strong>Aadhaar Number:</strong> {voterDetails.aadhaar_no}
                      </div>
                      <div className="col-12">
                        <strong>Address:</strong> {address.house_no}, {address.street}, {address.locality},{" "}
                        {address.city}, {address.district}, {address.state} - {address.pin_code}
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <button type="button" className="btn btn-lg btn-outline-secondary" onClick={prevStep}>
                        ← Previous
                      </button>
                      <button
                        type="button"
                        className="btn btn-lg"
                        style={{ backgroundColor: "#138808", borderColor: "#138808", color: "white" }}
                        onClick={handleSubmit}
                      >
                        Submit Application
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
