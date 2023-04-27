import './App.css'
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Signup from "./components/pages/Signup.jsx";
import Profile from "./components/pages/Profile.jsx";
import Login from "./components/pages/Login.jsx";
import CreateBlog from "./components/pages/CreateBlog.jsx";

function App() {
    return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<CreateBlog/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    </div>
  );
}

export default App
