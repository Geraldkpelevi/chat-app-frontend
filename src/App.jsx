import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import PageNotFound from "./components/page-not-found/PageNotFound.jsx";
import { LoggedInUserDataContext } from "./context/loggedInUserData.js";
import "./index.css";
import ForgetPassword from "./pages/forget-password/ForgetPassword.jsx";
import Home from "./pages/home/Home.jsx";
import Signin from "./pages/sign-in/Signin.jsx";
import Signup from "./pages/sign-up/Signup.jsx";

function App() {
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [isLogin, setIsLogin] = useState(() => {});

  const Login = () => {
    setIsLogin(true);
  };

  const Logout = () => {
    setIsLogin(false);
  };

  return (
    <div>
      <ToastContainer />
      <LoggedInUserDataContext.Provider
        value={{ loggedInUserData, setLoggedInUserData }}
      >
        <Routes>
          <Route
            path="/"
            element={
              isLogin ? <Home logout={Logout} /> : <Signin login={Login} />
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </LoggedInUserDataContext.Provider>
    </div>
  );
}

export default App;
