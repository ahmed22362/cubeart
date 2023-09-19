'use client';
import styles from "./navbar.module.css";
import Link from "next/link";
import Cookies from "universal-cookie";
import {useRouter} from 'next/navigation';
import { useState, useEffect} from 'react';

export default function DropDown({openModal}) {
    const router = useRouter()
    const cookie = new Cookies();
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {

      setIsClient(true)
    
    }, [])

    const user = cookie.get('user')

    const logOut = () => {
        cookie.remove('user');
        cookie.remove('token');
        router.refresh();
    } 


    return (
        <div className="dropdown">
            <i
            className="bi bi-person dropdown-toggle"
            style={{ cursor: "pointer" }}
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            ></i>
        <ul
            className={"dropdown-menu " + styles.dropUl}
            style={{ right: "0", padding: "10px", left: "-310%" }}
            >
            <li className={styles.dropDownLink}>
                <i className="bi bi-person-gear"></i>
                <Link className="dropdown-item" href="#">
                Edit Profile
                </Link>
            </li>
            <li className={styles.dropDownLink}>
                <i className="bi bi-heart"></i>
                <Link className="dropdown-item" href="#">
                Wishlist
                </Link>
            </li>
            <li className={styles.dropDownLink}>
                <i className="bi bi-cart3"></i>
                <Link className="dropdown-item" href="#">
                Cart
                </Link>
            </li>
            {user ? (
            <>
              <li className={styles.buttonLi}>
                <button
                  className="btn btn-danger shadow-sm"
                  onClick={() => logOut()}
                >
                  Logout
                </button>
              </li>
              </>
            ): (
              <>
                <li className={styles.buttonLi}>
                  <button className="btn btn-danger shadow-sm" onClick={openModal}>
                    Login
                  </button>
                </li>
              </>
            )}
        </ul>
      </div>
    )
};
