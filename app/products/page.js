'use client'
import { ProductsList, Footer } from "@/components";
import {useEffect, useState} from "react";
import Loader from "@/components/loader/loader";
import styles from "@/app/page.module.css";

export default function Products() {
    const [isLoading, setIsLoading] = useState(true);
    const [showMain, setShowMain] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 200);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => {
                setShowMain(true);
            }, 500);
        }
    }, [isLoading]);

    return (
        <>
            {
                isLoading ?
                    <div className={styles.loader}>
                        <Loader />
                    </div> :
                    (
                        <div className={`${styles.mainSection} ${showMain ? styles.show : ''}`}>
                            <main
                                style={{
                                    display: "flex",
                                    flexDirection: 'row',
                                    width: "100%",
                                    padding: "0 15px",
                                    marginBottom: "20px",
                                    gap: "10px",

                                }}
                            >
                                <ProductsList />
                            </main>
                            <Footer />
                        </div>
                    )
            }

    </>
    )
};
