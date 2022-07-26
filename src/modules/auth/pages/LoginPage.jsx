import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const lastPath = localStorage.getItem("lastPath") || "/";

  const onLogin = () => {
    login("Juan David Garcia");

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <>
      <div className="container mt5">
        <h1>LoginPage</h1>
        <hr />
        <button className="btn btn-primary" onClick={onLogin}>
          Login
        </button>
      </div>
    </>
  );
};
