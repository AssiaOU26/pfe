import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },

});

api.interceptors.request.use(
    (config) => {
        // Add token if available
        const token = localStorage.getItem('token'); // or use cookies, etc.
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle errors globally
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized');
        }
        return Promise.reject(error);
    }
);

export default api;