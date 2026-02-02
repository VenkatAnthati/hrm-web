import {  NavLink, useNavigate } from "react-router-dom";
import "./sideBar.css";

const Sidebar = ({ menu }) => {
     const navigate = useNavigate();
    const handleToGoHomePage = () => {
        navigate("/home")
    }

    return (
        <div className="sidebar">
            <h2 className="logo" onClick={handleToGoHomePage}>HR Panel</h2>

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
    );
};

export default Sidebar;
