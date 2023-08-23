"use client"
import React, { useState } from 'react';
import styles from './servicesLinks.module.css';

export default function ServicesLinks({ handleLinkClick }) {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (modalNumber) => {
    handleLinkClick(modalNumber);
    setActiveLink(modalNumber);
  };

  return (
    <ul className={styles.ulList}>
      <li>
        <span
          className={activeLink === 1 ? styles.active : ''}
          style={{ cursor: 'pointer', fontSize: '14px' }}
          onClick={() => handleClick(1)}
        >
          3D Printer
        </span>
      </li>
      <li>
        <span
          className={activeLink === 2 ? styles.active : ''}
          style={{ cursor: 'pointer', fontSize: '14px' }}
          onClick={() => handleClick(2)}
        >
          Rapid Prototyping
        </span>
      </li>
      <li>
        <span
          className={activeLink === 3 ? styles.active : ''}
          style={{ cursor: 'pointer', fontSize: '14px' }}
          onClick={() => handleClick(3)}
        >
          Training
        </span>
      </li>
      <li>
        <span
          className={activeLink === 4 ? styles.active : ''}
          style={{ cursor: 'pointer', fontSize: '14px' }}
          onClick={() => handleClick(4)}
        >
          R&D Projects
        </span>
      </li>
      <li>
        <span
          className={activeLink === 5 ? styles.active : ''}
          style={{ cursor: 'pointer', fontSize: '14px' }}
          onClick={() => handleClick(5)}
        >
          3D Scanning
        </span>
      </li>
    </ul>
  );
}