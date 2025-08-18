export default function Footer() {
  return (
    <footer className="text-white py-4" style={{ backgroundColor: "#138808" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5 className="fw-bold mb-3">🇮🇳 Election Commission of India</h5>
            <p className="small">Ensuring free, fair, and transparent elections across India</p>
          </div>
          <div className="col-md-6">
            <h6 className="fw-bold mb-3">📞 Contact Information</h6>
            <p className="mb-1">
              <strong>Email:</strong> support@voterportal.gov.in
            </p>
            <p className="mb-1">
              <strong>Phone:</strong> 1800-123-4567 (Toll Free)
            </p>
            <p className="mb-1">
              <strong>Address:</strong> Nirvachan Sadan, Ashoka Road, New Delhi
            </p>
          </div>
        </div>
        <hr className="my-4" style={{ borderColor: "rgba(255,255,255,0.3)" }} />
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">© 2025 Election Commission of India. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex justify-content-md-end gap-3">
              <a href="#" className="text-white text-decoration-none">
                Privacy Policy
              </a>
              <a href="#" className="text-white text-decoration-none">
                Terms of Service
              </a>
              <a href="#" className="text-white text-decoration-none">
                Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
