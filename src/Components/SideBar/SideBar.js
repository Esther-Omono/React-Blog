import React from "react";
import "./SideBar.css";
import avatar1 from "../../Images/avatar1.png";

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-title">ABOUT ME</span>
                <img src={avatar1} alt="" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum
                    pellentesque arcu.
                </p>
            </div>

            <div className="sidebar-item">
                <span className="sidebar-title">CATEGORIES</span>
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">Lifestyle</li>
                    <li className="sidebar-list-item">Entertainment</li>
                    <li className="sidebar-list-item">Tech</li>
                    <li className="sidebar-list-item">Food</li>
                    <li className="sidebar-list-item">Health</li>
                    <li className="sidebar-list-item">Sports</li>
                </ul>
            </div>

            <div className="sidebar-item">
                <span className="sidebar-title">FOLLOW US</span>
                <div className="sidebar-social">
                    <i className="sidebar-icon fab fa-facebook"></i>
                    <i className="sidebar-icon fab fa-twitter"></i>
                    <i className="sidebar-icon fab fa-instagram"></i>
                    <i className="sidebar-icon fab fa-pinterest"></i>
                </div>
            </div>
        </div>
    )
}

export default SideBar;