// // eslint-disable-next-line no-unused-vars
// import React, {useEffect, useState} from 'react';
// import {createPost} from "../Api/postApi.jsx";
// import './CreateBlog.css';
//
//
// // eslint-disable-next-line react/prop-types
// const CreateBlog = ({token, onCancel, onSaveBlog}) => {
//     const [title, setTitle] = useState('');
//     const [content, setContent] = useState('');
//     const [userId, setUserId] = useState(0);
//
//     useEffect(() => {
//         // console.log(user);
//         const user = JSON.parse(localStorage.getItem('user'));
//         setUserId(user.id);
//         console.log(user.id);
//     }, [])
//
//     useEffect(() => {
//         console.log(userId);
//     }, [userId]);
//
//     const submitHandler = async (e) => {
//         e.preventDefault();
//
//         try {
//             const post = {
//                 title,
//                 content,
//                 author: userId
//             };
//             const response = await createPost(token, post);
//
//             setTitle(response.data.title);
//             setContent(response.data.content);
//             onSaveBlog(response.data);
//             // console.log(response.author);
//             // console.log(userId);
//             console.log(response.data);
//             console.log('Post created successfully!')
//         } catch (error) {
//             console.log(error);
//             console.log('Error creating post. Please try again.')
//         }
//     };


// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState, useContext} from 'react';
import {createPost} from "../Api/postApi.jsx";
import './CreateBlog.css';
import {AuthContext} from "../Api/AuthContext.jsx";

// eslint-disable-next-line react/prop-types
const CreateBlog = ({onCancel, onSaveBlog}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { token, user, userId } = useContext(AuthContext);

    useEffect(() => {
        console.log(userId);
    }, [user]) // user is a dependency now, to re-run the effect when user changes

    useEffect(() => {
        console.log(userId);
    }, [userId]);

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const post = {
                title,
                content,
                author: userId
            };
            const response = await createPost(token, post);

            setTitle(response.data.title);
            setContent(response.data.content);
            onSaveBlog(response.data);
            // console.log(response.author);
            // console.log(userId);
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
            <form onSubmit={submitHandler}>
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
                <div className="button_container">
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
