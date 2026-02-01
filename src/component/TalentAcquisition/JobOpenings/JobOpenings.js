import { useNavigate } from "react-router-dom";
import "./JobOpenings.css";

const JobOpenings = () => {
const navigate = useNavigate();
  const jobs = [
    {
      title: "Software Engineer",
      department: "IT",
      location: "New York",
      type: "Full Time",
      experience: "2-5 years"
    },
    {
      title: "HR Manager",
      department: "HR",
      location: "Los Angeles",
      type: "Full Time",
      experience: "5+ years"
    },
    {
      title: "Financial Analyst",
      department: "Finance",
      location: "San Francisco",
      type: "Full Time",
      experience: "3-6 years"
    },
    {
      title: "Marketing Specialist",
      department: "Marketing",
      location: "San Francisco",
      type: "Full Time",
      experience: "2+ years"
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Seattle",
      type: "Full Time",
      experience: "4-6 years"
    },
    {
      title: "Sales Executive",
      department: "Sales",
      location: "Austin",
      type: "Full Time",
      experience: "3+ years"
    }
  ];

    const openJobDetail = (job) => {
    navigate("/job-detail", { state: job });
  };

  return (
    <div className="jobs-container">

      <h1 className="jobs-title">Job Openings</h1>

      <div className="jobs-grid">

        {jobs.map((job, index) => (
          <div key={index} className="job-card">

            <h2 className="job-title">{job.title}</h2>

            <div className="job-info">
              <p><strong>Department:</strong> {job.department}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <p><strong>Experience:</strong> {job.experience}</p>
            </div>

            <button className="status-btn" 
            onClick={() => openJobDetail(job)}
            >Open</button>

          </div>
        ))}

      </div>

    </div>
  );
}
export default  JobOpenings;