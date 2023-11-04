import { useState, useContext } from 'react';
import styles from './Profile.module.css';
import { AuthContext } from "../Api/AuthContext.jsx";
import MyBlogs from "../Blogs/MyBlogs.jsx";
import ProfileDetails from "./ProfileDetails.jsx"; // Renamed to avoid confusion with ProfileTabs
import Unpublished from "./Unpublished.jsx";

const ProfileTabs = () => {
    const { user } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState('myblogs');

    const parsedUser = user ? safelyParseJson(user) : null; // Use a utility function to parse JSON safely

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }

    // This is a utility function that safely parses JSON and can be moved outside of your component or into a separate utilities file.
    function safelyParseJson(json) {
        try {
            return JSON.parse(json);
        } catch (error) {
            console.error("Error parsing user data:", error);
            return null;
        }
    }

    return (
        <div className={styles.container}>
            <h2>Hello, {parsedUser?.first_name}</h2>
            <div className={styles.tabs_container}>
                <button
                    onClick={() => handleTabClick('myblogs')}
                    className={`${styles.button} ${activeTab === 'myblogs' ? styles.active : ''}`}
                >
                    MY BLOGS
                </button>
                <button
                    onClick={() => handleTabClick('profile')}
                    className={`${styles.button} ${activeTab === 'profile' ? styles.active : ''}`}
                >
                    PROFILE
                </button>
                <button
                    onClick={() => handleTabClick('unpublished')}
                    className={`${styles.button} ${activeTab === 'unpublished' ? styles.active : ''}`}
                >
                    UNPUBLISHED
                </button>
            </div>
            <div className={styles.profile_container}>
                {activeTab === 'myblogs' && <MyBlogs />}
                {activeTab === 'profile' && <ProfileDetails />}
                {activeTab === 'unpublished' && <Unpublished />}
            </div>
        </div>
    );
};

export default ProfileTabs;
