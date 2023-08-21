"use client"
import { useState } from 'react';
import styles from '../OurServies/ourServices.module.css'
import { Modal } from 'react-bootstrap'
import ServicesLinks from '../servicesLinks/servicesLinks';

export default function ServiceCard({icon, title, paragraph, dataTarget}) {
    
    // const [lgShow, setLgShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    
    const [currentModal, setCurrentModal] = useState(1);
  
    const handleExploreClick = (modalNumber) => {
      setCurrentModal(modalNumber);
      setLgShow(true);
    };
  
    const handleClose = () => {
      setLgShow(false);
    };
    

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
                <button className="shadow" onClick={() => handleExploreClick(+dataTarget)}>
                    Explore
                </button>
            </div>
            <Modal
                size="lg"
                show={lgShow}
                onHide={handleClose}
                aria-labelledby={dataTarget}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        <ServicesLinks className={styles.linkList} handleLinkClick={handleExploreClick}/>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {currentModal === 1 && <p>1</p>}
                {currentModal === 2 && <p>2</p>}
                {currentModal === 3 && <p>3</p>}
                {currentModal === 4 && <p>4</p>}
                {currentModal === 5 && <p>5</p>}
                </Modal.Body>
            </Modal>
        </div>
    )
};
