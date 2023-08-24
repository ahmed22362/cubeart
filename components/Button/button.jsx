"use client"

import styles from './button.module.css';

export default function MainButton({text}) {
    return (
        <button className={styles.button}>{text}</button>
    )
}