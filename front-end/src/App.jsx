import "./style.css";
import { useMsal } from "@azure/msal-react";
import UserList from "./components/UserList";
import Header from "./components/Header";

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
          <Header handleLogout={handleLogout} accounts={accounts} />
          <UserList />
        </>
      ) : (
        <button onClick={handleLogin}>Login with Azure AD</button>
      )}
    </div>
  );
}
