"use client";

import React from "react";

export default function HomePage() {
  return (
    <>
      <style>
        {`
          .nav-link:hover:not(.active) {
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 5px;
          }
          .nav-link {
            transition: all 0.3s ease;
            color: white !important;
          }
          .nav-link.active {
            color: #ffc107 !important;
            font-weight: bold;
          }
          .btn-primary {
            background-color: #FF9933;
            border-color: #FF9933;
          }
          .btn-primary:hover {
            background-color: #e68a00;
            border-color: #e68a00;
          }
          .card-header {
            background-color: #138808;
            color: white;
          }
          .tab-nav {
            background-color: #FF9933;
            border-radius: 5px 5px 0 0;
          }
          .tab-nav .nav-link {
            color: white;
            border: none;
          }
          .tab-nav .nav-link.active {
            background-color: #e68a00;
            color: #ffc107;
          }
          .tab-nav .nav-link:hover:not(.active) {
            background-color: rgba(255, 255, 255, 0.1);
          }
          .tab-content {
            background-color: #f8f9fa;
            border-top: 4px solid #FF9933;
            border-radius: 0 0 5px 5px;
          }
          .tab-content .alert {
            border-left: 4px solid #138808;
            border-radius: 5px;
            margin-bottom: 10px;
          }
          .btn-outline-primary {
            border-color: #FF9933;
            color: #FF9933;
          }
          .btn-outline-primary:hover {
            background-color: #FF9933;
            color: white;
          }
          @media (max-width: 991px) {
            .nav-label-full { display: none; }
            .nav-label-short { display: inline; }
          }
          @media (min-width: 992px) {
            .nav-label-full { display: inline; }
            .nav-label-short { display: none; }
          }
        `}
      </style>

      {/* First Section (Carousel, Election Cards, Photo Grid, Video Grid) */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div
            id="democracyCarousel1"
            className="carousel slide mb-5 shadow-lg rounded"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1599059813008-11265ba4b7ce"
                  className="d-block w-100"
                  alt="People voting in a polling booth"
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                  <h5 className="fw-bold text-white">
                    Every Vote Counts: Shape the Future of Our Nation
                  </h5>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1577122743868-639e8b4e084b"
                  className="d-block w-100"
                  alt="Crowd celebrating democracy"
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                  <h5 className="fw-bold text-white">Democracy Thrives on Participation</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1592982917060-7e2e4b3a2a4b"
                  className="d-block w-100"
                  alt="Election rally"
                  style={{ height: "400px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                  <h5 className="fw-bold text-white">Your Voice Matters: Exercise Your Right</h5>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#democracyCarousel1"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#democracyCarousel1"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div
                className="card h-100 shadow-sm border-0"
                style={{ borderTop: "4px solid #FF9933" }}
              >
                <div className="card-body p-4">
                  <h3 className="card-title fw-bold" style={{ color: "#FF9933" }}>
                    National Election 2025
                  </h3>
                  <p className="text-muted mt-2">Date: December 15, 2025</p>
                  <p className="text-muted">Location: Nationwide</p>
                  <a href="#" className="btn btn-primary mt-4">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="card h-100 shadow-sm border-0"
                style={{ borderTop: "4px solid #138808" }}
              >
                <div className="card-body p-4">
                  <h3 className="card-title fw-bold" style={{ color: "#138808" }}>
                    State Election - Maharashtra
                  </h3>
                  <p className="text-muted mt-2">Date: January 20, 2026</p>
                  <p className="text-muted">Location: Maharashtra</p>
                  <a href="#" className="btn btn-primary mt-4">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="card h-100 shadow-sm border-0"
                style={{ borderTop: "4px solid #FF9933" }}
              >
                <div className="card-body p-4">
                  <h3 className="card-title fw-bold" style={{ color: "#FF9933" }}>
                    Local Election - Delhi
                  </h3>
                  <p className="text-muted mt-2">Date: February 10, 2026</p>
                  <p className="text-muted">Location: Delhi</p>
                  <a href="#" className="btn btn-primary mt-4">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-5">
            <div className="col-lg-4 col-md-6">
              <div
                className="card h-100 shadow-sm border-0"
                style={{ borderTop: "4px solid #FF9933" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1599059813008-11265ba4b7ce"
                  className="card-img-top"
                  alt="People voting in a polling booth"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold" style={{ color: "#FF9933" }}>
                    Voting Booth
                  </h5>
                  <p className="text-muted">Citizens casting their votes.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="card h-100 shadow-sm border-0"
                style={{ borderTop: "4px solid #FF9933" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1577122743868-639e8b4e084b"
                  className="card-img-top"
                  alt="Crowd celebrating democracy"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold" style={{ color: "#FF9933" }}>
                    Democracy Celebration
                  </h5>
                  <p className="text-muted">Community celebrating election results.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="card h-100 shadow-sm border-0"
                style={{ borderTop: "4px solid #FF9933" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1592982917060-7e2e4b3a2a4b"
                  className="card-img-top"
                  alt="Election Rally"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold" style={{ color: "#FF9933" }}>
                    Election Rally
                  </h5>
                  <p className="text-muted">Campaign event in full swing.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mt-5">
            <div className="col-lg-6 col-md-12">
              <div
                className="card h-100 shadow-sm border-0"
                style={{ borderTop: "4px solid #138808" }}
              >
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold" style={{ color: "#138808" }}>
                    Importance of Voting
                  </h5>
                  <iframe
                    className="w-100"
                    style={{ height: "16rem" }}
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Voting Importance Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="card h-100 shadow-sm border-0"
                style={{ borderTop: "4px solid #138808" }}
              >
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold" style={{ color: "#138808" }}>
                    Election Process
                  </h5>
                  <iframe
                    className="w-100"
                    style={{ height: "16rem" }}
                    src="https://www.youtube.com/embed/3AtDnEC4zak"
                    title="Election Process Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <ul className="nav nav-tabs tab-nav" id="tabNav">
            <li className="nav-item">
              <button
                className="nav-link active"
                data-bs-toggle="tab"
                data-bs-target="#current-issues"
              >
                Current Issues
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#press-releases"
              >
                Press Releases
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#instructions"
              >
                Instructions
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#tender-vacancies"
              >
                Tender & Vacancies
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#election-stories"
              >
                Election Stories
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target="#faqs"
              >
                FAQs
              </button>
            </li>
          </ul>
          <div className="tab-content p-3 border border-top-0">
            <div className="tab-pane fade show active" id="current-issues">
              <div className="alert alert-light d-flex align-items-center gap-2 mb-2 shadow-sm" style={{ borderLeft: "4px solid #138808" }}>
                <span role="img" aria-label="check">
                  ✅
                </span>
                <div>
                  <strong style={{ color: "#138808" }}>
                    Commission interacts with a delegation from the AIADMK at Nirvachan Sadan
                  </strong>
                  <div className="text-muted small">Thursday 24 Jul 2025, 5:26 PM</div>
                </div>
              </div>
              <div className="alert alert-light d-flex align-items-center gap-2 mb-2 shadow-sm" style={{ borderLeft: "4px solid #138808" }}>
                <span role="img" aria-label="check">
                  ✅
                </span>
                <div>
                  <strong style={{ color: "#138808" }}>
                    Aim of Bihar SIR: No eligible voter should be left out
                  </strong>
                  <div className="text-muted small">Thursday 24 Jul 2025, 4:39 PM</div>
                </div>
              </div>
              <div className="alert alert-light d-flex align-items-center gap-2 mb-2 shadow-sm" style={{ borderLeft: "4px solid #138808" }}>
                <span role="img" aria-label="check">
                  ✅
                </span>
                <div>
                  <strong style={{ color: "#138808" }}>
                    First phase of SIR nearing completion
                  </strong>
                  <div className="text-muted small">Wednesday 23 Jul 2025, 5:14 PM</div>
                </div>
              </div>
              <div className="alert alert-light d-flex align-items-center gap-2 mb-2 shadow-sm" style={{ borderLeft: "4px solid #138808" }}>
                <span role="img" aria-label="check">
                  ✅
                </span>
                <div>
                  <strong style={{ color: "#138808" }}>
                    Commission interacts with Tipra Motha Party
                  </strong>
                  <div className="text-muted small">Wednesday 23 Jul 2025, 2:06 PM</div>
                </div>
              </div>
              <div className="alert alert-light d-flex align-items-center gap-2 mb-2 shadow-sm" style={{ borderLeft: "4px solid #138808" }}>
                <span role="img" aria-label="check">
                  ✅
                </span>
                <div>
                  <strong style={{ color: "#138808" }}>
                    Election to the Office of Vice President of India
                  </strong>
                  <div className="text-muted small">Wednesday 23 Jul 2025, 12:33 PM</div>
                </div>
              </div>
              <div className="text-end mt-3">
                <button className="btn btn-outline-primary btn-sm">View More →</button>
              </div>
            </div>
            <div className="tab-pane fade" id="press-releases">
              <div className="alert alert-light d-flex align-items-center gap-2 mb-2 shadow-sm" style={{ borderLeft: "4px solid #138808" }}>
                <span role="img" aria-label="check">
                  ✅
                </span>
                <div>
                  <strong style={{ color: "#138808" }}>
                    Press release on voter turnout
                  </strong>
                  <div className="text-muted small">Thursday 24 Jul 2025, 3:15 PM</div>
                </div>
              </div>
              <div className="alert alert-light d-flex align-items-center gap-2 mb-2 shadow-sm" style={{ borderLeft: "4px solid #138808" }}>
                <span role="img" aria-label="check">
                  ✅
                </span>
                <div>
                  <strong style={{ color: "#138808" }}>
                    New voting guidelines issued
                  </strong>
                  <div className="text-muted small">Wednesday 23 Jul 2025, 1:45 PM</div>
                </div>
              </div>
              <div className="alert alert-light d-flex align-items-center gap-2 mb-2 shadow-sm" style={{ borderLeft: "4px solid #138808" }}>
                <span role="img" aria-label="check">
                  ✅
                </span>
                <div>
                  <strong style={{ color: "#138808" }}>
                    Update on election security
                  </strong>
                  <div className="text-muted small">Tuesday 22 Jul 2025, 4:30 PM</div>
                </div>
              </div>
              <div className="text-end mt-3">
                <button className="btn btn-outline-primary btn-sm">View More →</button>
              </div>
            </div>
            <div className="tab-pane fade" id="instructions">
              <div className="alert alert-light d-flex align-items-center gap-2 mb-2 shadow-sm" style={{ borderLeft: "4px solid #138808" }}>
                <span role="img" aria-label="check">
                  ✅
                </span>
                <div>
                  <strong style={{ color: "#138808" }}>
                    Guidelines for polling stations
                  </strong>
                  <div className="text-muted small">Thursday 24 Jul 2025, 2:50 PM</div>
                </div>
              </div>
              <div className="alert alert-light d-flex align-items-center gap-2 mb-2 shadow-sm" style={{ borderLeft: "4px solid #138808" }}>
                <span role="img" aria-label="check">
                  ✅
                </span>
                <div>
                  <strong style={{ color: "#138808" }}>
                    Training schedule for volunteers
                  </strong>
                  <div className="text-muted small">Wednesday 23 Jul 2025, 11:20 AM</div>
                </div>
              </div>
              <div className="text-end mt-3">
                <button className="btn btn-outline-primary btn-sm">View More →</button>
              </div>
            </div>
            <div className="tab-pane fade" id="tender-vacancies">
              <div className="alert alert-light d-flex align-items-center gap-2 mb-2 shadow-sm" style={{ borderLeft: "4px solid #138808" }}>
                <span role="img" aria-label="check">
                  ✅
                </span>
                <div>
                  <strong style={{ color: "#138808" }}>
                    Tender for election materials
                  </strong>
                  <div className="text-muted small">Friday 25 Jul 2025, 10:00 AM</div>
                </div>
              </div>
              <div className="alert alert-light d-flex align-items-center gap-2 mb-2 shadow-sm" style={{ borderLeft: "4px solid #138808" }}>
                <span role="img" aria-label="check">
                  ✅
                </span>
                <div>
                  <strong style={{ color: "#138808" }}>
                    Vacancy for election officers
                  </strong>
                  <div className="text-muted small">Thursday 24 Jul 2025, 9:30 AM</div>
                </div>
              </div>
              <div className="text-end mt-3">
                <button className="btn btn-outline-primary btn-sm">View More →</button>
              </div>
            </div>
            <div className="tab-pane fade" id="election-stories">
              <div className="alert alert-light d-flex align-items-center gap-2 mb-2 shadow-sm" style={{ borderLeft: "4px solid #138808" }}>
                <span role="img" aria-label="check">
                  ✅
                </span>
                <div>
                  <strong style={{ color: "#138808" }}>
                    Story of a first-time voter
                  </strong>
                  <div className="text-muted small">Wednesday 23 Jul 2025, 3:00 PM</div>
                </div>
              </div>
              <div className="text-end mt-3">
                <button className="btn btn-outline-primary btn-sm">View More →</button>
              </div>
            </div>
            <div className="tab-pane fade" id="faqs">
              <div className="alert alert-light d-flex align-items-center gap-2 mb-2 shadow-sm" style={{ borderLeft: "4px solid #138808" }}>
                <span role="img" aria-label="check">
                  ✅
                </span>
                <div>
                  <strong style={{ color: "#138808" }}>
                    How to register to vote
                  </strong>
                  <div className="text-muted small">Friday 25 Jul 2025, 9:00 AM</div>
                </div>
              </div>
              <div className="alert alert-light d-flex align-items-center gap-2 mb-2 shadow-sm" style={{ borderLeft: "4px solid #138808" }}>
                <span role="img" aria-label="check">
                  ✅
                </span>
                <div>
                  <strong style={{ color: "#138808" }}>
                    What to bring to the polling booth
                  </strong>
                  <div className="text-muted small">Thursday 24 Jul 2025, 8:45 AM</div>
                </div>
              </div>
              <div className="text-end mt-3">
                <button className="btn btn-outline-primary btn-sm">View More →</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}