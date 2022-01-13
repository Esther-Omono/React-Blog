import React from 'react';
import "./Contact.css";
import TopBar from "../../Components/TopBar/TopBar";
import SideBar from '../../Components/SideBar/SideBar';
import Footer from "../../Components/Footer/Footer";


function Contact() {
    return (
        <div>
            <TopBar />

            <div className="content-wrapper">
                <div className="contact-content">
                    <h1>You can communicate with us via the following channels!</h1>

                    <div className="contact-content">
                        <h3>Fill in the form to proceed via email:</h3>

                        <form className="contact-form">
                            <label>Name</label>
                            <input type="text" placeholder="Esther" />

                            <label>Email</label>
                            <input type="email" placeholder="esther@gmail.com" />

                            <label>Message</label>
                            <textarea placeholder="Message..."></textarea>

                            <button className="contact-submit">Submit</button>
                        </form>
                    </div>
                </div>

                <SideBar />
            </div>

            <Footer />
        </div>
    )

}

export default Contact;