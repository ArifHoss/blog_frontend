// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import {createPost} from "../Api/postApi.jsx";
import './CreateBlog.css';

// eslint-disable-next-line react/prop-types
const CreateBlog = ({token}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const post = {
                title,
                content
            };
            const response = await createPost(token, post);

            setTitle(response.data.title);
            setContent(response.data.content);
            console.log(response.data);
            console.log('Post created successfully!')
        } catch (error) {
            console.log(error);
            console.log('Error creating post. Please try again.')
        }
    };


    return (
        <div className="create-post">
            <h1>Create a New Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default CreateBlog;
