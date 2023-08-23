"use client"
import { useState } from 'react';
import styles from '../OurServies/ourServices.module.css'
import { Modal } from 'react-bootstrap'
import ServicesLinks from '../servicesLinks/servicesLinks';
import CustomModal from '../customModal/customModal';

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
                <Modal.Header style={{paddingBottom: "0"}} closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        <ServicesLinks className={styles.linkList} handleLinkClick={handleExploreClick}/>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {currentModal === 1 && <CustomModal 
                                                img="/OurServices/image 17.png" 
                                                alt="3d Service" 
                                                paragraph="Lorem ipsum dolor sit amet consectetur. 
                                                Vel sit pretium id aliquam. 
                                                Malesuada donec donec purus consectetur neque erat neque viverra massa. 
                                                Nibh dolor tellus in nunc aliquam egestas morbi aliquam vel. Orci suscipit aliquet sed pretium viverra est fringilla. Pulvinar lacinia maecenas aliquam scelerisque sagittis. Purus faucibus vel massa aliquet vitae. Eget donec sit amet orci ultrices. Justo mauris mattis est amet id cum. Laoreet fermentum nunc tellus maecenas massa nisl senectus.
                                                Auctor ac vitae magna arcu sollicitudin."
                                                />}
                {currentModal === 2 && <CustomModal 
                                                img="/OurServices/image 18.png" 
                                                alt="3d Service" 
                                                paragraph="Lorem ipsum dolor sit amet consectetur. 
                                                Vel sit pretium id aliquam. 
                                                Malesuada donec donec purus consectetur neque erat neque viverra massa. 
                                                Nibh dolor tellus in nunc aliquam egestas morbi aliquam vel. Orci suscipit aliquet sed pretium viverra est fringilla. Pulvinar lacinia maecenas aliquam scelerisque sagittis. Purus faucibus vel massa aliquet vitae. Eget donec sit amet orci ultrices. Justo mauris mattis est amet id cum. Laoreet fermentum nunc tellus maecenas massa nisl senectus.
                                                Auctor ac vitae magna arcu sollicitudin."
                                                />}
                {currentModal === 3 && <CustomModal 
                                                img="/OurServices/image 19.png" 
                                                alt="3d Service" 
                                                paragraph="Lorem ipsum dolor sit amet consectetur. 
                                                Vel sit pretium id aliquam. 
                                                Malesuada donec donec purus consectetur neque erat neque viverra massa. 
                                                Nibh dolor tellus in nunc aliquam egestas morbi aliquam vel. Orci suscipit aliquet sed pretium viverra est fringilla. Pulvinar lacinia maecenas aliquam scelerisque sagittis. Purus faucibus vel massa aliquet vitae. Eget donec sit amet orci ultrices. Justo mauris mattis est amet id cum. Laoreet fermentum nunc tellus maecenas massa nisl senectus.
                                                Auctor ac vitae magna arcu sollicitudin."
                                                />}
                {currentModal === 4 && <CustomModal 
                                                img="/OurServices/image 20.png" 
                                                alt="3d Service" 
                                                paragraph="Lorem ipsum dolor sit amet consectetur. 
                                                Vel sit pretium id aliquam. 
                                                Malesuada donec donec purus consectetur neque erat neque viverra massa. 
                                                Nibh dolor tellus in nunc aliquam egestas morbi aliquam vel. Orci suscipit aliquet sed pretium viverra est fringilla. Pulvinar lacinia maecenas aliquam scelerisque sagittis. Purus faucibus vel massa aliquet vitae. Eget donec sit amet orci ultrices. Justo mauris mattis est amet id cum. Laoreet fermentum nunc tellus maecenas massa nisl senectus.
                                                Auctor ac vitae magna arcu sollicitudin." 
                                                />}
                {currentModal === 5 && <CustomModal 
                                                img="/OurServices/image 20 (1).png" 
                                                alt="3d Service" 
                                                paragraph="Lorem ipsum dolor sit amet consectetur. 
                                                            Vel sit pretium id aliquam. 
                                                            Malesuada donec donec purus consectetur neque erat neque viverra massa. 
                                                            Nibh dolor tellus in nunc aliquam egestas morbi aliquam vel. Orci suscipit aliquet sed pretium viverra est fringilla. Pulvinar lacinia maecenas aliquam scelerisque sagittis. Purus faucibus vel massa aliquet vitae. Eget donec sit amet orci ultrices. Justo mauris mattis est amet id cum. Laoreet fermentum nunc tellus maecenas massa nisl senectus.
                                                            Auctor ac vitae magna arcu sollicitudin." 
                                                />}
                </Modal.Body>
            </Modal>
        </div>
    )
};
