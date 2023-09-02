"use client"

import styles from './SideBar.module.css'
import MainButton from './../Button/button';

export default function SideBar() {
    return(
        <div className={styles.sideBar}>
            <h3 className="text-center" style={{color: "#292D32", fontSize: "32px"}}>Filter</h3>
            <div>
                <h4>Price</h4>
                <input type="range" width={"50"}/>
            </div>
            <form action="">
                <label>From</label>
                <input type="number" className="priceFrom" placeholder={"0"} name='from' />
                <label>To</label>
                <input type="number" className="priceTo" placeholder={"0"} name="to" />
            </form>
            <div className={styles.btnResult}>
                <MainButton text={"Show Result"} />
            </div>
        </div>
    )
};
