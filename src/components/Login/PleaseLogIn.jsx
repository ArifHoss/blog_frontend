// eslint-disable-next-line no-unused-vars
import React, {useContext} from 'react';
import './Login.css'
import {AuthContext} from "../Api/AuthContext.jsx";

const PleaseLogIn = () => {
    const [navigate] = useContext(AuthContext);
    // const navigate = useNavigate();

    return (
        <div className="container">
            <h2>Please log in to create a blog post</h2>
            <button onClick={() => navigate('/login')}>Go to Login</button>
        </div>
    );
};

export default PleaseLogIn;
