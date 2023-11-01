// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import {createUser} from "../Api/userApi.jsx";
import styles from './Signup.module.css';
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [roles] = useState(new Set(['ROLE_USER']));
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

// old handleSubmit function
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await createUser(firstName, lastName, email, password);
    //         setMessage('User created successfully');
    //         if (response.status === 201) {
    //             console.log('User created successfully');
    //             navigate('/');
    //         }
    //     } catch (e) {
    //         setMessage('Error creating user.'+e);
    //     }
    // };

    // new handleSubmit function

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password,
            };

            const newUser = await createUser(user);
            setMessage('User created successfully');
            if (newUser.status === 201) {
                console.log('User created successfully');
                navigate('/');
            }
        } catch (e) {
            setMessage('Error creating user: ' + e.message);
        }
    };

    return (
        // eslint-disable-next-line no-undef
        <div className={styles.container}>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                {/* eslint-disable-next-line no-undef */}
                <div className={styles.form_group}>

                    {/* eslint-disable-next-line no-undef */}
                    <label htmlFor="firstName" className={styles.label}>First Name</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                {/* eslint-disable-next-line no-undef */}
                <div className={styles.form_group}>

                    {/* eslint-disable-next-line no-undef */}
                    <label htmlFor="lastName" className={styles.label}>Last Name</label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                {/* eslint-disable-next-line no-undef */}
                <div className={styles.form_group}>

                    {/* eslint-disable-next-line no-undef */}
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {/* eslint-disable-next-line no-undef */}
                <div className={styles.form_group}>

                    {/* eslint-disable-next-line no-undef */}
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* eslint-disable-next-line no-undef */}
                <button type="submit" className={styles.submit_btn}>Signup</button>
                <p>Already have an account?</p>
                <button onClick={() => navigate('/')}>Login</button>
            </form>
            {/* eslint-disable-next-line no-undef */}
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
}

export default Signup;
