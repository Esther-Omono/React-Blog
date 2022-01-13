import React from "react";
import "./Register.css";
import TopBar from "../../Components/TopBar/TopBar";
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div>
            <TopBar />
            <div className="register">
                <span className="register-title">Registration</span>
                <form className="register-form">
                    <label>Username</label>
                    <input type="text" className="register-input" placeholder="Enter your username" />

                    <label>Email</label>
                    <input type="email" className="register-input" placeholder="Enter your email" />

                    <label>Password</label>
                    <input type="password" className="register-input" placeholder="Enter your password" />

                    <button className="register-btn">Register</button>
                </form>

                <button className="login-btn">
                    <Link className="link" to="/login">Login</Link>
                </button>
            </div>
        </div>
    )
}

export default Register;