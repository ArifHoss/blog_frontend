// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { getPosts } from '../Api/getPosts.jsx';
import BlogCard from "./BlogCard.jsx";
import styles from './Blogs.module.css';

const Blogs = () => {

    const [posts, setPosts] = useState([]);


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


    return (
        <div className={styles.container}>
            <div className={styles.blog_container}>
                <h1>All Blog</h1>
                <p>Ikigai: Discover your purpose in life, find something that makes you wants to make up each day because you purpose fuels you!</p>
                <div className={styles.blog_card}>
                    {posts.map((post) => (
                        <BlogCard
                            key={post.id}
                            post={post}
                        />

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
