'use client';

import Cookies from "universal-cookie";

export default function GetUserData() {
    const cookie = new Cookies;
    fetch(`${process.env.NEXT_PUBLIC_URL}/user/me`,
        {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${cookie.get('token')}`,
                "Content-Type": "application/json",
            }
        })
        .then(response => response.json())
        .then(userData => {
            cookie.set('user', userData.data)
        })
        .catch(err => console.log(err))
}