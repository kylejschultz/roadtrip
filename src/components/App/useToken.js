import { useState } from 'react';
import { getTokenFromUrl } from '../Login/Spotify';


export default function useToken() {
    //console.log("This is what we pulled from URL:", getTokenFromUrl());

    const _spotifyToken = getTokenFromUrl().access_token
    console.log("Token:", _spotifyToken)

    const getToken = () => {
        return sessionStorage.getItem('token');
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem('token', _spotifyToken);
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    }
}
