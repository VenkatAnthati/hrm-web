import { Outlet } from "react-router-dom";
import  "./MainLayout.css";
import SideBar from "../sideBar/sideBar";

const MainLayout = ({ menu }) => {
  return (
    <div className="app-layout">
      <SideBar menu={menu} />

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;