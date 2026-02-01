import Attendance from "./Attendance/Attendance";
import LeaveRequest from "./Leave/LeaveRequest";
import "./PayrollAndAttendanceManagement.css";
const PayrollAndAttendanceManagement = () => {
  return <div className="payment-container">
  <h1>Payroll And Attendance Management Page</h1>
  <Attendance />
  {/* <LeaveRequest /> */}
  </div >
};

export default PayrollAndAttendanceManagement;