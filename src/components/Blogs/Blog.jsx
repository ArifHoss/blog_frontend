// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {getPostById} from '../Api/postApi.jsx';
import {AuthContext} from "../Api/AuthContext.jsx";

const Blog = () => {
    const {token} = useContext(AuthContext);
    const [post, setPost] = useState(null);
    const {id} = useParams(); // Get the id from the URL

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

    return (
        <div>
            <div>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
            <div className="blog-card-footer">
                <h5>Author: {post.authorName}</h5>
                <h5>Published: {post.publishDate}</h5>
            </div>
            <div>
                <button>Edit Post</button>
            </div>
        </div>
    );
}
export default Blog;