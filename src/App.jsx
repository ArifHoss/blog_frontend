// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import './App.css'
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/pages/Home.jsx";
import MyBlog from "./components/Blogs/MyBlog.jsx";
import Contact from "./components/pages/Contact.jsx";
import Signup from "./components/pages/Signup.jsx";
import Login from "./components/Login/Login.jsx";
import CreateBlog from "./components/Blogs/CreateBlog.jsx";
import Profile from "./components/Profile/Profile.jsx";

function App() {
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogout = () => {
        setLoggedIn(false);
        // Clear the token or user data from localStorage or any other storage you're using.
        localStorage.removeItem('token');
    };

    return (
        <div className="App">
            <Navbar loggedIn={loggedIn} onLogout={handleLogout}/>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* eslint-disable-next-line no-undef */}
                <Route path="/create" element={token && <CreateBlog token={token}/>} />
                <Route path="/myblog" element={token && <MyBlog token={token}/>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login token={token} setToken={setToken} user={user} setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
                <Route path="/signup" element={<Signup />} />
                <Route path="/profile" element={token && (<Profile token={token} user={JSON.parse(user)} />)}/>
            </Routes>
        </div>
    );
}

export default App;
