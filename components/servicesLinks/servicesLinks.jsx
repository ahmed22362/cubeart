import React from 'react';
import styles from './servicesLinks.module.css';

export default function ServicesLinks({ handleLinkClick }) {
  const handleClick = (modalNumber) => {
    handleLinkClick(modalNumber);
  };

    return (
    <ul className={styles.ulList}>
        <li>
        <span style={{cursor: "pointer", fontSize: "14px"}} onClick={() => handleClick(1)}>
            3D Printer
        </span>
        </li>
        <li>
        <span style={{cursor: "pointer", fontSize: "14px"}} onClick={() => handleClick(2)}>
            Rapid Prototyping
        </span>
        </li>
        <li>
        <span style={{cursor: "pointer", fontSize: "14px"}} onClick={() => handleClick(3)}>
            Training
        </span>
        </li>
        <li>
        <span style={{cursor: "pointer", fontSize: "14px"}} onClick={() => handleClick(4)}>
            R&D Projects
        </span>
        </li>
        <li>
        <span style={{cursor: "pointer", fontSize: "14px"}} onClick={() => handleClick(5)}>
            3D Scanning
        </span>
        </li>
    </ul>
    );
}