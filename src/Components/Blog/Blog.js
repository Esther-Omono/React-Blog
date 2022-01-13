import React from "react";
import "./Blog.css";
import Post from "../../Components/Post/Post";

function Blog() {
    return (
        <div className="posts">
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Blog;