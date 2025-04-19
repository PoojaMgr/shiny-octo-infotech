import { useContext } from "react";
import "./Header.css";
import Logout from "../image/logout.svg";
import { AuthContext } from "../App";

export default function Header({ handleLogout }) {
  const auth = useContext(AuthContext);
  console.log(auth, "auth");
  return (
    <div className="Header theme">
      <h2>Hello {auth?.[0].name}</h2>
      <button onClick={handleLogout}>
        <img src={Logout} alt="Logout" />
      </button>
    </div>
  );
}
