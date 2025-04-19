import "./Header.css";
import Logout from "../image/logout.svg";
export default function Header({ handleLogout, accounts }) {
  return (
    <div className="Header">
      <h2>Hi {accounts[0].name}</h2>
      <button onClick={handleLogout}>
        <img src={Logout} alt="Logout" />
      </button>
    </div>
  );
}
