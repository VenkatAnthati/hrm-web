import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./JobApply.css";

 const JobApply = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const job = location.state;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    resume: null,
    coverLetter: ""
  });

  if (!job) {
    return <p>No job selected</p>;
  }

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setForm({ ...form, resume: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  return (
    <div className="apply-container">

      {/* Job info section */}
      <div className="job-summary">

        <h2>{job.title}</h2>
        <p>{job.department} • {job.location}</p>
        <p>{job.type} • {job.experience}</p>

      </div>

      {/* Application form */}
      <div className="apply-card">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="input-box"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="input-box"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="input-box"
        />

        <input
          type="file"
          name="resume"
          onChange={handleChange}
          className="input-box"
        />

        <textarea
          name="coverLetter"
          placeholder="Cover Letter (optional)"
          onChange={handleChange}
          className="textarea-box"
        />

        <button className="submit-btn">
          Submit Application
        </button>

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back to Job Detail
        </button>

      </div>

    </div>
  );
}

export default JobApply;