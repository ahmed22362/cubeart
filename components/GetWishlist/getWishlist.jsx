"use client";
import Cookies from "universal-cookie";

export default function GetWishlist() {

    const cookie = new Cookies()

    fetch(`${process.env.NEXT_PUBLIC_URL}/wishlist`, {
            method: 'GET',
            headers: {
                Authorization : `Bearer ${cookie.get('user-access-token')}`,
                "Content-Type": "application/json",
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.status === 'success') {
                    const wishlistData = JSON.stringify(data.data);
                    localStorage.setItem('wishlist', wishlistData);
                    console.log('Wishlist data stored in local storage.');
                }
            })
            .catch(error => {
                console.error('Error retrieving wishlist data:', error);
            });
}