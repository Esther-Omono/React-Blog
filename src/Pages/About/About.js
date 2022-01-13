import React from 'react';
import "./About.css";
import TopBar from "../../Components/TopBar/TopBar";
import SideBar from '../../Components/SideBar/SideBar';
import Footer from "../../Components/Footer/Footer";

function About() {
    return (
        <div>
            <TopBar />
            <h1>About Page</h1>

            <div className="about-wrapper">
                <div className="about-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum pellentesque arcu.
                    Nullam tincidunt venenatis mi non malesuada. Nam porta elit sit amet lobortis maximus. Nullam eget
                    blandit nibh, eget rhoncus nibh. Sed blandit tellus at lorem bibendum, non vehicula nunc maximus.
                    Donec id sapien lacinia, elementum lorem ac, viverra urna. Proin ligula elit, vulputate a venenatis
                    non, hendrerit non est. Nunc in pretium erat. Aenean vulputate dolor ullamcorper turpis congue,
                    vitae congue libero varius. Phasellus aliquam dui eu suscipit molestie. Suspendisse potenti.
                    Praesent vel diam a tortor mattis dignissim in id urna. Proin fermentum ante sit amet enim mollis,
                    eu laoreet elit euismod. Donec vitae tellus non massa maximus dignissim. Nulla eleifend est condimentum,
                    venenatis felis vitae, tempus neque.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum pellentesque arcu.
                    Nullam tincidunt venenatis mi non malesuada. Nam porta elit sit amet lobortis maximus. Nullam eget
                    blandit nibh, eget rhoncus nibh. Sed blandit tellus at lorem bibendum, non vehicula nunc maximus.
                    Donec id sapien lacinia, elementum lorem ac, viverra urna. Proin ligula elit, vulputate a venenatis
                    non, hendrerit non est. Nunc in pretium erat. Aenean vulputate dolor ullamcorper turpis congue,
                    vitae congue libero varius. Phasellus aliquam dui eu suscipit molestie. Suspendisse potenti.
                    Praesent vel diam a tortor mattis dignissim in id urna. Proin fermentum ante sit amet enim mollis,
                    eu laoreet elit euismod. Donec vitae tellus non massa maximus dignissim. Nulla eleifend est condimentum,
                    venenatis felis vitae, tempus neque.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum pellentesque arcu.
                    Nullam tincidunt venenatis mi non malesuada. Nam porta elit sit amet lobortis maximus. Nullam eget
                    blandit nibh, eget rhoncus nibh. Sed blandit tellus at lorem bibendum, non vehicula nunc maximus.
                    Donec id sapien lacinia, elementum lorem ac, viverra urna. Proin ligula elit, vulputate a venenatis
                    non, hendrerit non est. Nunc in pretium erat. Aenean vulputate dolor ullamcorper turpis congue,
                    vitae congue libero varius. Phasellus aliquam dui eu suscipit molestie. Suspendisse potenti.
                    Praesent vel diam a tortor mattis dignissim in id urna. Proin fermentum ante sit amet enim mollis,
                    eu laoreet elit euismod. Donec vitae tellus non massa maximus dignissim. Nulla eleifend est condimentum,
                    venenatis felis vitae, tempus neque.</p>
                </div>

                <SideBar />
            </div>

            <Footer />
        </div>
    )
}

export default About;