"use client"

import Link from 'next/link';
import styles from '../productSlider/productSlide.module.css';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Cookies from 'universal-cookie';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Overlay from 'react-bootstrap/Overlay';
import GetWishlist from "@/components/GetWishlist/getWishlist";


export default function ProductCard({
    title,
    currentPrice,
    price,
    discount,
    image,
    category,
    description,
    id
}) {

    const [isFilled, setIsFilled] = useState(false);
    const cookie = new Cookies();
    const [show, setShow] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const target = useRef(null);
    const [responseMessage, setResponseMessage] = useState('');
    const [bgMessage, setBgMessage] = useState('');
    const [wishListMsg, setWishListMsg] = useState('');
    const [bgWishList, setbgWishList] = useState('');

    const url = process.env.NEXT_PUBLIC_URL;


    const addToCart = () => {

        fetch(`${url}/product/${id}/cart/item`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.get('token')}`,
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                setResponseMessage("Added To Cart")
                setBgMessage('success')
                setShow(true)
            } else {
                setResponseMessage("you are not logged in. Please log in first.")
                setBgMessage('danger')
                setShow(true)
                console.log(data);
                console.log("your not logged in. Please log in first.");
            }
            console.log(data);
        })
        .catch(error => {
            console.log(error);
            console.log('somthing went wrong please try again leater or contact us');
        });
    }

    const addToWishList = () => {
        
        const method = isFilled ? 'DELETE' : 'POST';
        
        fetch(`${url}/wishlist/item`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie.get('token')}`,
        },
        body: JSON.stringify({
            product: id,
        }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 'success') {
            if (isFilled) {
                setbgWishList('danger');
                setWishListMsg('Item removed from wishlist');
                GetWishlist()
            } else {
                setbgWishList('primary');
                setWishListMsg('Item added to wishlist');
                GetWishlist()
            }
            setIsFilled(!isFilled);
            setShowOverlay(true);
            setTimeout(() => {
                setShowOverlay(false);
            }, 3000);
            } else {
            console.log(data);
            if (data.message.substring(0, 7) === 'Invalid') {
                setbgWishList('danger');
                setWishListMsg('Please login first.');
            } else {
                setbgWishList('info');
                setWishListMsg('Item already added to wishlist');
            }
            setShowOverlay(true);
            setTimeout(() => {
                setShowOverlay(false);
            }, 3000);
            }
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
            console.log('You are not logged in yet.');
        });
    };
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('wishlist'))
        if(data) {
            if (data) {
                const found = data.items.some(item => item.product.id === id);
                setIsFilled(found);
            }
        }
    }, [])

    return (
            <div className={"card h-100 " + styles.cardItem}>
                <Overlay target={target.current} show={showOverlay} placement="top">
                {({
                    placement: _placement,
                    arrowProps: _arrowProps,
                    show: _show,
                    popper: _popper,
                    hasDoneInitialMeasure: _hasDoneInitialMeasure,
                    ...props
                }) => (
                <div
                    {...props}
                    className={`bg-${bgWishList}`}
                    style={{
                    position: 'absolute',
                    padding: '2px 10px',
                    color: 'white',
                    borderRadius: 3,
                    ...props.style,
                    }}
                >
                    {wishListMsg}
                </div>
                )}
            </Overlay>
                <ToastContainer
                    className="p-3"
                    position={"middle-center"}
                    style={{ zIndex: 1 }}
                >
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide bg={bgMessage}>
                        <Toast.Body style={{color: "#fff"}}>{responseMessage}</Toast.Body>
                    </Toast>
                </ToastContainer>
                <Link href={`/products/${id}`} className={styles.photo}>
                    <Image src={image} className="card-img-top" width={100} height={100} alt={"image"} priority={true} />
                </Link>
                
                <i
                className={`bi ${styles.heart} ${!isFilled ? 'bi-heart' : 'bi-heart-fill'}`}
                onClick={() => {addToWishList()}} variant="danger" ref={target}
                ></i>
                
                <div className={"card-body " + styles.cardBody}>
                    <h5 className={"card-title " + styles.cardTitle}>{title.length > 30 ? title.substring(0, 25) + '...' : title }</h5>
                    <div className={styles.upperBody}>
                        <span className="category" style={{color: "rgb(151, 151, 151)"}}>{category}</span>
                        <p className="card-text">{currentPrice} EGP</p>
                    </div>
                    <div className="price-section">
                        <div className={styles.discount}>
                            <p className="card-text text-success" style={{paddingLeft: "5px"}}>{discount  || " "}</p>
                            <p className="card-text" style={{textDecoration: "line-through", color: "rgb(151, 151, 151)"}}>{price}</p>
                        </div>
                    </div>
                    <button className={"btn " + styles.addBtn} onClick={addToCart}>
                        <i className="bi bi-cart3"></i>
                        Add
                    </button>
                </div>
            </div>
    )
};
