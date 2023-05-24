// eslint-disable-next-line no-unused-vars
import React, {useContext, useEffect, useState} from 'react';
import styles from './Profile.module.css';
import {AuthContext} from "../Api/AuthContext.jsx";

// eslint-disable-next-line react/prop-types
const Profile = () => {
    const {token, user} = useContext(AuthContext);
    const parsedUser = JSON.parse(user);
    // save all user
    // console.log(user);

    return (
        // eslint-disable-next-line no-undef
        <div className={styles.container}>
            <h2>User Profile page</h2>
            <div className={styles.user_details}>
                {/* eslint-disable-next-line react/prop-types */}
                <h4>Name:  {parsedUser.first_name} {parsedUser.last_name}</h4>
                {/* eslint-disable-next-line react/prop-types */}
                <p>Email:  {parsedUser.email}</p>
                <p>Roles: {parsedUser.roles.join(', ')}</p>
                <p>Post IDs: {parsedUser.blogposts.join(', ')}</p>
                <button>Show my post</button>

            </div>

            <div className={styles.token_container}>
                <h4>Token {token}</h4>
            </div>
        </div>
    );
};

export default Profile;
