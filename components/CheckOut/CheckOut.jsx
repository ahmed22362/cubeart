"use client"

    import React, { useState } from "react";
    import './CheckOut.css'
import { MainButton, ProductSlider } from "..";
import { Button } from 'primereact/button';
import { useCounter } from 'primereact/hooks';
import Link from "next/link";
    
    export default function PaymentMethods() {
      const m =1;
      const { count, increment, decrement, reset } = useCounter(1, { step: 1, min: 1, max: 15 });
      const [heart, setHeart] = useState(false)
      const [cartItems, setCartItems] = useState([
        {
          id: 1,
          name: 'Hunting Cat 3D Printable',
          imageSrc: '/images/image6.png',
          quantity: 1,
          price: 80,
        },
        {
          id: 2,
          name: 'Red hoodie',
          imageSrc: '/images/image6.png',
          quantity: 1,
          price: 85,
        },
      ]);
    
      // Function to increment the quantity of an item
      const incrementQuantity = (itemId) => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      };
    
      // Function to decrement the quantity of an item
      const decrementQuantity = (itemId) => {
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.id === itemId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      };
    
      return (
        <>
        <div className="">
          <div className="row">
            <div className="col-md-6">
              <div>
              <div className="items flex-50" >
              <div className="all my-3 p-3 d-flex gap-2 align-items-center" style={{backgroundColor:'#F8FCFD'}}>
                <input type="checkbox" name="all" id="" />
                <h4>All Items(4)</h4>  
              </div>
              <div className="my-3 p-3" style={{backgroundColor:'#F8FCFD'}}>You can add-on items and select which item you want to checkout</div>
               <div className='order p-5  mb-3 d-flex  gap-5' style={{backgroundColor:'#F8FCFD'}}>
              <div className="image d-flex gap-4  align-items-center">
              <img className='w-50' src="/items/item.png" alt="product" />
              <div className="caption">
              <h3 style={{fontSize:'19px'}}>Hunting Cat 3D Printable</h3>
              <div onClick={()=>setHeart(!heart)} style={{cursor:'pointer'}} className="d-flex gap-2 align-items-center ">
              <i className={`bi bi-${heart?'heart-fill' :'heart'} mb-3`} style={{borderColor: '#666', color:'red' ,fontSize:'18px'}}></i><p style={{color: '#666',
                fontFamily: 'Poppins',}}>Add to Wishlist</p>
              </div>
              <p>{80*count} EGP </p>
              <div className="d-flex justify-content-between align-items-center">          
                <div className="d-flex   align-items-center justify-content-center">
                <Button icon="pi pi-minus" className="border rounded p-button-danger p-button-outlined" onClick={decrement}></Button>
                  <input type="text" placeholder={count}  className="d-flex align-items-center justify-content-center font-bold mx-2 text-center  border rounded" style={{width:'50px' , height:'50px' , display:'block'}} />  
                <Button icon="pi pi-plus" className="p-button-outlined border rounded p-button-success" onClick={increment}></Button>
                </div>
              <i className="bi bi-trash"></i>
              </div>
            </div>
            </div>
          </div>
         </div>
        </div>
        <div>
              <div className="items flex-50" >
              
               <div className='order p-5  mb-3 d-flex  gap-5' style={{backgroundColor:'#F8FCFD'}}>
              <div className="image d-flex gap-4  align-items-center">
              <img className='w-50' src="/items/item.png" alt="product" />
              <div className="caption">
              <h3 style={{fontSize:'19px'}}>Hunting Cat 3D Printable</h3>
              <div onClick={()=>setHeart(!heart)} style={{cursor:'pointer'}} className="d-flex gap-2 align-items-center ">
              <i className={`bi bi-${heart?'heart-fill' :'heart'} mb-3`} style={{borderColor: '#666', color:'red' ,fontSize:'18px'}}></i><p style={{color: '#666',
                fontFamily: 'Poppins',}}>Add to Wishlist</p>
              </div>
              <p>{80*count} EGP </p>
              <div className="d-flex justify-content-between align-items-center">          
                <div className="d-flex   align-items-center justify-content-center">
                <Button icon="pi pi-minus" className="border rounded p-button-danger p-button-outlined" onClick={decrement}></Button>
                  <input type="text" placeholder={count}  className="d-flex align-items-center justify-content-center font-bold mx-2 text-center  border rounded" style={{width:'50px' , height:'50px' , display:'block'}} />  
                <Button icon="pi pi-plus" className="p-button-outlined border rounded p-button-success" onClick={increment}></Button>
                </div>
              <i className="bi bi-trash"></i>
              </div>
            </div>
            </div>
          </div>
         </div>
        </div>
        </div>
            <div className="col-md-5">
              <div className="p-4 mt-3" style={{backgroundColor:'#F8FCFD'}}>
                <div className="summary">
                  <h4>Order Summary </h4>
                  <div className="d-flex justify-content-between mt-2">
                    <p>Sub total </p>
                    <span>80 EGP </span>
                  </div>
                  <div className="d-flex justify-content-between mt-2">
                    <p>Sub total </p>
                    <span>80 EGP </span>
                  </div>
                </div>
                <div>
                <div className="d-flex justify-content-between my-2">
                    <p>Sub total </p>
                    <span>80 EGP </span>
                  </div>
                  <MainButton text={'Checkout Now'} className={'m-auto'} />
                </div>
              </div>
            </div>
          </div>
        </div>
       
 
    </>
    );
    }