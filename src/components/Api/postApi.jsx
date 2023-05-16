import axios from "axios";

export const postApi = async (token) => {
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

export const getPostById = async (token, id) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/v1/posts/post/${id}`, {
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


export const createPost = async (token, post) => {
    try {
        const response = await axios.post('http://localhost:8080/api/v1/posts/create', post, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        console.log(response.data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

