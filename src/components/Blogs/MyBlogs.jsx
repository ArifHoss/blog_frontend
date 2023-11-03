// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect, useContext} from 'react';
import {AuthContext} from "../Api/AuthContext.jsx";
import BlogCard from "./BlogCard.jsx";
import {getMyPost} from "../Api/userApi.jsx";
import styles from "./MyBlogs.module.css";
import {useNavigate} from "react-router-dom";

const MyBlogs = () => {
    const {token, userId} = useContext(AuthContext);
    const [posts, setMyPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchMyPosts = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await getMyPost(token, userId);
                setMyPosts(response.data);
            } catch (error) {
                console.log(error);
                setError("FAILED_TO_LOAD_POSTS")
            } finally {
                setIsLoading(false);
            }
        };

        if (userId) {
            fetchMyPosts();
        }
    }, [token, userId]);

    const handleShowBlogs = (postId) => {
        navigate(`/blog/${postId}`);
    }

    if (isLoading) {
        return (
            <div className={styles.loading}>
                <div className={styles.spinner}></div>
                <p>Loading posts...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.error}>
                <p>Sorry, we could not load the posts. Please try again later.</p>
            </div>
        );
    }


    return (
        <div className={styles.container}>
            <div className={styles.blog_container}>
                <h2>WABI SABI</h2>
                <h4>Embrace imperfection instead of stressing over every little detail.</h4>
                <div className={styles.blog_card}>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <BlogCard
                                key={post.id}
                                post={post}
                                onClick={() => handleShowBlogs(post.id)}
                            />

                        ))
                    ) : (
                        <p>No blog available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};
export default MyBlogs;