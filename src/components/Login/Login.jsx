// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import './Login.css';
import Profile from '../Profile/Profile.jsx';
import {loginUser} from "../Api/userApi.jsx";
import {useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Login = ({token, setToken, user, setUser, loggedIn, setLoggedIn}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [loggedIn, setLoggedIn] = useState(false);

    const navigate = useNavigate();

    async function handleLogin() {
        try {
            const response = await loginUser(email, password);
            console.log(JSON.stringify(response.data.jwttoken));
            console.log(JSON.stringify(response.data.user));
            setToken(response.data.jwttoken);
            setUser(JSON.stringify(response.data.user));
            if (response.status === 200) {
                console.log('Login successful');
                setLoggedIn(true);
                navigate('/MyBlog');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        // eslint-disable-next-line no-undef
        <div className="container">
            {!loggedIn ? (
                <>
                    <h1>Login</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div>
                        <button onClick={handleLogin}>Login</button>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p>Don't have an account?</p>
                        <button onClick={() => navigate("/signup")}>Signup</button>
                    </div>
                </>
            ) : (
                <div>
                    {/* Use the UserDetails component to display the user details */}
                    {token && (
                        <Profile token={token} user={JSON.parse(user)}/>
                    )}
                </div>
            )}
        </div>
    );
};

export default Login;
