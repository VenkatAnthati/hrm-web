import { NavLink, useNavigate } from "react-router-dom";
import "./sideBar.css";

const Sidebar = ({ menu }) => {
    const navigate = useNavigate();
    const handleToGoHomePage = () => {
        navigate("/home")
    }

    return (
        <div className="sidebar">

            <div className="sidebar-header">
                <h2 className="logo" onClick={handleToGoHomePage}>
                    HRM
                </h2>
            </div>

            <div className="sidebar-menu">
                {menu.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? "tab active" : "tab"
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </div>

        </div>
    );
};

export default Sidebar;
