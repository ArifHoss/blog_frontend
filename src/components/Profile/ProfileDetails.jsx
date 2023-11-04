import {useContext} from 'react';
// import styles from './ProfileDetails.module.css';
import {AuthContext} from "../Api/AuthContext.jsx";
// import {useNavigate} from "react-router-dom";

const ProfileDetails = () => {
    const {user} = useContext(AuthContext);
    // const navigate = useNavigate();
    let parsedUser = null;

    // Check if user is a valid JSON string before parsing
    if (user && typeof user === 'string' && user.trim().length > 0) {
        try {
            parsedUser = JSON.parse(user);
        } catch (error) {
            console.error("Error parsing user data:", error);
            // Handle error or set a default value for parsedUser if necessary
        }
    }


    return (
        <div >
            <div>
                <h4>Name: {parsedUser.first_name} {parsedUser.last_name}</h4>
                <p>Email: {parsedUser.email}</p>
                <p>Roles: {parsedUser.roles.join(', ')}</p>
            </div>
        </div>
    );
};

export default ProfileDetails;
