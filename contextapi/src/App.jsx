import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
function App() {
  return (
    <>
      <UserContextProvider>
        <div className="flex items-center flex-col h-screen bg-slate-400 justify-center">
          <Login />
          <Profile />
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;
