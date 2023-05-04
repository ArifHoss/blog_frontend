import axios from 'axios';

export const loginUser = async (email, password) => {
    const data = JSON.stringify({
        email: email,
        password: password,
    });

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/api/v1/users/auth',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    };

    try {
        const response = await axios.request(config);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
