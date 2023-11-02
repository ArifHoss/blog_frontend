// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState, useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {getPostById} from '../Api/getPosts.jsx';
import {AuthContext} from "../Api/AuthContext.jsx";
import styles from './Blog.module.css';
const Blog = () => {
    const {userId} = useContext(AuthContext);
    const [post, setPost] = useState(null);
    const {id} = useParams(); // Get the id from the URL
    const navigate = useNavigate();


    useEffect(() => {
        const fetchPostById = async () => {
            try {
                const response = await getPostById(id);
                setPost(response.data);
            } catch (error) {
                console.error('Failed to fetch post:', error);
            }
        };

        fetchPostById();
    }, [id]);


    if (!post) {
        return <div>Loading...</div>;
    }

    const isAuthor = userId === post.author;
    const handleClick = () => {
        navigate(`/updateblog/${post.id}`);
    }

    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.content}>{post.content}</p>
            </div>
            <div className={styles.blog_card_footer}>
                <h5 className={styles.author}>Author: {post.authorName}</h5>
                <h5 className={styles.published}>Published: {post.publishDate}</h5>
            </div>
            <div>
                {isAuthor && <button
                    className={styles.editButton}
                    onClick={() => handleClick(post.id)}
                >Edit Post</button>}
            </div>
        </div>
    );
}
export default Blog;