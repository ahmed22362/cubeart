'use client'

import styles from "@/components/navbars/navbar.module.css";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import Image from 'next/image';

export default function Search() {
    const [input, setInput] = useState("");
    const [data, setData] = useState(null);
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const searchRef = useRef(null);

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const fetchData = (value) => {
        fetch(`${process.env.NEXT_PUBLIC_URL}/product?title=${value}`)
            .then((response) => response.json())
            .then((json) => {
                if (json.data.length > 0) {
                    setShow(true);
                    setData(json.data);
                } else {
                    setMessage("No Results");
                    setShow(true);
                    setData(null);
                }
            })
            .catch((error) => {
                console.log("Error occurred while fetching data:", error);
                setShow(false);
            });
    };

    const handleSearch = (value) => {
        setInput(value);
        setTimeout(() => {
            fetchData(value);
        }, 3000)
    };

    return(
        <>
            <div className={styles.searchBox}>
            <form className="w-100">
                <div className={styles.searchDiv}>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon1"
                        value={input}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <i className={'bi bi-search ' + styles.searchICon}></i>
                </div>
            </form>
                <div className={`${styles.searchResults} ${show ? styles.show : ''}`} ref={searchRef}>{data ? data.map((item) => {
                    return(
                            (<div className={styles.searchItemBox} key={`${item.id}`} >
                                <Link className={styles.itemBox} href={`/products/${item.id}`}>
                                    {item.title}
                                    <Image src={item.coverImage} width={50} height={50} alt={'item image'}
                                           loading={'lazy'}/>
                                </Link>
                            </div>)
                    )
                }) : (<p key={1}>{message}</p>)}
                </div>
            </div>
        </>
    )
}