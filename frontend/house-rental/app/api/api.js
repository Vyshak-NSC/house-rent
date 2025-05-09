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


export const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token'); // Retrieve the refresh token from localStorage

    if (!refreshToken) {
        console.error('No refresh token available');
        throw new Error('No refresh token available');
    }

    try {
        const response = await fetch('http://localhost:8000/api/token/refresh/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ refresh: refreshToken }),
        });

        if (!response.ok) {
            throw new Error('Failed to refresh access token');
        }

        const data = await response.json();
        localStorage.setItem('access_token', data.access); // Save the new access token
        console.log('Access token refreshed successfully');
    } catch (error) {
        console.error('Error refreshing access token:', error.message);
        throw error;
    }
};

export const fetchPropertiesFromAPI = async (queryParams) => {
    let token = localStorage.getItem('access_token'); // Retrieve the token from localStorage
    const headers = {
        'Authorization': `Bearer ${token}`, // Add the token to the Authorization header
        'Content-Type': 'application/json',
    };

    try {
        const response = await fetch(`http://localhost:8000/api/properties/?${queryParams}`, {
            method: 'GET',
            headers,
        });

        if (response.status === 401) {
            // If token is expired, try refreshing it
            await refreshAccessToken();
            token = localStorage.getItem('access_token'); // Get the new token
            headers['Authorization'] = `Bearer ${token}`; // Update the Authorization header

            // Retry the request with the new token
            const retryResponse = await fetch(`http://localhost:8000/api/properties/?${queryParams}`, {
                method: 'GET',
                headers,
            });

            if (!retryResponse.ok) {
                throw new Error('Failed to fetch properties after token refresh');
            }

            return await retryResponse.json();
        }

        const data = await response.json();
        console.log('API Response:', data); // Debugging log to inspect the API response

        if (!response.ok) {
            throw new Error(data.detail || 'Failed to fetch properties');
        }

        return data;
    } catch (error) {
        console.error('Error fetching properties:', error.message); // Log the error for debugging
        throw error;
    }
};
