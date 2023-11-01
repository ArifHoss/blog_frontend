// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostById, updatePostById } from '../Api/getPosts.jsx';
import { AuthContext } from "../Api/AuthContext.jsx";

const UpdateBlog = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const { id } = useParams(); // Assuming you're passing the post ID in the URL

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await getPostById(token, id);
                setTitle(response.data.title);
                setContent(response.data.content);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };
        fetchPost();
    }, [id, token]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const updatedPost = { title, content };
            const response = await updatePostById(token, updatedPost, id);
            if (response.status === 200) {
                navigate(`/blog/${id}`);
            }
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    return (
        <div>
            <h1>Update Blog</h1>
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Content"
                />
                <button type="submit">Update Post</button>
            </form>
        </div>
    );
};

export default UpdateBlog;
