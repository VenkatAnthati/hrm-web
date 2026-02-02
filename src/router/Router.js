import { Route, Routes } from "react-router-dom";
import About from "../component/About/About";
import Home from "../component/Home/Home";
import MainApp from "../component/MainApp/MainApp";
import Login from "../component/Login/Login";
import TalentAcquisition from "../component/TalentAcquisition/TalentAcquisition";
import TrainingAndDevelopment from "../component/TrainingAndDevelopment/TrainingAndDevelopment";
import EmployeeEngagement from "../component/EmployeeEngagement/EmployeeEngagement";
import CompensationAndBenefits from "../component/CompensationAndBenefits/CompensationAndBenefits";
import ExitManagement from "../component/ExitManagement/ExitManagement";
import HealthAndWelfare from "../component/HealthAndWelfare/HealthAndWelfare";
import PayrollAndAttendanceManagement from "../component/PayrollAndAttendanceManagement/PayrollAndAttendanceManagement";
import PerformanceManagement from "../component/PerformanceManagement/PerformanceManagement";
import WorkforceManagement from "../component/WorkforceManagement/WorkforceManagement";
import HROperationsEmployeeRecords from "../component/HROperationsEmployeeRecords/HROperationsEmployeeRecords";
import JobDetail from "../component/TalentAcquisition/JobDetail/JobDetail";
import JobApply from "../component/TalentAcquisition/JobApply/JobApply";
import JobOpenings from "../component/TalentAcquisition/JobOpenings/JobOpenings";
import MainLayout from "./MainLayout";
import LeaveRequest from "../component/PayrollAndAttendanceManagement/Leave/LeaveRequest";
import Attendance from "../component/PayrollAndAttendanceManagement/Attendance/Attendance";
import CreateJob from "../component/TalentAcquisition/CreateJob/CreateJob";

// Menu for normal users
const talentAcquisition = [
    { name: "Home", path: "/job" },
    { name: "Job opening", path: "/job-openings" },
    { name: "Create Job", path: "/Create-job" }
];

// Menu for admin pages
const payrollAndAttendanceManagement = [
    { name: "Apply Leave", path: "/leave" },
    { name: "Attandance", path: "/attendance" }
];

const AppRouter = () => {
    return (
        <Routes >
            <Route path="/home" element={<Home />} />

            <Route path="/" element={<MainApp />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route element={<MainLayout menu={talentAcquisition} />}>
                <Route path="/talent-acquisition" element={<TalentAcquisition />} />
                <Route path="/job-detail" element={<JobDetail />} />
                <Route path="/job-openings" element={<JobOpenings />} />
                <Route path="/apply-job" element={<JobApply />} />
                <Route path="/create-job" element={<CreateJob />} />
            </Route>
            <Route path="/compensation-benefits" element={<CompensationAndBenefits />} />
            <Route path="/employee-enagagement" element={<EmployeeEngagement />} />
            <Route path="/hr-operations" element={<HROperationsEmployeeRecords />} />

            <Route path="/exit-management" element={<ExitManagement />} />
            <Route path="/health-welfare" element={<HealthAndWelfare />} />
            <Route element={<MainLayout menu={payrollAndAttendanceManagement} />}>
                <Route path="/payroll-attendance" element={<PayrollAndAttendanceManagement />} />
                <Route path="/job-detail" element={<JobDetail />} />
                <Route path="/leave" element={<LeaveRequest />} />
                <Route path="/attendance" element={<Attendance />} />
            </Route>
            <Route path="/performance-management" element={<PerformanceManagement />} />
            <Route path="/training-development" element={<TrainingAndDevelopment />} />
            <Route path="/workforce-management" element={<WorkforceManagement />} />
            {/* 404 */}
            <Route path="*" element={<h1>Page Not Found</h1>} />

        </Routes>
    );
};

export default AppRouter;