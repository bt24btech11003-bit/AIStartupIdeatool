import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

import { loginUser } from "../services/authService";
import { AuthContext } from "../context/AuthContext";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = async () => {

        try {

            const response = await loginUser({
                email,
                password
            });

            login(response.data.token);

            navigate("/");

        } catch (error) {

            alert(error.response?.data?.message || "Login Failed");

        }

    };

    return (

        <div className="login-page">
           <div className="login-card">
            <h1 className="login-title">
             AI Startup Validator
           </h1>

<p className="login-subtitle">
    Validate your startup idea using AI-powered experts.
</p>

            <input
    className="login-input"
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
/>

            <br /><br />

            <input
    className="login-input"
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
/>

            <br /><br />

            <button
            className="login-btn"
             onClick={handleLogin}
            > Login</button>

            <p className="signup-link"> Don't have an account?

    <span onClick={() => navigate("/signup")}> Sign Up </span>

</p>
        </div>
        </div>

    );

}

export default Login;