"use client"

import styles from './button.module.css';

export default function MainButton({text , onclick}) {
    return (
        <button className={styles.button} onClick={onclick}>{text}</button>
    )
}