import classes from "./Navbar.module.css";
import {Link} from "react-router-dom";
import {AuthContext} from "../Api/AuthContext.jsx";
import {useContext} from "react";

// eslint-disable-next-line react/prop-types
const Navbar = () => {

    const {loggedIn, onLogout} = useContext(AuthContext);

    return (
        <nav className={classes.navbar}>
            <div className={classes.leftLinks}>
            </div>

            <div className={classes.title}>
                <h1>The Dojo Blog</h1>
            </div>

            <div className={classes.rightLinks}>
                <ul>
                    {!loggedIn && (
                        <>
                            <li><Link to="/">Login</Link></li>
                        </>
                    )}
                    {loggedIn && (
                        <>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><a href="/" onClick={onLogout}>Logout</a></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

