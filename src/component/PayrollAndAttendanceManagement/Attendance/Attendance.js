import { useState } from "react";
import "./Attendance.css";

const Attendance = () => {
    const [entries, setEntries] = useState([]);
    const [form, setForm] = useState({ date: "", project: "", hours: "", note: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const addEntry = () => {
        if (!form.date || !form.project || !form.hours || !form.note) return;

        setEntries([...entries, { ...form, id: Date.now() }]);
        setForm({ date: "", project: "", hours: "", note: "" });
    };

    return (
        <div className="page-container">

            <h1 className="page-title">Employee Timesheet</h1>

            {/* Entry Form */}
            <div className="card-box form-grid">

                <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="input-box"
                />

                <select
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    className="input-box"
                >
                    <option value="">Select Project</option>
                    <option value="Payroll System">Payroll System</option>
                    <option value="Timesheet App">Timesheet App</option>
                    <option value="Customer Portal">Customer Portal</option>
                    <option value="Internal Tools">Internal Tools</option>
                     <option value="Internal Tools">Leave</option>
                </select>

                <input
                    type="number"
                    name="hours"
                    placeholder="Hours Worked"
                    value={form.hours}
                    onChange={handleChange}
                    className="input-box"
                />
                <input
                    type="string"
                    name="note"
                    placeholder="Leave reason/Work detail"
                    value={form.note}
                    onChange={handleChange}
                    className="input-box"
                />

                <button className="add-btn" onClick={addEntry}>
                    Add Entry
                </button>

            </div>

            {/* Table */}
            <div className="card-box">

                <table className="timesheet-table">
                    <thead>
                        <tr className="table-header">
                            <th className="table-cell">Date</th>
                            <th className="table-cell">Project</th>
                            <th className="table-cell">Hours</th>
                            <th className="table-cell">Leave reason/Work detail</th>
                        </tr>
                    </thead>

                    <tbody>

                        {entries.length === 0 && (
                            <tr>
                                <td colSpan="3" className="empty-message">
                                    No timesheet entries yet
                                </td>
                            </tr>
                        )}

                        {entries.map((entry) => (
                            <tr key={entry.id} className="table-row">
                                <td className="padding-small">{entry.date}</td>
                                <td className="padding-small">{entry.project}</td>
                                <td className="padding-small">{entry.hours}</td>
                                <td className="padding-small">{entry.note}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>

            <div className="card-box">
                time sheet history search need to add here
            </div>

        </div>
    );
}

export default Attendance;