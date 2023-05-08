// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import './MyBlog.css';
import {postApi} from '../Api/postApi.jsx';
import CreateBlog from "./CreateBlog.jsx";

// eslint-disable-next-line react/prop-types
const MyBlog = ({token}) => {
    const [posts, setPosts] = useState([]);
    const [newBlog, setNewBlog] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setNewBlog(true);
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

    return (
        <div className="blog_container">
            <div>
                <button type="submit" onClick={handleSubmit}>Add New Blog</button>
                {/*<h1>Create Blog</h1>*/}
                {/*<CreateBlog token={token}/>*/}
                {newBlog && <CreateBlog token={token}/> }
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
