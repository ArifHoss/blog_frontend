// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PleaseLogIn = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Please log in to create a blog post</h2>
            <button onClick={() => navigate('/login')}>Go to Login</button>
        </div>
    );
};

export default PleaseLogIn;
