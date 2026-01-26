import { useNavigate } from "react-router-dom";

const MainApp = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  return <h1>
    <p onClick={handleClick} style={{ color: "blue", cursor: "pointer" }}>
      Welcome to hrm page click here to go home page.
    </p>
  </h1>;
};

export default MainApp;