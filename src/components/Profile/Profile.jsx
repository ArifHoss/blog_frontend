// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Profile.css';

// eslint-disable-next-line react/prop-types
const Profile = ({ token, user }) => {
    return (
        <div className="user-details">
            <h2>User Profile page</h2>
            <div className="user_details">
                {/* eslint-disable-next-line react/prop-types */}
                <h4>Name:  {user.first_name} {user.last_name}</h4>
                {/* eslint-disable-next-line react/prop-types */}
                <p>Email:  {user.email}</p>
                <p>Roles: {user.roles.join(', ')}</p>
                <p>Post IDs: {user.blogposts.join(', ')}<button>Show my post</button></p>

            </div>

            <div className="token_container">
                <h4>Token {token}</h4>
            </div>
        </div>
    );
};

export default Profile;
