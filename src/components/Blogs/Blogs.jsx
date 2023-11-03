import {useState, useEffect} from 'react';
import {getPosts} from '../Api/getPosts.jsx';
import BlogCard from "./BlogCard.jsx";
import styles from './Blogs.module.css';
import {useNavigate} from "react-router-dom";

const Blogs = () => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchPosts = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await getPosts();
            setPosts(response.data);
        } catch (error) {
            console.log(error);
            setError("FAILED_TO_LOAD_POSTS")
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {

        fetchPosts();
    }, []);

    const handleShowBlogs = (postId) => {
        navigate(`/blog/${postId}`);
    }

    if (isLoading) {
        return (
            <div className={styles.loading}>
                <div className={styles.spinner}></div>
                <p>Loading posts...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.error}>
                <p>Sorry, we could not load the posts. Please try again later.</p>
                <button onClick={fetchPosts}>Retry</button>
            </div>
        );
    }


    return (
        <div className={styles.container}>
            <div className={styles.blog_container}>
                <h1>IKIGAI</h1>
                <h4>Discover your purpose in life; find something that makes you want to wake up each day because your
                    purpose fuels you!</h4>
                <div className={styles.blog_card}>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <BlogCard
                                key={post.id}
                                post={post}
                                onClick={() => handleShowBlogs(post.id)}
                            />

                        ))
                    ):(
                        <p>No blog available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
