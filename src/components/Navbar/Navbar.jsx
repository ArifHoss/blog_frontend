import classes from "./Navbar.module.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.leftLinks}>
                <Link to="/">Home</Link>
            </div>

            <div className={classes.title}>
                <h1>The Dojo Blog</h1>
            </div>

            <div className={classes.rightLinks}>
                <ul>
                    <li><Link to="/create">Create Blog</Link></li>
                    <li><Link to="/myblog">My Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

