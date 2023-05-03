// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import UserDetails from './UserDetails';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('')
    const [token, setToken] = useState('')

    async function handleLogin() {
        const data = JSON.stringify({
            email: email,
            password: password,
        });

        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:8080/api/v1/users/auth',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        };

        try {
            const response = await axios.request(config);
            console.log(JSON.stringify(response.data.jwttoken));
            setToken(JSON.stringify(response.data.jwttoken));
            // setToken(token.data.token.token)
            setUser(JSON.stringify(response.data.user));
            if (response.status === 200) {
                console.log('Login successful');
            }
        } catch (error) {

            console.log(error);
        }
    }

    return (
        <div>
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
            <div>
                {/* Use the UserDetails component to display the user details */}
                {token && (
                    <UserDetails token={token} user={JSON.parse(user)}/>
                )}
            </div>
        </div>
    );
}

export default Login;
