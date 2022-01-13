import React from "react";
import "./Post.css";
import Cybersecurity from "../../Images/Cybersecurity.jpeg";

function Post() {
    return (
        <div className="post">
            <img className="post-img" src={Cybersecurity} alt="" />
            <div className="post-info">
                <div className="post-category">
                    <span className="post-cat">Lifestyle</span>
                    <span className="post-cat">Tech</span>
                </div>

                <span className="post-title">
                    Lorem ipsum dolor sit amet
                </span>

                <hr />

                <span className="post-date">1 hour ago</span>
            </div>

            <div className="post-desc">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                elementum pellentesque arcu. Nullam tincidunt venenatis mi non malesuada.
                Nam porta elit sit amet lobortis maximus. Nullam eget blandit nibh, eget
                rhoncus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                elementum pellentesque arcu. Nullam tincidunt venenatis mi non malesuada.
                Nam porta elit sit amet lobortis maximus. Nullam eget blandit nibh, eget
                rhoncus nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                elementum pellentesque arcu. Nullam tincidunt venenatis mi non malesuada.
                Nam porta elit sit amet lobortis maximus. Nullam eget blandit nibh, eget
                rhoncus nibh.
                </p>
            </div>
        </div>
    )
}

export default Post;