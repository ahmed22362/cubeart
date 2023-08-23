"use client"

import Image from "next/image";
import styles from './customModal.module.css'

export default function CustomModal({img, alt, paragraph}) {
  return (
    <div className={styles.modalBody}>
      <Image src={img} alt={alt} width="285" height="229" />
      <p>{paragraph}</p>
    </div>
  )
}
