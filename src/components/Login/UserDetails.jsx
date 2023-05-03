// eslint-disable-next-line no-unused-vars
import React from 'react';
import './UserDetails.css';

// eslint-disable-next-line react/prop-types
const UserDetails = ({ token, user }) => {
    return (
        <div className="user-details">
            <h2>User Details</h2>
            <ul>
                <li>Token {token}</li>
                <li>Token {token}</li>
            </ul>

            <p><strong>Name:</strong> {user.name}</p>
            {/* eslint-disable-next-line react/prop-types */}
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    );
};

export default UserDetails;
