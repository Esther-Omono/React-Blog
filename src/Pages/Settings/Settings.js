import React from 'react';
import "./Settings.css";
import TopBar from "../../Components/TopBar/TopBar";
import SideBar from "../../Components/SideBar/SideBar";
import avatar1 from "../../Images/avatar1.png";
import Footer from "../../Components/Footer/Footer";

function Settings() {
    return (
        <div>
            <TopBar />
            <div className="settings">
                <div className="settings-wrapper">
                    <div className="settings-title">
                        <span className="settings-update-title">Update Your Account</span>
                        <span className="settings-delete-title">Delete Account</span>
                    </div>

                    <form className="settings-form">
                        <label>Profile Picture</label>
                        <div className="settings-pp">
                            <img src={avatar1} alt="" />
                            <label htmlFor="file-input">
                                <i className="settings-pp-icon far fa-user-circle"></i>
                            </label>

                            <input type="file" id="file-input" style={{display: "none"}} />
                        </div>

                        <label>Username</label>
                        <input type="text" placeholder="Esther" />

                        <label>Email</label>
                        <input type="email" placeholder="esther@gmail.com" />

                        <label>Password</label>
                        <input type="password" />

                        <button className="settings-submit">Update</button>
                    </form>
                </div>

                <SideBar />
            </div>
            <Footer />
        </div>
    )
}

export default Settings