"use client";

import { useState } from "react";

export default function VoterHistory() {
  const [voterId, setVoterId] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const mockVoterHistory = {
    voterName: "Rajesh Kumar Sharma",
    voterId: "ABC1234567",
    constituency: "New Delhi",
    registrationDate: "2018-03-15",
    status: "Active",
    votingHistory: [
      {
        election: "Lok Sabha Election 2024",
        date: "2024-04-19",
        pollingStation: "Government School, Connaught Place",
        voted: true,
      },
      {
        election: "Delhi Assembly Election 2020",
        date: "2020-02-08",
        pollingStation: "Government School, Connaught Place",
        voted: true,
      },
      {
        election: "Lok Sabha Election 2019",
        date: "2019-05-12",
        pollingStation: "Government School, Connaught Place",
        voted: false,
      },
    ],
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (voterId.trim()) {
      // Simulate API call
      setTimeout(() => {
        setSearchResults(mockVoterHistory);
      }, 1000);
    }
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#FF9933" }}>
            Voter History
          </h2>
          <p className="lead text-muted">Voter History & Records</p>
          <div
            className="mx-auto"
            style={{ width: "100px", height: "4px", backgroundColor: "#138808", borderRadius: "2px" }}
          ></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg border-0 mb-4">
              <div className="card-header text-center" style={{ backgroundColor: "#138808", color: "white" }}>
                <h4 className="mb-0">🔍 Search Voter History</h4>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSearch}>
                  <div className="row g-3">
                    <div className="col-md-8">
                      <label className="form-label fw-bold">Voter ID Number</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        value={voterId}
                        onChange={(e) => setVoterId(e.target.value)}
                        placeholder="Enter your Voter ID (e.g., ABC1234567)"
                        required
                      />
                    </div>
                    <div className="col-md-4 d-flex align-items-end">
                      <button
                        type="submit"
                        className="btn btn-lg w-100"
                        style={{ backgroundColor: "#FF9933", borderColor: "#FF9933", color: "white" }}
                      >
                        🔍 Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {searchResults && (
              <div className="card shadow-lg border-0">
                <div className="card-header" style={{ backgroundColor: "#138808", color: "white" }}>
                  <h4 className="mb-0">📊 Voter Information</h4>
                </div>
                <div className="card-body p-4">
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <h5 className="fw-bold" style={{ color: "#FF9933" }}>
                        Personal Information
                      </h5>
                      <p>
                        <strong>Name:</strong> {searchResults.voterName}
                      </p>
                      <p>
                        <strong>Voter ID:</strong> {searchResults.voterId}
                      </p>
                      <p>
                        <strong>Constituency:</strong> {searchResults.constituency}
                      </p>
                    </div>
                    <div className="col-md-6">
                      <h5 className="fw-bold" style={{ color: "#138808" }}>
                        Registration Details
                      </h5>
                      <p>
                        <strong>Registration Date:</strong> {searchResults.registrationDate}
                      </p>
                      <p>
                        <strong>Status:</strong>
                        <span className="badge bg-success ms-2">{searchResults.status}</span>
                      </p>
                    </div>
                  </div>

                  <h5 className="fw-bold mb-3" style={{ color: "#FF9933" }}>
                    Voting History
                  </h5>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead style={{ backgroundColor: "#f8f9fa" }}>
                        <tr>
                          <th>Election</th>
                          <th>Date</th>
                          <th>Polling Station</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {searchResults.votingHistory.map((record, index) => (
                          <tr key={index}>
                            <td>{record.election}</td>
                            <td>{record.date}</td>
                            <td>{record.pollingStation}</td>
                            <td>
                              {record.voted ? (
                                <span className="badge bg-success">✅ Voted</span>
                              ) : (
                                <span className="badge bg-warning">❌ Did not vote</span>
                              )}
                            </td>
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