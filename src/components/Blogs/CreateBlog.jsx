// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from 'react';
import { createPost } from "../Api/postApi.jsx";
import styles from './CreateBlog.module.css';
import { AuthContext } from "../Api/AuthContext.jsx";
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { token, userId } = useContext(AuthContext);
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const newBlog = {
            title,
            content,
            author: userId,
            published: new Date().toISOString()
        };
        await onSaveBlog(newBlog);
    };

    const onSaveBlog = async (blogData) => {
        try {
            await createPost(token, blogData);
            // Redirect or clear the form here upon successful creation
            navigate('/blogs'); // Example redirection after blog creation
        } catch (error) {
            console.error("Failed to save blog:", error);
            alert("Failed to create blog. Please try again."); // Consider a more user-friendly notification
        }
    };

    const onCancel = () => {
        // Clear the form or navigate away
        setTitle('');
        setContent('');
        navigate('/blogs'); // Navigate away on cancel
    };



    return (
        // eslint-disable-next-line no-undef
        <div className={styles.container}>
            <h1>Create a New Post</h1>
            <form onSubmit={submitHandler}>
                <div className={styles.form_group}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.form_group}>
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className={styles.button_container}>
                    <div>
                        <button type="submit">Create Post</button>
                    </div>
                    <div>
                        <button type="submit" onClick={onCancel}>cancel</button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default CreateBlog;
