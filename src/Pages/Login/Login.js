import React from "react";
import "./Login.css";
import TopBar from "../../Components/TopBar/TopBar";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <TopBar />
            <div className="login">
                <span className="login-title">Login</span>
                <form className="login-form">
                    <label>Email</label>
                    <input type="email" className="login-input" placeholder="Enter your email..." />

                    <label>Password</label>
                    <input type="password" className="login-input" placeholder="Enter your password..." />

                    <button className="login-button">Login</button>
                </form>

                <button className="register-button">
                    <Link className="link" to="/register">Register</Link>
                </button>
            </div>
        </div>
    )
}

export default Login;