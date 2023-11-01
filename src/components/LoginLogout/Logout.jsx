import { useContext } from "react";
import { AuthContext } from "../Api/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const { setLoggedIn, setToken, setUser, setUserId } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setLoggedIn(false);
        setToken('');
        setUser('');
        setUserId(0);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/");
    };

    return (
        <a href="/" onClick={(e) => {
            e.preventDefault();
            handleLogout();
        }}>Logout</a>
    );
};

export default Logout;
