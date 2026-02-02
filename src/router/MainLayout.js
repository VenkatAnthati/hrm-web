import { Outlet } from "react-router-dom";
import SideBar from "../sideBar/sideBar";

const MainLayout = ({menu}) => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar menu={menu} />

      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;