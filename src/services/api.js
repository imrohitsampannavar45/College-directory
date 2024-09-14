import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Adjust the base URL as needed
});

export const loginUser = async (credentials) => {
    return await api.post('/login', credentials);
};

// Define other API calls as needed
export default api;
