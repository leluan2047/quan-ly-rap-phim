import Axios from "axios";

export const axios = Axios.create({
    
    baseURL: 'http://localhost:3000/api/v1/users'
});

axios.interceptors.request.use(
    async (config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
        return config;
    }
);