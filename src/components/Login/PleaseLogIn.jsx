// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const PleaseLogIn = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h2>Please log in to create a blog post</h2>
            <button onClick={() => navigate('/login')}>Go to Login</button>
        </div>
    );
};

export default PleaseLogIn;
