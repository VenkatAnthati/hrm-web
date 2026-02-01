import React, { useState } from "react";
import "./JobPosting.css";

const JobPosting = () => {

  const [jobs, setJobs] = useState([]);

  const [form, setForm] = useState({
    title: "",
    department: "",
    location: "",
    type: "",
    experience: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const postJob = () => {
    if (
      !form.title ||
      !form.department ||
      !form.location ||
      !form.type ||
      !form.experience ||
      !form.description
    ) return;

    setJobs([...jobs, { ...form, id: Date.now(), status: "Open" }]);

    setForm({
      title: "",
      department: "",
      location: "",
      type: "",
      experience: "",
      description: ""
    });
  };

  return (
    <div className="job-container">

      <h1 className="job-title">Job Posting</h1>

      {/* Job Form */}
      <div className="card-box job-form">

        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={form.title}
          onChange={handleChange}
          className="input-box"
        />

        <select
          name="department"
          value={form.department}
          onChange={handleChange}
          className="input-box"
        >
          <option value="">Select Department</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Operations">Operations</option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="input-box"
        />

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="input-box"
        >
          <option value="">Job Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>

        <input
          type="text"
          name="experience"
          placeholder="Experience (e.g. 2-5 years)"
          value={form.experience}
          onChange={handleChange}
          className="input-box"
        />

        <textarea
          name="description"
          placeholder="Job Description"
          value={form.description}
          onChange={handleChange}
          className="textarea-box"
        />

        <button className="post-btn" onClick={postJob}>
          Post Job
        </button>

      </div>

      {/* Jobs Table */}
      <div className="card-box">

        <table className="job-table">
          <thead>
            <tr className="table-header">
              <th>Title</th>
              <th>Department</th>
              <th>Location</th>
              <th>Type</th>
              <th>Experience</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {jobs.length === 0 && (
              <tr>
                <td colSpan="6" className="empty-message">
                  No jobs posted yet
                </td>
              </tr>
            )}

            {jobs.map((job) => (
              <tr key={job.id} className="table-row">
                <td>{job.title}</td>
                <td>{job.department}</td>
                <td>{job.location}</td>
                <td>{job.type}</td>
                <td>{job.experience}</td>
                <td>
                  <span className="status open">{job.status}</span>
                </td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>

    </div>
  );
}

export default JobPosting;