import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

import { signupUser } from "../services/authService";

function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignup = async () => {

        try {

            await signupUser({
                name,
                email,
                password,
            });

            alert("Signup Successful!");

            navigate("/login");

        } catch (error) {

            alert(error.response?.data?.message || "Signup Failed");

        }

    };

    return (

        <div className="login-page">
          <div className="login-card">

            <h1 className="login-title">
            AI Startup Validator</h1>

<p className="login-subtitle">
    Create your account and start validating startup ideas.
</p>

            <input
    className="login-input"
    type="text"
    placeholder="Full Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
/>

<input
    className="login-input"
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
/>

<input
    className="login-input"
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
/>
            <button
    className="login-btn"
    onClick={handleSignup}
>
    Create Account
</button>

<p className="signup-link"> Already have an account?

    <span onClick={() => navigate("/login")}>
        Login
    </span>

</p>
         </div>
        </div>

    );

}

export default Signup;