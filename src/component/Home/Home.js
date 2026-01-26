import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleTalentAcquisition =(page) => {
    navigate(page)
  }
  return (
    <div className="hr-container">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">HRM</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <div>
          <button className="btn-outline">Login</button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Empowering Your Workforce</h1>
          <p>We help you build a thriving and productive team.</p>
          <div>
            <button className="btn-primary">Get Started</button>
            <button className="btn-link">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="card" onClick={() => handleTalentAcquisition("/talent-acquisition")}>Talent Acquisition</div>
        {/* <div className="card" onClick={() => handleTalentAcquisition("/employee-engagement")}>Employee Engagement</div> */}
        <div className="card" onClick={() => handleTalentAcquisition("/training-development")}>Training & Development</div>
        <div className="card" onClick={() => handleTalentAcquisition("/performance-management")}>Performance Management</div>
        <div className="card" onClick={() => handleTalentAcquisition("/compensation-benefits")}>Compensation & Benefits</div>
        <div className="card" onClick={() => handleTalentAcquisition("/hr-operations")}>HR Operations Employee Records</div>
        <div className="card" onClick={() => handleTalentAcquisition("/workforce-management")}>Workforce Management</div>
        <div className="card" onClick={() => handleTalentAcquisition("/payroll-attendance")}>Payroll & Attendance Management</div>
        <div className="card" onClick={() => handleTalentAcquisition("/health-welfare")}>Employee Health & Welfare</div>
        <div className="card" onClick={() => handleTalentAcquisition("/exit-management")}>Exit Management</div>
      </section>

      {/* Contact Section */}
      {/* <section className="contact">
        <h2>Get in Touch</h2> */}

        {/* <div className="contact-grid">
          <div className="card">
            <h4>Contact Us</h4>
            <p>hr@company.com</p>
            <p>+102-6867924</p>
          </div>

          <div className="card">
            <h4>Book a Consultation</h4>
            <button className="btn-primary">Schedule a Call</button>
          </div>

          <div className="card">
            <h4>Join Newsletter</h4>
            <button className="btn-secondary">Subscribe</button>
          </div>
        </div> */}
      {/* </section> */}

      {/* Footer */}
    </div>
  );
};

export default Home;
