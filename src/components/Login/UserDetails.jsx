import React from 'react';
import './UserDetails.css';

const UserDetails = ({ token, user }) => {
    return (
        <div className="user-details">
            <h2>User Details page</h2>
            <div className="user_details">
                <h4>Name:  {user.first_name} {user.last_name}</h4>
                <p>Email:  {user.email}</p>
                <p>Roles: {user.roles}</p>
                <p>Post IDs: {user.blogposts}</p>
            </div>

            <div className="token_container">
                <h4>Token {token}</h4>
            </div>
        </div>
    );
};

export default UserDetails;
