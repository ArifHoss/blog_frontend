// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect, useContext} from 'react';
import {AuthContext} from "../Api/AuthContext.jsx";
import BlogCard from "./BlogCard.jsx";
import {getMyPost} from "../Api/userApi.jsx";
import styles from "./MyBlogs.module.css";
import {useNavigate} from "react-router-dom";

const MyBlogs = () => {
    const {token, userId} = useContext(AuthContext);
    const [myPosts, setMyPosts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchMyPosts = async () => {
            try {
                const response = await getMyPost(token, userId);
                setMyPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        if (userId) {
            fetchMyPosts();
        }
    }, [token, userId]);

    const handleShowBlogs = (postId) => {
        navigate(`/blog/${postId}`);
    }

    return (
        <div className={styles.container}>
            <div className={styles.blog_container}>
                <h2>WABI SABI</h2>
                <h4>Embrace imperfection instead of stressing over every little detail.</h4>
                <div className={styles.blog_card}>
                    {myPosts.map((post) => (
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
export default MyBlogs;