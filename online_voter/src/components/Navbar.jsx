"use client"

export default function Navbar({ activeSection, setActiveSection, user, setUser }) {
  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "register-voter", label: "Register as New Voter", icon: "📝" },
    { id: "search-voter", label: "Search Voter List", icon: "🔍" },
    { id: "lodge-complaint", label: "Lodge Complaint", icon: "📋" },
    { id: "volunteer-portal", label: "Volunteer Portal", icon: "👥" },
    { id: "voter-education", label: "Voter Education", icon: "📚" },
  ]

  const handleLogout = () => {
    setUser(null)
    setActiveSection("home")
  }

  return (
    <nav className="navbar navbar-expand-lg shadow-lg" style={{ backgroundColor: "#FF9933", zIndex: 1050 }}>
      <div className="container-fluid px-4">
        <button
          className="navbar-brand btn btn-link text-white fw-bold fs-3 d-flex align-items-center text-decoration-none border-0 bg-transparent p-0"
          onClick={() => setActiveSection("home")}
          style={{ cursor: "pointer" }}
        >
          <span className="me-2">🇮🇳</span>
          Indian Voter Portal
        </button>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <button
                  className={`nav-link btn btn-link text-decoration-none px-3 py-2 border-0 bg-transparent ${
                    activeSection === item.id ? "text-warning fw-bold" : "text-white"
                  }`}
                  onClick={() => setActiveSection(item.id)}
                  style={{
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    borderRadius: "5px",
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.backgroundColor = "rgba(255,255,255,0.1)"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.backgroundColor = "transparent"
                    }
                  }}
                >
                  <span className="me-1">{item.icon}</span>
                  <span className="d-none d-lg-inline">{item.label}</span>
                  <span className="d-lg-none">{item.label.split(" ")[0]}</span>
                </button>
              </li>
            ))}
            {user && (
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle btn btn-link text-white text-decoration-none border-0 bg-transparent px-3 py-2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ cursor: "pointer" }}
                >
                  👤 {user.username}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <span className="dropdown-item-text">
                      <small className="text-muted">Role: {user.role}</small>
                    </span>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      🚪 Logout
                    </button>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
