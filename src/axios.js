import Axios from "axios";

export const axios = Axios.create({
    
    baseURL: 'http://localhost:3000/api/v1'
});

axios.interceptors.request.use(
    async (config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
        return config;
    }
);