import { createContext, lazy, Suspense } from "react";
import "./style.css";
import { useMsal } from "@azure/msal-react";
import loaderImg from "./image/loader.svg";
const Header = lazy(() => import("./components/Header"));
const UserList = lazy(() => import("./components/UserList"));

export const AuthContext = createContext();
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
    <AuthContext.Provider value={accounts}>
      <div className="App">
        <Suspense fallback={loaderImg}>
          {accounts.length > 0 ? (
            <>
              <Header handleLogout={handleLogout} />
              <UserList />
            </>
          ) : (
            <div>
              <button onClick={handleLogin}>Login with Azure AD</button>
            </div>
          )}
        </Suspense>
      </div>
    </AuthContext.Provider>
  );
}
