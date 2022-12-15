import decode from 'jwt-decode';
import { token } from './token';
import { logout } from './logout';

export const isLogged = () => {
    if(token) {
        const decodedToken: any = decode(token);
        
        if(decodedToken.exp * 1000 < new Date().getTime()) { 
            logout();
            return false;
        };

        return true;
    }
};