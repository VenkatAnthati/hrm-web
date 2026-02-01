import { useState } from "react";
import "./LeaveRequest.css";

const LeaveRequest = () => {

  const [requests, setRequests] = useState([]);

  const [form, setForm] = useState({
    fromDate: "",
    toDate: "",
    leaveType: "",
    reason: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitRequest = () => {
    if (!form.fromDate || !form.toDate || !form.leaveType || !form.reason) return;

    setRequests([...requests, { ...form, id: Date.now(), status: "Pending" }]);

    setForm({
      fromDate: "",
      toDate: "",
      leaveType: "",
      reason: ""
    });
  };

  return (
    <div className="leave-container">

      <h1 className="leave-title">Leave Request</h1>

      {/* Leave Form */}
      <div className="card-box leave-form">

        <input
          type="date"
          name="fromDate"
          value={form.fromDate}
          onChange={handleChange}
          className="input-box"
        />

        <input
          type="date"
          name="toDate"
          value={form.toDate}
          onChange={handleChange}
          className="input-box"
        />

        <select
          name="leaveType"
          value={form.leaveType}
          onChange={handleChange}
          className="input-box"
        >
          <option value="">Select Leave Type</option>
          <option value="Casual Leave">Casual Leave</option>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Earned Leave">Earned Leave</option>
          <option value="Work From Home">Work From Home</option>
        </select>

        <textarea
          name="reason"
          placeholder="Reason for leave"
          value={form.reason}
          onChange={handleChange}
          className="textarea-box"
        />

        <button className="submit-btn" onClick={submitRequest}>
          Submit Request
        </button>

      </div>

      {/* Leave Table */}
      <div className="card-box">

        <table className="leave-table">
          <thead>
            <tr className="table-header">
              <th>From</th>
              <th>To</th>
              <th>Type</th>
              <th>Reason</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            {requests.length === 0 && (
              <tr>
                <td colSpan="5" className="empty-message">
                  No leave requests submitted
                </td>
              </tr>
            )}

            {requests.map((req) => (
              <tr key={req.id} className="table-row">
                <td>{req.fromDate}</td>
                <td>{req.toDate}</td>
                <td>{req.leaveType}</td>
                <td>{req.reason}</td>
                <td>
                  <span className="status pending">{req.status}</span>
                </td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>

    </div>
  );
}

export default LeaveRequest;
