// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [userId, setUserId] = useState(0);

    return (
        <AuthContext.Provider value={{ token, setToken, user, setUser, loggedIn, setLoggedIn, userId, setUserId }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;