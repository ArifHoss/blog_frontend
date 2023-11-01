// eslint-disable-next-line no-unused-vars
import React, {useEffect, useContext} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Signup from "./components/signup/Signup.jsx";
import Login from "./components/LoginLogout/Login.jsx";
import CreateBlog from "./components/Blogs/CreateBlog.jsx";
import Profile from "./components/Profile/Profile.jsx";
import PleaseLogIn from "./components/LoginLogout/PleaseLogIn.jsx";
import {AuthContext} from "./components/Api/AuthContext.jsx";
import Blog from "./components/Blogs/Blog.jsx";
import UpdateBlog from "./components/Blogs/UpdateBlog.jsx";
import MyBlogs from "./components/Blogs/MyBlogs.jsx";

function App() {
    const {token, user, loggedIn, userId, setUserId } = useContext(AuthContext);
    // let navigate = useNavigate();

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
            <Navbar/>
            <Routes>
                <Route path="/create" element={token ? <CreateBlog/> : <PleaseLogIn/>}/>
                <Route path="/" element={<Blogs/>}/>
                <Route path="/login" element={!loggedIn ? <Login/> : <Navigate to="/profile"/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/profile" element={token ? <Profile/> : <PleaseLogIn/>}/>
                <Route path="/myblogs" element={<MyBlogs/>}></Route>
                <Route path="/blog/:id" element={<Blog/>}/>
                <Route path="/updateblog/:id" element={<UpdateBlog/>}/>
            </Routes>

        </div>
    );
}

export default App;
