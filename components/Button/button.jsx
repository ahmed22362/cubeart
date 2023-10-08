"use client"

import styles from './button.module.css';

export default function MainButton({text , onclick , className}) {
    return (
        <button className={`${styles.button} ${className}`} onClick={onclick}>{text}</button>
    )
}