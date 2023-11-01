// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState, useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getPostById} from '../Api/getPosts.jsx';
import {AuthContext} from "../Api/AuthContext.jsx";
import styles from './Blog.module.css';
const Blog = () => {
    const {token} = useContext(AuthContext);
    const [post, setPost] = useState(null);
    const {id} = useParams(); // Get the id from the URL
    const navigate = useNavigate();


    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await getPostById(token, id);
                setPost(response.data);
            } catch (error) {
                console.error('Failed to fetch post:', error);
            }
        };

        fetchPost();
    }, [token, id]);


    if (!post) {
        return <div>Loading...</div>; // Show a loading message while the post is being fetched
    }

    const handleClick = (postId) => {
        navigate(`/updateblog/${postId}`);
    }

    return (
        <div>
            <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
            <div className={styles.blog_card_footer}>
                <h5>Author: {post.authorName}</h5>
                <h5>Published: {post.publishDate}</h5>
            </div>
            <div>
                <button onClick={() => handleClick(post.id)}>Edit Post</button>
            </div>
        </div>
    );
}
export default Blog;