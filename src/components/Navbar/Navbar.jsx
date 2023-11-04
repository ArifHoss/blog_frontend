import classes from "./Navbar.module.css";
import {Link} from "react-router-dom";
import {AuthContext} from "../Api/AuthContext.jsx";
import {useContext} from "react";
import Logout from "../LoginLogout/Logout.jsx";

// eslint-disable-next-line react/prop-types
const Navbar = () => {

    const {user,loggedIn} = useContext(AuthContext);
    let parsedUser = null;

    // Check if user is a valid JSON string before parsing
    if (user && typeof user === 'string' && user.trim().length > 0) {
        try {
            parsedUser = JSON.parse(user);
        } catch (error) {
            console.error("Error parsing user data:", error);
            // Handle error or set a default value for parsedUser if necessary
        }
    }


    return (
        <nav className={classes.navbar}>
            <div className={classes.leftLinks}>
            </div>

            <div className={classes.title}>
                <h2>:( WABI SABI :)</h2>
                <input type="text" placeholder="Sök efter author, kategori eller artikel" className={classes.searchInput} />
            </div>

            <div className={classes.rightLinks}>
                <ul>
                    {!loggedIn && (
                        <>
                            <li><Link to="/">Blogs</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    )}
                    {loggedIn && (
                        <>
                            <li><Link to="/create">+Create</Link></li>
                            <li><Link to="/">Blogs</Link></li>
                            <li><Link to="/tabs">{parsedUser.first_name} {parsedUser.last_name}</Link></li>
                            <li><Logout/></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

