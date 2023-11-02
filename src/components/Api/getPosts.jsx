import axios from "axios";

export const getPosts = async () => {
    try {
        const res = await axios.get('http://localhost:8080/api/v1/posts');
        console.log(res.data);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getPostById = async (id) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/v1/posts/post/${id}`);
        console.log(res.data);
        return res;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const updatePostById = async (token, post,id) => {
    try {
        const response = await axios.patch(`http://localhost:8080/api/v1/posts/update/${id}`, post, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        console.log(response.data);
        return response;
    }catch (error) {
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

