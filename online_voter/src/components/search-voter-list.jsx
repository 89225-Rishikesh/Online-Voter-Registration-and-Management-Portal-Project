
"use client";

import { useState } from "react";

export default function SearchVoterList() {
  const [searchType, setSearchType] = useState("name");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const mockVoters = [
    {
      voter_id: 1,
      first_name: "Rajesh",
      last_name: "Kumar",
      epic_number: "ABC1234567",
      gender: "MALE",
      dob: "1980-05-15",
      status: "ACTIVE",
      address: "123 Main Street, New Delhi",
    },
    {
      voter_id: 2,
      first_name: "Priya",
      last_name: "Singh",
      epic_number: "DEF2345678",
      gender: "FEMALE",
      dob: "1985-08-22",
      status: "ACTIVE",
      address: "456 Park Avenue, Mumbai",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const results = mockVoters.filter((voter) => {
        if (searchType === "name") {
          return (
            voter.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            voter.last_name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        } else {
          return voter.epic_number.toLowerCase().includes(searchTerm.toLowerCase());
        }
      });
      setSearchResults(results);
    }
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#FF9933" }}>
            Search Voter List
          </h2>
          <p className="lead text-muted">Find your name in the electoral roll</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0 mb-4">
              <div className="card-header" style={{ backgroundColor: "#138808", color: "white" }}>
                <h4 className="mb-0">🔍 Search Options</h4>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSearch}>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <label className="form-label fw-bold">Search By</label>
                      <select
                        className="form-select"
                        value={searchType}
                        onChange={(e) => setSearchType(e.target.value)}
                      >
                        <option value="name">Search by Name</option>
                        <option value="epic">Search by EPIC Number</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold">
                        {searchType === "name" ? "Enter Name" : "Enter EPIC Number"}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder={
                          searchType === "name" ? "Enter first or last name" : "Enter EPIC number"
                        }
                        required
                      />
                    </div>
                    <div className="col-md-2 d-flex align-items-end">
                      <button
                        type="submit"
                        className="btn btn-lg w-100"
                        style={{ backgroundColor: "#FF9933", borderColor: "#FF9933", color: "white" }}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {searchResults.length > 0 && (
              <div className="card shadow-lg border-0">
                <div className="card-header" style={{ backgroundColor: "#138808", color: "white" }}>
                  <h4 className="mb-0">📋 Search Results ({searchResults.length} found)</h4>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead style={{ backgroundColor: "#f8f9fa" }}>
                        <tr>
                          <th>EPIC Number</th>
                          <th>Name</th>
                          <th>Gender</th>
                          <th>Date of Birth</th>
                          <th>Status</th>
                          <th>Address</th>
                        </tr>
                      </thead>
                      <tbody>
                        {searchResults.map((voter) => (
                          <tr key={voter.voter_id}>
                            <td className="fw-bold">{voter.epic_number}</td>
                            <td>
                              {voter.first_name} {voter.last_name}
                            </td>
                            <td>
                              <span
                                className={`badge ${voter.gender === "MALE" ? "bg-primary" : "bg-success"}`}
                              >
                                {voter.gender}
                              </span>
                            </td>
                            <td>{voter.dob}</td>
                            <td>
                              <span className="badge bg-success">{voter.status}</span>
                            </td>
                            <td>{voter.address}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

