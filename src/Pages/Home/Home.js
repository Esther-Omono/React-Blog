import React from "react";
import "./Home.css";
import NavBar from "../../Components/NavBar/NavBar";
import Blog from "../../Components/Blog/Blog";
import SideBar from "../../Components/SideBar/SideBar";
import Footer from "../../Components/Footer/Footer";

function Home() {
    return (
        <div>
            <NavBar />
            <div className="banner">
                <h1 className="title">E<span>s</span>Dit Blog</h1>
                <p className="sub-title">The blog where you get information right at your finger tips!</p>
            </div>

            <div className="home-content">
                <Blog />
                <SideBar />
            </div>
            <Footer />
        </div>
    )
}

export default Home;
