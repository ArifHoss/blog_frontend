// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect, useContext} from 'react';
import styles from './Blogs.module.css';
import {getPosts} from '../Api/getPosts.jsx';
import {AuthContext} from "../Api/AuthContext.jsx";
import BlogCard from "./BlogCard.jsx";
import {useNavigate} from "react-router-dom";
import {getMyPost} from "../Api/userApi.jsx";

// eslint-disable-next-line react/prop-types
const Blogs = () => {

    const {token, userId} = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    const [myPosts, setMyPosts] = useState([]);
    const navigate = useNavigate();


    const fetchMyPosts = async () => {
        try {
            const response = await getMyPost(token, userId);
            console.log(response.data);
            setMyPosts(response.data);
        } catch (error) {
            console.log(error);
        }
    }

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


    useEffect(() => {
        console.log("Current User ID:", userId);
        if (userId) {
            fetchMyPosts();
        }
    }, [token, userId]);


    const handleShowMyBlog = (postId) => {
        navigate(`/blog/${postId}`);
    }


    return (
        <div className={styles.container}>
            <div className={styles.blog_container}>

                <h1>My Blogs</h1>
                <p>Wabi Sabi: Embrace imperfection instead of stressing over every little detail. Taking action is better than waiting for perfection because it is often unattainable!</p>
                <div className={styles.blog_card}>
                    {myPosts.map((post) => (
                        <BlogCard
                            key={post.id}
                            post={post}
                            onClick={() => handleShowMyBlog(post.id)}/>
                    ))}
                </div>
                <h1>All Blog</h1>
                <p>Ikigai: Discover your purpose in life, find something that makes you wants to make up each day because you purpose fuels you!</p>
                <div className={styles.blog_card}>
                    {posts.map((post) => (
                        <BlogCard
                            key={post.id}
                            post={post}
                            onClick={() => handleShowMyBlog(post.id)}
                        />

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
