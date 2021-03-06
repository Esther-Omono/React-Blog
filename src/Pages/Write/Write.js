import React from "react";
import "./Write.css";
import TopBar from "../../Components/TopBar/TopBar";
import Webappdesign from "../../Images/Webappdesign.jpeg";
import Footer from "../../Components/Footer/Footer";

function Write() {
    return (
        <div>
            <TopBar />
            <div className="write">
                <img className="write-img" src={Webappdesign} alt="" />
                <form className="write-form">
                    <div className="write-form-group">
                        <label htmlFor="file-input">
                            <i className="write-icon fas fa-plus"></i>
                        </label>

                        <input 
                            type="file"
                            id="file-input"
                            style={{display:"none"}}
                        />
                        <input 
                            type="text"
                            placeholder="Title"
                            className="write-input"
                            autoFocus={true}
                        />
                    </div>

                    <div className="write-form-group">
                        <textarea placeholder="Tell your story..." type="text" className="write-input write-text"></textarea>
                    </div>

                    <button className="write-submit">Publish</button>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Write;