// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Login.css';
import Profile from '../Profile/Profile.jsx';
import {loginUser} from "../Api/userApi.jsx";

// eslint-disable-next-line react/prop-types
const Login = ({ token, setToken, user, setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    async function handleLogin() {
        try {
            const response = await loginUser(email, password);
            console.log(JSON.stringify(response.data.jwttoken));
            console.log(JSON.stringify(response.data.user));
            setToken(JSON.stringify(response.data.jwttoken));
            setUser(JSON.stringify(response.data.user));
            if (response.status === 200) {
                console.log('Login successful');
                setLoggedIn(true);
            }
        } catch (error) {
            console.log(error);
        }
    }


    // async function handleLogin() {
    //     const data = JSON.stringify({
    //         email: email,
    //         password: password,
    //     });
    //
    //     const config = {
    //         method: 'post',
    //         maxBodyLength: Infinity,
    //         url: 'http://localhost:8080/api/v1/users/auth',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         data: data,
    //     };
    //
    //     try {
    //         const response = await axios.request(config);
    //         console.log(JSON.stringify(response.data.jwttoken));
    //         setToken(JSON.stringify(response.data.jwttoken));
    //         setUser(JSON.stringify(response.data.user));
    //         if (response.status === 200) {
    //             console.log('Login successful');
    //             setLoggedIn(true); // Update loggedIn state
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

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
