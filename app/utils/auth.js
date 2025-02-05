import { jwtDecode } from 'jwt-decode';

export const getUser = (token) => {
    return jwtDecode(token);
};