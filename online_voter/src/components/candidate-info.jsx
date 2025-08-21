export default function CandidateInfo() {
  const candidates = [
    {
      name: "Amit Sharma",
      party: "Progressive Party",
      symbol: "🌅",
      constituency: "New Delhi",
      age: 45,
      education: "MBA, Delhi University",
      experience: "15 years in public service",
      manifesto: "Focus on education, healthcare, and infrastructure development",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Priya Singh",
      party: "Unity Alliance",
      symbol: "🤝",
      constituency: "New Delhi",
      age: 42,
      education: "MA Political Science, JNU",
      experience: "12 years in social work and politics",
      manifesto: "Women empowerment, environmental protection, and job creation",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Rahul Verma",
      party: "People's Front",
      symbol: "👥",
      constituency: "New Delhi",
      age: 38,
      education: "LLB, Delhi University",
      experience: "10 years as lawyer and activist",
      manifesto: "Anti-corruption, transparency, and youth development",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#FF9933" }}>
            Candidate Information
          </h2>
          <p className="lead text-muted">Candidate Information</p>
          <div
            className="mx-auto"
            style={{ width: "100px", height: "4px", backgroundColor: "#138808", borderRadius: "2px" }}
          ></div>
        </div>

        

        <div className="row g-4">
          {candidates.map((candidate, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 shadow-lg border-0">
                <div className="card-header text-center" style={{ backgroundColor: "#138808", color: "white" }}>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="me-2" style={{ fontSize: "2rem" }}>
                      {candidate.symbol}
                    </span>
                    <h5 className="mb-0">{candidate.party}</h5>
                  </div>
                </div>
                <div className="card-body text-center p-4">
                  <img
                    src={candidate.image || "/placeholder.svg"}
                    alt={candidate.name}
                    className="rounded-circle mb-3"
                    style={{ width: "120px", height: "120px", objectFit: "cover" }}
                  />
                  <h4 className="fw-bold mb-2" style={{ color: "#FF9933" }}>
                    {candidate.name}
                  </h4>
                  <p className="text-muted mb-3">
                    <strong>📍 Constituency:</strong> {candidate.constituency}
                  </p>

                  <div className="text-start">
                    <div className="mb-2">
                      <strong style={{ color: "#138808" }}>Age:</strong> {candidate.age} years
                    </div>
                    <div className="mb-2">
                      <strong style={{ color: "#138808" }}>Education:</strong> {candidate.education}
                    </div>
                    <div className="mb-3">
                      <strong style={{ color: "#138808" }}>Experience:</strong> {candidate.experience}
                    </div>
                    <div className="mb-3">
                      <strong style={{ color: "#138808" }}>Manifesto:</strong>
                      <p className="small text-muted mt-1">{candidate.manifesto}</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-transparent text-center">
                  <button className="btn btn-outline-primary me-2">📄 Full Profile</button>
                  <button className="btn btn-outline-success">📞 Contact</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div
              className="card border-0 shadow-sm"
              style={{ background: "linear-gradient(135deg, #FF9933 0%, #138808 100%)" }}
            >
              <div className="card-body text-center text-white p-5">
                <h3 className="fw-bold mb-3">🗳️ Voting Guidelines</h3>
                <h5 className="mb-4">Voting Guidelines</h5>
                <div className="row g-4">
                  <div className="col-md-3">
                    <div className="text-center">
                      <div style={{ fontSize: "3rem" }}>📋</div>
                      <h6 className="mt-2">Check Voter List</h6>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div style={{ fontSize: "3rem" }}>🆔</div>
                      <h6 className="mt-2">Bring Valid ID</h6>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div style={{ fontSize: "3rem" }}>🕐</div>
                      <h6 className="mt-2">Vote on Time</h6>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div style={{ fontSize: "3rem" }}>🤐</div>
                      <h6 className="mt-2">Keep Vote Secret</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}