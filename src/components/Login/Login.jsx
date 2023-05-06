// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Login.css';
import Profile from '../Profile/Profile.jsx';
import {loginUser} from "../Api/userApi.jsx";

// eslint-disable-next-line react/prop-types
const Login = ({ token, setToken, user, setUser, loggedIn, setLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [loggedIn, setLoggedIn] = useState(false);

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
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
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
                    <button onClick={handleLogin}>Login</button>
                </>
            ) : (
                <div>
                    {/* Use the UserDetails component to display the user details */}
                    {token && (
                        <Profile token={token} user={JSON.parse(user)} />
                    )}
                </div>
            )}
        </div>
    );
};

export default Login;
