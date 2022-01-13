import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Write from "./Pages/Write/Write";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/Single/Single";
import Register from "./Pages/Register/Register";



function App() {
    const user = true;

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="write" element={user ? <Write /> : <Register />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={user ? <Home /> : <Login />} />
            <Route path="register" element={user ? <Home /> : <Register />} />
            <Route path="settings" element={user ? <Settings /> : <Register />} />
            <Route path="singlepost/:singlepostId" element={<Single />} />
        </Routes>
    )
}

export default App;