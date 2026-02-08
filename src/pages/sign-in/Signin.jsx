import { useState, use } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import { SigninServices } from "./Signin.js";
import { LoggedInUserDataContext } from "../../context/loggedInUserData.js";  

function Signin({ login }) {
  const [user, setUser] = useState({ email: "", password: "" });
const { setLoggedInUserData } = use(LoggedInUserDataContext);
  // const navigate = useNavigate();
  const handleEmailControl = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handlePasswordControl = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  return (
    <div className="signin-page">
      <form className="signin-form">
        <h2>Sign-In</h2>
        <div>
          <input
            type="email"
            placeholder="Email"
            onChange={handleEmailControl}
          />
        </div>
        <div className="password">
          <input
            type="password"
            placeholder="Password"
            onChange={handlePasswordControl}
          />
        </div>
        <div>
          <button
            onClick={() => {
              SigninServices(user, login, setLoggedInUserData);
            }}
            type="button"
          >
            Sign In
          </button>
          
        </div>
        <div className="signinlinks">
          <span>
            don't have an account? <Link to="/signup">Sign-Up</Link>
          </span>
          <span>
            <Link to="/forgetpassword" className="fp">
              Forget password?
            </Link>
          </span>
        </div>
        <div></div>
      </form>
    </div>
  );
}

export default Signin;
