import PropTypes from 'prop-types';
import styles from './BlogCard.module.css';

const BlogCard = ({ post, onClick }) => (
    <div className={styles.blog_card} onClick={onClick}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <div className={styles.blog_card_footer}>
            <h5>Author: {post.authorName}</h5>
            <h5>Published: {post.publishDate}</h5>
        </div>
    </div>
);

// Define prop types
BlogCard.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        authorName: PropTypes.string,
        publishDate: PropTypes.string
    }).isRequired,
    onClick: PropTypes.func.isRequired
};

export default BlogCard;
