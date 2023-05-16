// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';
import './AuthContext.css';
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [userId, setUserId] = useState(0);
    const navigate = useNavigate();

    return (
        <div className="auth_context">
        <AuthContext.Provider value={{navigate, token, setToken, user, setUser, loggedIn, setLoggedIn, userId, setUserId }}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};
