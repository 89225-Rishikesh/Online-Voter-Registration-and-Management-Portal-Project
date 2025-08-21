"use client";

import { useState } from "react";

export default function VoterList() {
  const [searchParams, setSearchParams] = useState({
    constituency: "",
    pollingStation: "",
    searchTerm: "",
  });

  const mockVoters = [
    { id: "ABC1234567", name: "Rajesh Kumar Sharma", age: 45, gender: "Male", address: "Connaught Place, New Delhi" },
    { id: "DEF2345678", name: "Priya Singh", age: 32, gender: "Female", address: "Karol Bagh, New Delhi" },
    { id: "GHI3456789", name: "Amit Patel", age: 28, gender: "Male", address: "Lajpat Nagar, New Delhi" },
    { id: "JKL4567890", name: "Sunita Gupta", age: 55, gender: "Female", address: "Rohini, New Delhi" },
    { id: "MNO5678901", name: "Vikram Joshi", age: 38, gender: "Male", address: "Dwarka, New Delhi" },
  ];

  const [filteredVoters, setFilteredVoters] = useState(mockVoters);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = mockVoters.filter(
      (voter) =>
        voter.name.toLowerCase().includes(searchParams.searchTerm.toLowerCase()) ||
        voter.id.toLowerCase().includes(searchParams.searchTerm.toLowerCase())
    );
    setFilteredVoters(filtered);
  };

  const handleChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#FF9933" }}>
            Voter List
          </h2>
          <p className="lead text-muted">Electoral Roll / Voter List</p>
          <div
            className="mx-auto"
            style={{ width: "100px", height: "4px", backgroundColor: "#138808", borderRadius: "2px" }}
          ></div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card shadow-lg border-0 mb-4">
              <div className="card-header" style={{ backgroundColor: "#138808", color: "white" }}>
                <h4 className="mb-0">🔍 Search Voters</h4>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSearch}>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <label className="form-label fw-bold">Constituency</label>
                      <select
                        className="form-select"
                        name="constituency"
                        value={searchParams.constituency}
                        onChange={handleChange}
                      >
                        <option value="">All Constituencies</option>
                        <option value="new-delhi">New Delhi</option>
                        <option value="south-delhi">South Delhi</option>
                        <option value="north-delhi">North Delhi</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-bold">Polling Station</label>
                      <select
                        className="form-select"
                        name="pollingStation"
                        value={searchParams.pollingStation}
                        onChange={handleChange}
                      >
                        <option value="">All Polling Stations</option>
                        <option value="station-1">Government School, CP</option>
                        <option value="station-2">Community Center, KB</option>
                        <option value="station-3">Public School, LN</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-bold">Search</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name="searchTerm"
                          value={searchParams.searchTerm}
                          onChange={handleChange}
                          placeholder="Name or Voter ID"
                        />
                        <button
                          type="submit"
                          className="btn"
                          style={{ backgroundColor: "#FF9933", borderColor: "#FF9933", color: "white" }}
                        >
                          🔍
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="card shadow-lg border-0">
              <div
                className="card-header d-flex justify-content-between align-items-center"
                style={{ backgroundColor: "#138808", color: "white" }}
              >
                <h4 className="mb-0">📋 Voter List ({filteredVoters.length} voters)</h4>
                <button className="btn btn-light btn-sm">📥 Download PDF</button>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover mb-0">
                    <thead style={{ backgroundColor: "#f8f9fa" }}>
                      <tr>
                        <th>Voter ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredVoters.map((voter, index) => (
                        <tr key={index}>
                          <td className="fw-bold">{voter.id}</td>
                          <td>{voter.name}</td>
                          <td>{voter.age}</td>
                          <td>
                            <span className={voter.gender === "Male" ? "badge bg-primary" : "badge bg-success"}>
                              {voter.gender === "Male" ? "👨" : "👩"} {voter.gender}
                            </span>
                          </td>
                          <td>{voter.address}</td>
                          <td>
                            <button className="btn btn-sm btn-outline-primary me-2">👁️ View</button>
                            <button className="btn btn-sm btn-outline-secondary">📄 Details</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}