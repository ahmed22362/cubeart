"use client"

import styles from "./breadcrumbd.module.css"

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLinks({route, childRoute}) {

    const navigate = usePathname();
    
    return (
        <>
        <ol className="breadcrumb m-0">
            <li className={`breadcrumb-item ${styles.link}`}>
                <Link href={"/"}>Home</Link>
            </li>
            <li className={`breadcrumb-item ${styles.link} ${navigate === route ? styles.current : ""}`}>
                <Link href={route}>{route.substring(1)}</Link>
            </li>
            <li className={`breadcrumb-item ${styles.link} ${navigate === childRoute ? styles.current : ""}`} aria-current="page">
                <Link 
                    href={childRoute}
                    >{childRoute.substring(10)}</Link>
            </li>
        </ol>
      </>
    )
};


