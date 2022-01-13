import React, { useEffect } from 'react';
import "./NavBar.css";
import avatar1 from "../../Images/avatar1.png";
import { Link } from 'react-router-dom';

const NavBar=() => {
    const [scrolled, setScrolled] = React.useState(false);

    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 0) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    })

    let navbarClasses=["top"];
    if(scrolled) {
        navbarClasses.push("scrolled");
    }

    

    const user = true;

    return (
        <header className={navbarClasses.join(" ")}>
            <div className="topLeft">
                <Link className="link" to="/">
                    <h1 className="logo">E<span>s</span>Dit</h1>
                </Link>
            </div>

            <nav className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>

                    <li className="topListItem">
                        <Link className="link" to="/about">ABOUT</Link>
                    </li>

                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>

                    <li className="topListItem">
                        <Link className="link" to="/contact">CONTACT</Link>
                    </li>

                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </nav>

            <div className="topRight">
                {
                    user ? (
                        <Link to="/settings"><img className="top-img" src={avatar1} alt="" /></Link>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>

                            <li className="topListItem">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="top-search-icon fas fa-search"></i>
            </div>
        </header>
    )
}

export default NavBar;