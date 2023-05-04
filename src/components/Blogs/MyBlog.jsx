// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './MyBlog.css';
import { getAllPost } from '../Api/getAllPost.jsx';

// eslint-disable-next-line react/prop-types
const MyBlog = ({ token }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await getAllPost(token);
                console.log(response.data);
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchPosts();
    }, [token]);

    return (
        <div className="myblog">
            <h1>My Blog</h1>
            <div className="blog-container">
                {posts.map((post) => (
                    <div key={post.id} className="blog-card">
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBlog;
