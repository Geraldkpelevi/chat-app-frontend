import { useRef } from "react";
import {SignUpService} from "./SignUP2.js"

function SignUp2() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const cityRef = useRef(null);
  const genderRef = useRef(null);

  const SignupHandler = () => {
    SignUpService(
      usernameRef,
      emailRef,
      cityRef,
      passwordRef,
      genderRef
    );
  }
  return (
    <div>
      <form action="">
        <div>
          <input onClick={usernameRef}  type="text" placeholder="fullName" />
        </div>
        <div>
          <input onClick={passwordRef}  type="text" placeholder="password" />
        </div>
        <div>
          <input onClick={emailRef} type="text" placeholder="email" />
        </div>
        <div>
          <input onClick={cityRef} type="text" placeholder="city" />
        </div>
        <div>
          <select onClick={genderRef} name="" id="">
            <option value="">Select Gender</option>
            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">Other</option>
          </select>
        </div>

        <div>
          <button onClick={SignupHandler} type="button">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp2;
