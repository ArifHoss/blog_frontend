import classes from "./Navbar.module.css";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({loggedIn,onLogout}) => {

    const handleLogoutClick = (e) => {
        e.preventDefault();
        onLogout();
    };


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
                    <li><Link to="/contact">Contact</Link></li>
                    {!loggedIn && (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                        </>
                    )}
                    {loggedIn && (
                        <>
                            {/*<li><Link to="/create">Create Blog</Link></li>*/}
                            <li><Link to="/myblog">My Blog</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><a href="/" onClick={handleLogoutClick}>Logout</a></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

