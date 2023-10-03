"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import './whishlist.css'
import Cookies from 'universal-cookie';

export default function TemplateDemo() {
  const url =process.env.API_URL;
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const token= new Cookies().get('token')

  useEffect(() => {
    // Make a GET request to the wishlist API endpoint
      const  headers= {
      Authorization : `Bearer ${token}`,
      "Content-Type": "application/json",
    }
    fetch("https://api.cubuild.net/api/v1/wishlist" , { headers })
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API returns an array of wishlist items
        setWishlistItems(data.data.items);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching wishlist data:", error);
        setLoading(false);
      });
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Formats to "MM/DD/YYYY"
  };
 
  
 
  if (loading) {
    return <div>Loading wishlist...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Added on</th>
          <th>Price</th>
          <th></th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(wishlistItems) && wishlistItems.length > 0 ? (
          wishlistItems.map((item) => (
            <tr key={item.id}>
              <td className="">
                <Image
                  alt="product"
                  className="me-2"
                  src={item.product.coverImage}
                  style={{ borderRadius: "10px" }}
                  width={60}
                  height={60}
                />
                {item.product.title}
              </td>
              <td className="add_on">{formatDate(item.added_on)}</td> {/* Format the date */}
              <td>{item.product.price} EGP</td>
              <td>
                <button className="cart_button">Add To Cart</button>
              </td>
              <td>
                <i className="bi bi-trash"></i>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No items in your wishlist</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}