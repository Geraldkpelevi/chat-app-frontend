import React from "react";
import "./ForgetPassword.css"
// import { Link } from "react-router-dom";

function ForgetPassword() {
    return (
        <div className="fgetPword">

            <form className="fpwdForm">

                <h2>Forget Password</h2>
                <div>
                    <input type="text" placeholder="Email" /> 
                </div>
                <div>
                    <input type="password" placeholder="Password" />   
                </div>
                <div>
                    <input type="password" placeholder="Confirm Password" /> 
                </div>
                <div>
                    <button>Reset Password</button>
                </div>
            </form>    
            
        </div>
    );
}

export default ForgetPassword;