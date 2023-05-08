// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import './MyBlog.css';
import {postApi} from '../Api/postApi.jsx';
import CreateBlog from "./CreateBlog.jsx";

// eslint-disable-next-line react/prop-types
const MyBlog = ({token}) => {
    const [posts, setPosts] = useState([]);
    const [newBlog, setNewBlog] = useState(false);


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


    const handleBlogSubmit = () => {
        setNewBlog(true);
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
        <div className="blog_container">
            <div>
                {!newBlog && <button onClick={handleBlogSubmit}>Create Blog</button>}
                {newBlog && <CreateBlog token={token} onCancel={handleStopBlogSubmit} onSaveBlog={saveBlog}/> }
            </div>
            <div className="myblog">
                <h1>My Blog</h1>
                <div className="myblog-container">
                    {posts.map((post) => (
                        <div key={post.id} className="blog-card">
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyBlog;
