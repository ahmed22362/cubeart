"use client"
import { useState } from 'react';
import styles from '../OurServies/ourServices.module.css'
import { Modal } from 'react-bootstrap'
import ServicesLinks from '../servicesLinks/servicesLinks';

export default function ServiceCard({icon, title, paragraph, dataTarget}) {
    
    const [lgShow, setLgShow] = useState(false);
    
    return(
        <div className={styles.serviceBox}>
            <div className={styles.serviceIcon}>
                <i className={icon}></i>
            </div>
            <h3>{title}</h3>
            <div className={styles.serviceContent}>
                <p>{paragraph}</p>
            </div>
            <div className={styles.overlay}>
                <button className="shadow" onClick={() => setLgShow(true)}>
                    Explore
                </button>
            </div>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby={dataTarget}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        <ServicesLinks />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    {paragraph}
                </Modal.Body>
            </Modal>
        </div>
    )
};
