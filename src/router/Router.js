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

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainApp />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/talent-acquisition" element={<TalentAcquisition />} />
            <Route path="/compensation-benefits" element={<CompensationAndBenefits />} />
            <Route path="/employee-enagagement" element={<EmployeeEngagement />} />
            <Route path="/hr-operations" element={<HROperationsEmployeeRecords />} />
            <Route path="/exit-management" element={<ExitManagement />} />
            <Route path="/health-welfare" element={<HealthAndWelfare />} />
            <Route path="/payroll-attendance" element={<PayrollAndAttendanceManagement />} />
            <Route path="/performance-management" element={<PerformanceManagement />} />
            <Route path="/training-development" element={<TrainingAndDevelopment />} />
            <Route path="/workforce-management" element={<WorkforceManagement />} />
            {/* 404 */}
            <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    );
};

export default AppRouter;