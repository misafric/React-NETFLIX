import React from 'react';
import "./SignupScreen.css";

function SignupScreen() {
    return (
        <div className="signupScreen">
            <form>
                <h1>Sign in</h1>
                <input
                placeholder="Email Adress"
                type="email"
                />
                <input
                placeholder="Password"
                type="password"
                />
                <button type="submit">Sign In</button>
                <h4></h4>
            </form>
        </div>
    )
}

export default SignupScreen;
