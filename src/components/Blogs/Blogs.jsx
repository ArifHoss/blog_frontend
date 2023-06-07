// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect, useContext} from 'react';
import styles from './Blogs.module.css';
import {postApi} from '../Api/postApi.jsx';
import CreateBlog from "./CreateBlog.jsx";
import {AuthContext} from "../Api/AuthContext.jsx";
import BlogCard from "./BlogCard.jsx";
import {useNavigate} from "react-router-dom";
import {getMyPost} from "../Api/userApi.jsx";

// eslint-disable-next-line react/prop-types
const Blogs = () => {

    const {token, userId} = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    const [myPosts, setMyPosts] = useState([]);
    const [newBlog, setNewBlog] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await postApi(token);
                console.log(response.data);
                setPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchPosts();
    }, [token]);

    useEffect(() => {
        async function fetchMyPosts() {
            try {
                const response = await getMyPost(token, userId);
                console.log(response.data);
                setMyPosts(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchMyPosts();
    }, [token]);


    const handleBlogSubmit = () => {
        setNewBlog(true);
    }

    const handleBlogClick = (postId) => {
        navigate(`/blog/${postId}`);
    }

    const handleStopBlogSubmit = () => {
        setNewBlog(false);
    }


    const saveBlog = (enteredBlogData) => {
        const blogData = {
            ...enteredBlogData,
            id: Math.random().toString()
        };
        console.log(blogData);
        setPosts((prevPosts) => {
            return [blogData, ...prevPosts];
        });
        setNewBlog(false);
    }

    return (
        <div className={styles.container}>
            <div className={styles.blog_container}>
                {!newBlog && <button onClick={handleBlogSubmit}>Create Blog</button>}
                {newBlog && <CreateBlog onCancel={handleStopBlogSubmit} onSaveBlog={saveBlog}/>}
            </div>
            <div className={styles.blog_container}>

                {/*if author == token user*/}
                <h1>My Blogs</h1>
                <div className={styles.blog_card}>
                    {myPosts.map((post) => (
                        <BlogCard
                            key={post.id}
                            post={post}
                            onClick={() => handleBlogClick(post.id)}/>
                    ))}
                </div>
                <h1>All Blog</h1>
                <div className={styles.blog_card}>
                    {posts.map((post) => (
                        <BlogCard
                            key={post.id}
                            post={post}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
