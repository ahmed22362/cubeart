'use client';
import styles from './page.module.css';
import {AboutUs, CarsouelSlider, Footer, OurService, ProductSlider, QuickQuote} from '@/components'
import {useState, useEffect} from 'react';
import Loader from "@/components/loader/loader";

export default function Home() {
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
            {isLoading ? (
            <div className={styles.loader}>
            <Loader />
            </div>
        ) : (
            <main className={`${styles.mainSection} ${showMain ? styles.show : ''}`} style={{ overflow: 'hidden' }}>
                <CarsouelSlider />
                <section className="productSliderSection">
                    <ProductSlider title="Our Products" /> <br />
                    <ProductSlider title="Offers Up to 50%" />
                </section>
                <section className="px-2">
                    <OurService />
                </section>
                <section className="px-2 my-5 aboutSection">
                    <AboutUs />
                    <QuickQuote />
                </section>
                <Footer className="px-2 py-2 footerSection" />
            </main>
        )}
        </>
    )
}
