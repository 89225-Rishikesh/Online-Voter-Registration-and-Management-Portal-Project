// "use client"

import { useState } from "react"
import { createVoterDetailsWithFiles } from "./api"

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

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const eighteenYearsAgo = (() => { const d = new Date(); d.setFullYear(d.getFullYear() - 18); return d.toISOString().split('T')[0]; })();

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

  // Validation for Step 1 fields
  const validateStep1 = () => {
    if (!voterDetails.first_name.trim()) return "First name is required"
    if (!voterDetails.last_name.trim()) return "Last name is required"
    if (!voterDetails.gender) return "Please select gender"
    if (!voterDetails.dob) return "Date of birth is required"
    // Age check 18+
    const dobDate = new Date(voterDetails.dob)
    const today = new Date()
    let age = today.getFullYear() - dobDate.getFullYear()
    const m = today.getMonth() - dobDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) age--
    if (age < 18) return "You must be at least 18 years old"
    if (!voterDetails.place_of_birth.trim()) return "Place of birth is required"
    if (!voterDetails.aadhaar_no.trim()) return "Aadhaar number is required"

    if (!address.house_no.trim()) return "House number is required"
    if (!address.street.trim()) return "Street is required"
    if (!address.locality.trim()) return "Locality is required"
    if (!address.city.trim()) return "City is required"
    if (!address.district.trim()) return "District is required"
    if (!address.state.trim()) return "State is required"
    if (!address.pin_code.trim()) return "PIN code is required"

    return null
  }

  // Validation for Step 2 fields - check files are uploaded
  const validateStep2 = () => {
    if (!voterDetails.photo_path) return "Please upload your photo"
    if (!address.document_path) return "Please upload address proof document"
    return null
  }

  const nextStep = () => {
    let validationError = null
    if (step === 1) {
      validationError = validateStep1()
    } else if (step === 2) {
      validationError = validateStep2()
    }
    if (validationError) {
      setError(validationError)
      return
    }
    setError("")
    setStep(step + 1)
  }

  const prevStep = () => {
    setError("")
    setStep(step - 1)
  }

  // Final submission to backend
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      const effectiveUser = user || (() => { try { return JSON.parse(localStorage.getItem('user')); } catch(e){ return null } })();
      const resolvedUserIdRaw = effectiveUser?.user_id ?? effectiveUser?.userId ?? effectiveUser?.id
      const resolvedUserId = resolvedUserIdRaw ? parseInt(resolvedUserIdRaw, 10) : null
      const token = effectiveUser?.token || localStorage.getItem('authToken')
      console.log('Submitting voter registration', { effectiveUser, resolvedUserId, tokenPresent: !!token })
      if (!resolvedUserId || !token) {
        setError(!resolvedUserId ? "Please login before submitting the application" : "Authentication token missing. Please login again.")
        setLoading(false)
        return
      }
      const voterDto = {
        userId: resolvedUserId,
        firstName: voterDetails.first_name,
        lastName: voterDetails.last_name,
        gender: voterDetails.gender,
        dob: voterDetails.dob,
        placeOfBirth: voterDetails.place_of_birth,
        aadhaarNo: voterDetails.aadhaar_no,
        epicNumber: voterDetails.epic_number || null,
        status: 'PENDING'
      }
      const response = await createVoterDetailsWithFiles({
        voterDto,
        photoFile: voterDetails.photo_path,
        addressProofFile: address.document_path,
        token
      })
      if (!response.ok) {
        const txt = await response.text()
        throw new Error(txt || `Submission failed (${response.status})`)
      }
      alert('Voter registration application submitted successfully!')
      setStep(1)
      setVoterDetails({ first_name: "", last_name: "", gender: "", dob: "", place_of_birth: "", aadhaar_no: "", epic_number: "", photo_path: null })
      setAddress({ house_no: "", street: "", locality: "", city: "", district: "", state: "", pin_code: "", document_path: null })
    } catch (err) {
      setError(err.message || 'Failed to submit application')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#FF9933" }}>
            Voter Registration
          </h2>
          <p className="lead text-muted">Complete your voter registration in simple steps</p>
          {!!error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Progress Bar */}
            <div className="card mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className={`text-center ${step >= num ? "text-success" : "text-muted"}`}
                    >
                      <div
                        className={`rounded-circle d-inline-flex align-items-center justify-content-center ${
                          step >= num ? "bg-success" : "bg-secondary"
                        }`}
                        style={{ width: "40px", height: "40px" }}
                      >
                        <span className="text-white fw-bold">{num}</span>
                      </div>
                      <div className="mt-2 small">
                        {num === 1
                          ? "Personal Details"
                          : num === 2
                          ? "Upload Documents"
                          : "Submit Application"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card shadow-lg border-0">
              <div className="card-header text-center" style={{ backgroundColor: "#138808", color: "white" }}>
                <h4 className="mb-0">
                  Step {step}: {step === 1 ? "Personal Details" : step === 2 ? "Upload Documents" : "Submit Application"}
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
                          max={eighteenYearsAgo}
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
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Submit Application"}
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
