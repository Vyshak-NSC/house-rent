import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api/users/';

export const registerUser = async (formData) => {
    const response = await axios.post(`${API_BASE_URL}register/`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const loginUser = async (formData) => {
    const response = await axios.post(`${API_BASE_URL}login/`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const logout = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        window.location.href = '/auth/signin';
    }
};
