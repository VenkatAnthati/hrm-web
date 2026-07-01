import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleTalentAcquisition = (page) => {
    navigate(page);
  };

  return (
    <div className="hr-container">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">HRM</h2>

        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>

        <div className="nav-buttons">
          <button className="btn-outline">Login</button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <h1>Empowering Your Workforce</h1>
          <p>
            We help organizations streamline recruitment,
            employee management, payroll, and HR operations.
          </p>
        </div>
      </section>

      {/* Modules */}
      <section className="features">

        <div
          className="card"
          onClick={() => handleTalentAcquisition("/talent-acquisition")}
        >
          Talent Acquisition
        </div>

        <div
          className="card"
          onClick={() => handleTalentAcquisition("/hr-operations")}
        >
          HR Operations Employee Records
        </div>

        <div
          className="card"
          onClick={() => handleTalentAcquisition("/payroll-attendance")}
        >
          Payroll & Attendance Management
        </div>

      </section>

    </div>
  );
};

export default Home;