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
        return await axios.request(config);
    } catch (error) {
        console.log(error);
        throw error;
    }
};


export const getUser = async (token) => {

    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/api/v1/users/auth',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    };

    try {
        // eslint-disable-next-line no-unreachable
        console.log('getUser: ' + JSON.stringify(config));
        return await axios.request(config);
    } catch (error) {
        console.log(error);
        throw error;
    }

};

export const createUser = async (user) => {
    try {
        const response = await axios.post(`http://localhost:8080/api/v1/users/create`, user, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response.data)
        return response;
    } catch (error) {
        console.log(error)
        throw error;
    }
};



export const getMyPost = async (token, id) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/v1/users/mypost/${id}`, {
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

