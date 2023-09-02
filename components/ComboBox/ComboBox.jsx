"use client"

import categories from "./CatBox"
import Form from 'react-bootstrap/Form';
import styles from './ComboBox.module.css'

export default function ComboBox() {
    return(
            <section className={styles.comboBox + " my-5"}>
                <div className={styles.categories}>
                    {categories.map((catName, index) => {
                        return(
                            <div className={styles.catBox} key={index}>
                                <span>{catName}</span>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.sort}>
                    <span>sort by : </span>
                    <form action="">
                        <Form.Select size="lg">
                            <option value={"0"}>Price - Low to High</option>
                            <option value={"1"}>Price - High to low</option>
                            <option value={"2"}>New Arrival</option>
                            <option value={"3"}>Top Rated</option>
                        </Form.Select>
                    </form>
                </div>
            </section>
    )
}