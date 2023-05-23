// eslint-disable-next-line no-unused-vars
import React, {useEffect, useContext} from "react";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Signup from "./components/signup/Signup.jsx";
import Login from "./components/Login/Login.jsx";
import CreateBlog from "./components/Blogs/CreateBlog.jsx";
import Profile from "./components/Profile/Profile.jsx";
import PleaseLogIn from "./components/Login/PleaseLogIn.jsx";
import {AuthContext} from "./components/Api/AuthContext.jsx";
import Blog from "./components/blog/Blog.jsx";

function App() {
    const {token, user, loggedIn, setLoggedIn, userId, setUserId } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setLoggedIn(false);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate("/login");
    };

    useEffect(() => {
        if (user) {
            console.log('user from App.jsx : ' + user);
            const id = JSON.parse(user).id;
            localStorage.setItem('token', token);
            localStorage.setItem('user', user);
            console.log(id)
            setUserId(id);
        }
    }, [loggedIn, user]);

    useEffect(() => {
        console.log(userId)
    }, [userId]);

    return (
        <div className="app">
            <Navbar loggedIn={loggedIn} onLogout={handleLogout}/>
            <Routes>
                <Route path="/create" element={token ? <CreateBlog/> : <PleaseLogIn/>}/>
                <Route path="/blogs" element={token ? <Blogs/> : <PleaseLogIn/>}/>
                <Route path="/" element={!loggedIn ? <Login/> : <Navigate to="/blogs"/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/profile" element={token ? <Profile/> : <PleaseLogIn/>}/>
                <Route path="/blog/:id" element={<Blog/>}/>
            </Routes>

        </div>
    );
}

export default App;
