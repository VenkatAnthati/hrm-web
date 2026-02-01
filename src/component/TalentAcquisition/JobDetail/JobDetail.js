import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./JobDetail.css";

export default function JobDetail() {

  const location = useLocation();
  const navigate = useNavigate();

  const job = location.state;

  const goToApplyPage = () => {
    console.log("apply job clicked")
    navigate("/apply-job", { state: job });
  };

  if (!job) {
    return <p>No job selected</p>;
  }

  return (
    <div className="job-detail-container">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="job-detail-card">

        <h1>{job.title}</h1>

        <div className="detail-info">
          <p><strong>Department:</strong> {job.department}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Type:</strong> {job.type}</p>
          <p><strong>Experience:</strong> {job.experience}</p>
        </div>

        <div className="job-description">
          <h3>Job Description</h3>
          <p>{job.description}</p>
        </div>

        <button className="apply-btn" onClick={goToApplyPage} >Apply Now</button>

      </div>

    </div>
  );
}
