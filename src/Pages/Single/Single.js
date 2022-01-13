import React from "react";
import "./Single.css";
import TopBar from "../../Components/TopBar/TopBar";
import SideBar from "../../Components/SideBar/SideBar";
import SinglePost from "../../Components/SinglePost/SinglePost";
import Footer from "../../Components/Footer/Footer";

function Single() {
    return (
        <div>
            <TopBar />
            <div className="single">
                <SinglePost />
                <SideBar />
            </div>
            <Footer />
        </div>
    )
}

export default Single;