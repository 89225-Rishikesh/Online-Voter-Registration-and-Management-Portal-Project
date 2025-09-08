
"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import VoterRegistration from "./components/VoterRegistration_";
import SearchVoterList from "./components/VoterList";
import LodgeComplaint from "./components/ComplaintRegistration";
import VolunteerPortal from "./components/VolunteerPortal";
import VoterEducation from "./components/VoterEducation";
import CandidateInfo from "./components/candidate-info";
import UpcomingElections from "./components/UpcomingElections";
import VoterHistory from "./components/voter-history";
import VolunteerLogin from "./components/VolunteerLogin";
import UserAuth from "./components/UserAuth";
import Footer from "./components/Footer";
import AdminDashboard from "./admin/AdminDashboard"; // Added import

export default function VoterPortal() {
  const [activeSection, setActiveSection] = useState("home");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('user');
    if (saved) {
      try { setUser(JSON.parse(saved)); } catch(e) { console.warn('Failed to parse saved user'); }
    }
  }, []);

  const renderSection = () => {
    // If admin section is active and user is not logged in or not admin, show login
    if (activeSection === "admin" && (!user || user.role.toUpperCase() !== "ADMIN")) {
      return <UserAuth setUser={setUser} type="admin" setActiveSection={setActiveSection} />;
    }

    // If admin section is active and user is logged in as admin, show admin dashboard
    if (activeSection === "admin" && user && user.role.toUpperCase() === "ADMIN") {
      return <AdminDashboard adminUser={user} />;
    }

    // Regular user sections
    switch (activeSection) {
      case "register-voter":
        return user ? <VoterRegistration user={user} /> : <UserAuth setUser={setUser} type="voter" setActiveSection={setActiveSection} />;
      case "search-voter":
        return <SearchVoterList />;
      case "lodge-complaint":
        return <LodgeComplaint />;
      case "volunteer-portal":
        return user ? <VolunteerPortal user={user} /> : <UserAuth setUser={setUser} type="volunteer" setActiveSection={setActiveSection} />;
      case "voter-education":
        return <VoterEducation />;
      case "candidates":
        return <CandidateInfo />;
      case "upcoming-elections":
        return <UpcomingElections />;
      case "voter-history":
        return <VoterHistory />;
      case "volunteer-login":
        return <VolunteerLogin />;
      default:
        return <HomePage setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Fixed Navbar at Top */}
      <div className="sticky-top">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} user={user} setUser={setUser} />
      </div>

      {/* Main Content */}
      <main className="flex-grow-1">{renderSection()}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
