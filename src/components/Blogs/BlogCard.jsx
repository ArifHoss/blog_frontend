// BlogCard.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './BlogCard.module.css';

// eslint-disable-next-line react/prop-types
const BlogCard = ({post, onClick}) => (
    // eslint-disable-next-line react/prop-types
    <div key={post.id} className={styles.blog_card} onClick={onClick}>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{post.title}</h3>
        {/* eslint-disable-next-line react/prop-types */}
        <p>{post.content}</p>
        <div className={styles.blog_card_footer}>
            {/* eslint-disable-next-line react/prop-types */}
            <h5>Author: {post.authorName}</h5>
            {/* eslint-disable-next-line react/prop-types */}
            <h5>Published: {post.publishDate}</h5>
        </div>
    </div>
);

export default BlogCard;
