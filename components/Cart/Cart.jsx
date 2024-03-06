"use client"

    import React, { useEffect, useRef, useState } from "react";
    import './Cart.css'
import { MainButton } from "..";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import Cookies from "universal-cookie";
import Link from "next/link";
    
    export default function PaymentMethods() {
      const [heart, setHeart] = useState(false)
      const [loading, setLoading] = useState(true);
      const [cartItems, setCartItems] = useState({ items: [] });
      const toastRef = useRef(null);
      const url = process.env.NEXT_PUBLIC_URL;
      const showToast = (message, severity) => {
        toastRef.current.show({
          severity,
          summary: message,
          life: 3000,
        
           // The duration the Toast will be visible in milliseconds (3 seconds in this case)
        });
      };
      
       const token=new Cookies().get('token')
        
      const updateQuantity = (itemId, newQuantity) => {
        console.log(newQuantity);
        // Prepare the payload for updating quantity
        const payload = {
          quantity: newQuantity,
        };
    console.log(payload)
        // Make a PUT request to update the quantity
        fetch(`${url}/cart/item/${itemId}`, {
          method: "PATCH",
          headers: {
            Authorization : `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then((response) => response.json())
          .then((responseData) => {
            // Handle the response as needed
            console.log("Quantity updated successfully", responseData);
            // After successful update, you may want to refresh the cart items
           
          })
          .catch((error) => {
            console.error("Error updating quantity:", error);
          });
      };
    
  useEffect(() => {
    // Make a GET request to the API endpoint
    const headers = {
      Authorization: `Bearer ${token}` ,
      
    };

    // Make a GET request to the API endpoint with the headers
    fetch(`${url}/cart`, { headers })
      .then((response) => response.json())
      .then(({data}) => {
        setCartItems(data); // Assuming the API returns an array of cart items
        setLoading(false);
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);


  const incrementQuantity = (itemId) => {
    // Find the item by ID and increase its quantity
    const updatedItems = cartItems.items.map((item) =>
      item._id === itemId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    console.log('items1 '+itemId);
    showToast('Quantity increased successfully', 'success');
    setCartItems({ items: updatedItems });

    // After updating the local state, make the API request
    const updatedQuantity = updatedItems.find((item) => item._id === itemId)
      .quantity;
    updateQuantity(itemId, updatedQuantity);
  };
  const removeItem = (itemId) => {
    // Make a DELETE request to remove the item from the cart
    fetch(`${url}/cart/item/${itemId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}` , },
    })
      .then((response) => {
        if (response) {
          // Item deleted successfully
          console.log("Item removed successfully");
          showToast('Item deleted successfully', 'error');
          setCartItems((prevItems) => {
            const updatedItems = prevItems.items.filter(
              (item) => item._id !== itemId
            );
            return { items: updatedItems };
          });
        } else {
          // Handle errors or show a message
          console.error("Failed to remove item");
        }
      })
      .catch((error) => {
        console.error("Error removing item:", error);
      });
  };
  const decrementQuantity = (itemId) => {
    // Find the item by ID and decrease its quantity
    const updatedItems = cartItems.items.map((item) =>
      item._id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
      console.log('items2 '+itemId);
      showToast('Quantity decreased successfully', 'success');
      setCartItems({ items: updatedItems });

    // After updating the local state, make the API request
    const updatedQuantity = updatedItems.find((item) => item._id === itemId)
      .quantity;
    updateQuantity(itemId, updatedQuantity);
  };
  // Render loading state while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  } else if (cartItems?.items?.length === 0) {
    return (
      <>
      <div className="container">
        <div className="row justify-content-center align-items-center mt-5">
          <div className="empty">
            <img className="w-100" src="../images/shopping-cart.png" alt="shopping-cart" />
            <p className="p-4">Shopping Cart is Empty </p>
            <Link className="m-auto" style={{textDecoration:'none'}}  href='/products'>
              <MainButton className={'m-auto'} text={'Shop Now'} />
              </Link>   
          </div>
        </div>
      </div>
      </>
    );
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="items">
            <div className="all my-3 p-3 d-flex gap-2 align-items-center" style={{ background: '#F8FCFD' }}>
              <input type="checkbox" name="all" id="" />
              <h4>All Items(4)</h4>
              <Toast ref={toastRef} severity='error' />
            </div>
            <div className="my-3 p-3" style={{ background: '#F8FCFD' }}>You can add-on items and select which item you want to checkout</div>
            {cartItems && cartItems.items.map((item) => (
              <div key={item._id} className='order p-5  mb-3 d-flex  gap-5' style={{ background: '#F8FCFD' }}>
                <div className="image d-flex gap-4  align-items-center">
                <img className='w-50' src={item.product?.coverImage || ''} alt={item.product?.title || 'No Title'} />
                  <div className="caption">
                    <h3 style={{ fontSize: '19px' }}>{item.product?.title || ''}</h3>
                    <div onClick={() => setHeart(!heart)} style={{ cursor: 'pointer' }} className="d-flex gap-2 align-items-center ">
                      <i className={`bi bi-${heart ? 'heart-fill' : 'heart'} mb-3`} style={{ borderColor: '#666', color: 'red', fontSize: '18px' }}></i>
                      <p style={{ color: '#666', fontFamily: 'Poppins' }}>Add to Wishlist</p>
                    </div>
                    <p>{item.product?.price * item.quantity} EGP </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex   align-items-center justify-content-center">
                        <Button icon="pi pi-minus" className="border rounded p-button-danger p-button-outlined" onClick={() => decrementQuantity(item._id)}></Button>
                        <input type="text" value={item.quantity} className="d-flex align-items-center justify-content-center font-bold mx-2 text-center  border rounded" style={{ width: '50px', height: '50px', display: 'block' }} />
                        <Button icon="pi pi-plus" className="p-button-outlined border rounded p-button-success" onClick={() => incrementQuantity(item._id)}></Button>
                      </div>
                      <i className="bi bi-trash" onClick={() => removeItem(item._id)} style={{ cursor: 'pointer' }}></i>

                    </div>
                  </div>
                </div>
              </div>
              
            ))}
          </div>
        </div>
        <div className="col-md-5">
          <div className="p-4 mt-3" style={{ background: '#F8FCFD' }}>
            <div className="summary">
              <h4>Order Summary </h4>
              {cartItems && cartItems.items.map((item) => (
                <div key={item._id} className="d-flex justify-content-between mt-2">
                  <p>{item.product?.title} ({item.quantity}x)</p>
                  <span>{item.product?.price * item.quantity} EGP</span>
                </div>
              ))}
            </div>
            <div>
              <div className="d-flex justify-content-between my-2">
                <p>Sub total</p>
                <span>{cartItems && cartItems.items.reduce((total, item) => total + item.product?.price * item.quantity, 0)} EGP</span>
              </div>
              <Link style={{textDecoration:'none'}} href='/editprofile/checkout'>
                <MainButton  text={'Checkout Now'} className={'m-auto'}/>
                </Link>
                </div>
          </div>
        </div>
      </div>
    </div>
  );}