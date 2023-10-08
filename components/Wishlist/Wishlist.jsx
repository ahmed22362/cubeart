"use client"
import React, { useEffect, useState ,useRef} from 'react';
import Image from 'next/image'
import './whishlist.css'
import Cookies from 'universal-cookie';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
  const url =process.env.API_URL;
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const token= new Cookies().get('token')
  const [width, setWidth] = useState(window.innerWidth);
  const [addToCartMessage, setAddToCartMessage] = useState("");

  const toast = useRef(null);

    const showSuccess = () => {
        toast.current.show({severity:'success', summary: '', detail:'Item added to cart successfully', life: 3000});
    }

    const showError = () => {
      toast.current.show({severity:'error', summary: 'Error', detail:'Message Content', life: 3000});
  }
  useEffect(() => {
    // Add the 'resize' event listener to the window and call updateWidth when resized
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      
    };

    window.addEventListener('resize', handleResize);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


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
 


  const handleDeleteItem = (productId) => {
    // Make a DELETE request to remove the item from the wishlist
    console.log("delete item of id :" + productId);
    console.log(token);
    const payload = {
      product: productId,
    };
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', // Set content type to JSON
    };
    fetch(`https://api.cubuild.net/api/v1/wishlist/item`, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(payload),
    })
      .then((response) => {
        console.log({text:response.text,status:response.status,body:response.body});
        if (response.status === 200) {
          fetchWishlistData(); 
          console.log("Successfully deleted");
        } else {
          console.error('Error deleting wishlist item:', response);
        }
      })
      .catch((error) => {
        console.error('Error deleting wishlist item:', error);
      });
  };
  const handleAddToCart = (productId) => {

    // Make a POST request to add the item to the cart
    console.log("add item to cart with ID: " + productId);
    console.log(token);
    const payload = {
      product: productId,
      quantity:1,
    };
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', // Set content type to JSON
    };
    fetch(`https://api.cubuild.net/api/v1/cart/item`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    })
      .then((response) => {
        console.log({ text: response.text, status: response.status, body: response.body });
        if (response.status === 200) {
          showSuccess();
          // Item added to cart successfully
          console.log("Item added to cart successfully");
          setAddToCartMessage("The item has been added to the cart.");
        } else {
          showError();
          console.error('Error adding item to cart:', response);
        }
      })
      .catch((error) => {
        console.error('Error adding item to cart:', error);
      });
  };
  
  const fetchWishlistData = () => {
    // Make a GET request to fetch the updated wishlist data
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    fetch("https://api.cubuild.net/api/v1/wishlist", { headers })
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
  };
 
  if (loading) {
    return <div>Loading wishlist...</div>;
  }

  return (
    <>
       <Toast ref={toast} position="top-left" />
    
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
                <p className='product_title'> {item.product.title}</p>
              </td>
              <td className="add_on">{formatDate(item.added_on)}</td>
              <td>{item.product.price} EGP</td>
              <td>
                {width > 500 ? (<>         

                  <button className="cart_button"  onClick={() => handleAddToCart(item.product.id)}>Add To Cart</button>
                  {/* <Button label="Success" className="p-button-success" onClick={showSuccess} /> */}
                  </>
                  ) : (
                  <i className="bi bi-cart-dash" onClick={() => handleAddToCart(item.product.id)}></i>
                )}
              </td>
              <td>
                <i
                  className="bi bi-trash"
                  onClick={() => handleDeleteItem(item.product.id)}
                ></i>

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
    </>

  );}