"use client"
import styles from './contentSection.module.css'
import Cookies from "universal-cookie";
import {useRef, useState, useEffect} from "react";
import { Toast } from 'primereact/toast';
import {usePathname} from "next/navigation";
import GetWishlist from "@/components/GetWishlist/getWishlist";

export default function ContentSection({data}) {
    const productData = data || "Loading";
    const cookie = new Cookies()
    const [isFilled, setIsFilled] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState(1)
    const url = process.env.NEXT_PUBLIC_URL;
    const toast = useRef(null);
    const productId = usePathname()
    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
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
                product: productData.id,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'success') {
                    if (isFilled) {
                        console.log('item remove from wishlist')
                        GetWishlist()
                    } else {
                        console.log('item added to wishlist')
                        GetWishlist()
                    }
                    setIsFilled(!isFilled);
                } else {
                    console.log(data);
                    if (data.message.substring(0, 7) === 'Invalid') {
                        console.log('login first')
                    } else {
                        console.log("item already in wishlist")
                    }
                }
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
                console.log('You are not logged in yet.');
            });
    };

    const addToCart = () => {
        fetch(`${url}/cart/item`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${cookie.get('token')}`,
            },
            body: JSON.stringify({
                "product": productData.id,
                "quantity": +selectedQuantity,
            })
        })
            .then(response => response.json())
            .then(allData => {
                if(allData.status === 'success') {
                    toast.current.show({severity:'success', summary: 'Success', detail: allData.message, life: 3000});
                    console.log(allData)
                } else {
                    toast.current.show({severity:'error', summary: 'Error', detail: 'you are not logged in please login first', life: 3000});
                    console.log(allData)
                }
            })
            .catch(error => {
                toast.current.show({severity:'error', summary: 'Error', detail: error, life: 3000});
                console.log(error);
            });
        console.log("Done")
    }
    const handleQuantityChange = event => {
        setSelectedQuantity(event.target.value);
    };

    useEffect(() => {
        GetWishlist()
        const data = JSON.parse(localStorage.getItem('wishlist'))
            if(data) {
                if (data) {
                    const found = data.items.some(item => item.product.id === productId.split('/')[2]);
                    setIsFilled(found);
                }
            }
    }, []);


    return(
        <div className={styles.contentSection}>
            <Toast ref={toast} position="bottom-left" className={styles.message}/>
            <h3>{productData.title}</h3>
            <div className={styles.addToWishList}>
                <i className={`bi ${!isFilled ? 'bi-heart' : 'bi-heart-fill text-danger'}`}
                onClick={() => addToWishList()}></i>
                    <span>Add to Wishlist</span>
            </div>
            <div className={styles.description}>
                <h4>Description</h4>
                <p>{productData.description}</p>
            </div>
            <div className={styles.price}>
                <h4>Price</h4>
                <span>{productData.price} EGP</span>
            </div>
            <div className={styles.quantity}>
                <h4>Quantity</h4>
                <form>
                    <select value={selectedQuantity} onChange={handleQuantityChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </form>
            </div>
                <button className={"btn " + styles.addBtn}
                    onClick={() => addToCart()}>
                <i className="bi bi-cart3"></i>
                Add to cart
            </button>
        </div>
    )
}
