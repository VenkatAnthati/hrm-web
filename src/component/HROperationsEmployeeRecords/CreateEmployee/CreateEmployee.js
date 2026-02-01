import React, { useState } from "react";
import "./CreateEmployee.css";

const CreateEmployee = () => {

    const [employees, setEmployees] = useState([]);

    const [form, setForm] = useState({
        empId: "",
        name: "",
        department: "",
        designation: "",
        email: "",
        salary: "",
        approvestatus: "",
        onbording: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const addEmployee = () => {
        if (
            !form.empId ||
            !form.name ||
            !form.department ||
            !form.designation ||
            !form.email ||
            !form.salary
        ) return;

        setEmployees([...employees, { ...form, id: Date.now(), approvestatus: "Pending", onbording: "no confirmed" }]);

        setForm({
            empId: "",
            name: "",
            department: "",
            designation: "",
            email: "",
            salary: "",
            approvestatus: "",
            onbording: ""
        });
    };

    return (
        <div className="employee-container">

            <h1 className="employee-title">Create Employee</h1>

            {/* Employee Form */}
            <div className="card-box employee-form">

                <input
                    type="text"
                    name="empId"
                    placeholder="Employee ID"
                    value={form.empId}
                    onChange={handleChange}
                    className="input-box"
                />

                <input
                    type="text"
                    name="name"
                    placeholder="Employee Name"
                    value={form.name}
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
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="IT">IT</option>
                    <option value="Operations">Operations</option>
                </select>

                <input
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    value={form.designation}
                    onChange={handleChange}
                    className="input-box"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className="input-box"
                />

                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    value={form.salary}
                    onChange={handleChange}
                    className="input-box"
                />

                <button className="save-btn" onClick={addEmployee}>
                    Save Employee
                </button>

            </div>

            {/* Employee Table */}
            <div className="card-box">

                <table className="employee-table">
                    <thead>
                        <tr className="table-header">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Approval Atatus</th>
                            <th>Onboarding</th>
                        </tr>
                    </thead>

                    <tbody>

                        {employees.length === 0 && (
                            <tr>
                                <td colSpan="6" className="empty-message">
                                    No employees added yet
                                </td>
                            </tr>
                        )}

                        {employees.map((emp) => (
                            <tr key={emp.id} className="table-row">
                                <td>{emp.empId}</td>
                                <td>{emp.name}</td>
                                <td>{emp.department}</td>
                                <td>{emp.designation}</td>
                                <td>{emp.email}</td>
                                <td>{emp.salary}</td>
                                <td>
                                    <span className="emp-statue">{emp.approvestatus}</span>
                                </td>
                                <td>{emp.onbording}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>

            <div className="empList-container">
                employee list table need to add
            </div>

        </div>
    );
}

export default CreateEmployee;