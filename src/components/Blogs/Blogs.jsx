// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { getPosts } from '../Api/getPosts.jsx';
import BlogCard from "./BlogCard.jsx";
import styles from './Blogs.module.css';
import {useNavigate} from "react-router-dom";

const Blogs = () => {

    const [posts, setPosts] = useState([]);
    let navigate = useNavigate();


    const fetchPosts = async ()=> {
        try {
            const response = await getPosts();
            console.log(response.data);
            setPosts(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleShowBlogs = (postId) => {
        navigate(`/blog/${postId}`);
    }

    return (
        <div className={styles.container}>
            <div className={styles.blog_container}>
                <h1>IKIGAI</h1>
                <h4>Discover your purpose in life; find something that makes you want to wake up each day because your purpose fuels you!</h4>
                <div className={styles.blog_card}>
                    {posts.map((post) => (
                        <BlogCard
                            key={post.id}
                            post={post}
                            onClick={() => handleShowBlogs(post.id)}
                        />

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
