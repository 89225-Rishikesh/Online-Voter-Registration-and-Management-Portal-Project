export default function UpcomingElections() {
  const elections = [
    {
      title: "National Election 2025",
      date: "December 15, 2025",
      location: "Nationwide",
      icon: "🏛️",
    },
    {
      title: "State Election - Maharashtra",
      date: "January 20, 2026",
      location: "Maharashtra",
      icon: "🏢",
    },
    {
      title: "Local Election - Delhi",
      date: "February 10, 2026",
      location: "Delhi",
      icon: "🏘️",
    },
  ];

  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#f8f9fa", backgroundImage: "linear-gradient(135deg, #fff 0%, #f1f8e9 100%)" }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#138808" }}>
            Upcoming Elections
          </h2>
          <p className="lead text-muted">Upcoming Elections</p>
          <div
            className="mx-auto"
            style={{ width: "100px", height: "4px", backgroundColor: "#FF9933", borderRadius: "2px" }}
          ></div>
        </div>

        <div className="row g-4">
          {elections.map((election, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="card h-100 shadow-sm border-0" style={{ borderTop: "4px solid #FF9933" }}>
                <div className="card-body text-center">
                  <div className="mb-3" style={{ fontSize: "3rem" }}>
                    {election.icon}
                  </div>
                  <h5 className="card-title fw-bold" style={{ color: "#138808" }}>
                    {election.title}
                  </h5>
                  <p className="card-text">
                    <strong>📅 Date:</strong> {election.date}
                    <br />
                    <strong>📍 Location:</strong> {election.location}
                  </p>
                  <button className="btn btn-outline-primary">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
