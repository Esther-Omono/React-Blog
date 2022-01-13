import React from "react";
import "./SinglePost.css"
import Networking from "../../Images/Networking.jpeg";

function SinglePost() {
    return (
        <div className="single-post">
            <div className="single-post-wrapper">
                <img className="single-post-img" src={Networking} alt="" />

                <h1 className="single-post-title">
                    Lorem ipsum dolor sit amet
                    <div className="single-post-edit">
                        <i className="single-post-icon far fa-edit"></i>
                        <i className="single-post-icon far fa-trash-alt"></i>
                    </div>
                </h1>

                <div className="single-post-info">
                    <span className="single-post-author">Author: <b>Esther</b></span>
                    <span className="single-post-date">1 hour ago</span>
                </div>

                <p className="single-post-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    elementum pellentesque arcu. Nullam tincidunt venenatis mi non malesuada.
                    Nam porta elit sit amet lobortis maximus. Nullam eget blandit nibh, eget
                    rhoncus nibh. Sed blandit tellus at lorem bibendum, non vehicula nunc 
                    maximus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    elementum pellentesque arcu. Nullam tincidunt venenatis mi non malesuada.
                    Nam porta elit sit amet lobortis maximus. Nullam eget blandit nibh, eget
                    rhoncus nibh. Sed blandit tellus at lorem bibendum, non vehicula nunc 
                    maximus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    elementum pellentesque arcu. Nullam tincidunt venenatis mi non malesuada.
                    Nam porta elit sit amet lobortis maximus. Nullam eget blandit nibh, eget
                    rhoncus nibh. Sed blandit tellus at lorem bibendum, non vehicula nunc 
                    maximus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    elementum pellentesque arcu. Nullam tincidunt venenatis mi non malesuada.
                    Nam porta elit sit amet lobortis maximus. Nullam eget blandit nibh, eget
                    rhoncus nibh. Sed blandit tellus at lorem bibendum, non vehicula nunc 
                    maximus.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    elementum pellentesque arcu. Nullam tincidunt venenatis mi non malesuada.
                    Nam porta elit sit amet lobortis maximus. Nullam eget blandit nibh, eget
                    rhoncus nibh. Sed blandit tellus at lorem bibendum, non vehicula nunc 
                    maximus.
                </p>
            </div>

        </div>
    )
}

export default SinglePost;