import { jwtDecode } from 'jwt-decode';

export const getUserFromToken = () => {
    if (typeof window === 'undefined') return null;

    const token = localStorage.getItem('access_token');
    if (!token) return null;

    try {
        const decoded = jwtDecode(token);
        console.log('Decoded token:', decoded); // 👈 This helps you inspect it
        return decoded?.username || null;
    } catch (err) {
        console.error('Invalid token:', err);
        return null;
    }
};
