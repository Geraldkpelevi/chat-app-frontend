import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { createAccount } from "./Signup.js";

function Signup() {
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const genderRef = useRef(null);
  const cityRef = useRef(null);

  const accessUserData = () => {
    createAccount(
      usernameRef,
      passwordRef,
      emailRef,
      genderRef,
      cityRef,
      navigate
    );
  };

  return (
    <div className="signupPage">
      <form className="signup-form">
        <h2>Sign Up</h2>
        <div>
          <input ref={usernameRef} type="text" placeholder="enter FullName" />
        </div>
        <div>
          <input ref={passwordRef} type="password" placeholder="Password" />
        </div>
        <div>
          <input ref={emailRef} type="email" placeholder="email" />
        </div>
        <div>
          <input ref={cityRef} type="text" placeholder="city" />
        </div>
        <div>
          <select className="gender" name="" id="" ref={genderRef}>
            <option>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <button onClick={accessUserData} type="button">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
