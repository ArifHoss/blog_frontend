import axios from "axios";

export const getAllPost = async (token) => {
    try {
        const res = await axios.get('http://localhost:8080/api/v1/posts', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        console.log(res.data);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
