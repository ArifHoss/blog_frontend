// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const BlogCard = ({post, onClick}) => (

    // eslint-disable-next-line react/prop-types
    <div key={post.id} className="blog-card" onClick={onClick}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <div className="blog-card-footer">
            <h5>Author: {post.authorName}</h5>
            <h5>Published: {post.publishDate}</h5>
        </div>
    </div>
);

export default BlogCard;