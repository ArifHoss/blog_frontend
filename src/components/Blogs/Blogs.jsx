// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect, useContext} from 'react';
import styles from './Blogs.module.css';
// import {createPost, postApi} from '../Api/postApi.jsx';
import {postApi} from '../Api/postApi.jsx';
// import CreateBlog from "./CreateBlog.jsx";
import {AuthContext} from "../Api/AuthContext.jsx";
import BlogCard from "./BlogCard.jsx";
import {useNavigate} from "react-router-dom";
import {getMyPost} from "../Api/userApi.jsx";

// eslint-disable-next-line react/prop-types
const Blogs = () => {

    const {token, userId} = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    const [myPosts, setMyPosts] = useState([]);
    // const [newBlog, setNewBlog] = useState(false);
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
        fetchMyPosts();
    }, [token, userId]);

    // const handleBlogSubmit = () => {
    //     setNewBlog(true);
    // }


    const handleShowMyBlog = (postId) => {
        navigate(`/blog/${postId}`);
    }

    // const handleStopBlogSubmit = () => {
    //     setNewBlog(false);
    // }
    //
    // const saveBlog = async (enteredBlogData) => {
    //     try {
    //         const response = await createPost(token, enteredBlogData);
    //         const newBlogData = response.data; // assuming this is the format
    //
    //         setPosts(prevPosts => [newBlogData, ...prevPosts]);
    //
    //         if (newBlogData.userId === userId) { // Check if the new blog belongs to the current user
    //             setMyPosts(prevMyPosts => [newBlogData, ...prevMyPosts]);
    //         }
    //         await fetchMyPosts();
    //         setNewBlog(false);
    //         alert("Blog created successfully!"); // Consider using a more elegant notification method
    //     } catch (error) {
    //         console.error("Failed to save blog:", error);
    //         alert("Failed to create blog. Please try again."); // Consider using a more elegant notification method
    //     }
    // }
    //



    return (
        <div className={styles.container}>
            {/*<div className={styles.blog_container}>*/}
            {/*    {!newBlog && <button onClick={handleBlogSubmit}>Create Blog</button>}*/}
            {/*    {newBlog && <CreateBlog onCancel={handleStopBlogSubmit} onSaveBlog={saveBlog}/>}*/}
            {/*</div>*/}
            <div className={styles.blog_container}>

                {/*if author == token user*/}
                <h1>My Blogs</h1>
                <div className={styles.blog_card}>
                    {myPosts.map((post) => ( // was myPosts
                        <BlogCard
                            key={post.id}
                            post={post}
                            onClick={() => handleShowMyBlog(post.id)}/>
                    ))}
                </div>
                <h1>All Blog</h1>
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
