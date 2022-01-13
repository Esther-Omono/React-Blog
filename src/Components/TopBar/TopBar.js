import React from "react";
import "./TopBar.css";
import avatar1 from "../../Images/avatar1.png";
import { Link } from 'react-router-dom';

function TopBar() {
    const user = true;

    return (
        <header className="top-bar">
            <div className="left-top-bar">
                <Link className="link" to="/">
                    <h1 className="top-bar-logo">E<span>s</span>Dit</h1>
                </Link>
            </div>

            <nav className="center-top-bar">
                <ul className="top-bar-list">
                    <li className="top-bar-list-item">
                        <Link className="link" to="/">HOME</Link>
                    </li>

                    <li className="top-bar-list-item">
                        <Link className="link" to="/about">ABOUT</Link>
                    </li>

                    <li className="top-bar-list-item">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>

                    <li className="top-bar-list-item">
                        <Link className="link" to="/contact">CONTACT</Link>
                    </li>

                    <li className="top-bar-list-item">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </nav>

            <div className="right-top-bar">
                {
                    user ? (
                        <Link to="/settings"><img className="top-bar-img" src={avatar1} alt="" /></Link>
                    ) : (
                        <ul className="top-bar-list">
                            <li className="top-bar-list-item">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>

                            <li className="top-bar-list-item">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="top-bar-search-icon fas fa-search"></i>
            </div>
        </header>
    )
}

export default TopBar;