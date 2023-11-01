import {AuthContext} from "../Api/AuthContext.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";

const UpdateBlog = () => {
    const [content, setContent] = useState();
    const {token, userId} = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <div>
            <h1>Update Blog</h1>
        </div>
    );

}
export default UpdateBlog;