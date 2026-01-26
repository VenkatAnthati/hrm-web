import { Navigate, Route, Routes } from "react-router-dom";
import About from "../component/About/About";
import Home from "../component/Home/Home";
import MainApp from "../component/MainApp/MainApp";
import Login from "../component/Login/Login";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<MainApp />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* 404 */}
            <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
    );
};

export default AppRouter;