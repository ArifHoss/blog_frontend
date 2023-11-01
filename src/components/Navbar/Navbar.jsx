import classes from "./Navbar.module.css";
import {Link} from "react-router-dom";
import {AuthContext} from "../Api/AuthContext.jsx";
import {useContext} from "react";
import Logout from "../LoginLogout/Logout.jsx";

// eslint-disable-next-line react/prop-types
const Navbar = () => {

    const { loggedIn} = useContext(AuthContext);

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
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Logout/></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

