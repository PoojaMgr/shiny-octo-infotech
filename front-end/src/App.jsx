import "./style.css";
import UserList from "./components/UserList";
import { useMsal } from "@azure/msal-react";

export default function App() {
  const { instance, accounts } = useMsal();
  const handleLogin = () => {
    instance.loginRedirect();
  };

  const handleLogout = () => {
    instance.logoutRedirect();
  };
  console.log("accounts", accounts);
  return (
    <div className="App">
      {accounts.length > 0 ? (
        <>
          <h2>Hi {accounts[0].username}</h2>
          <UserList />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login with Azure AD</button>
      )}
    </div>
  );
}
