"use client"
import Modal from 'react-bootstrap/Modal';
import Stepper from '@/components/ourStepper/ourStepper';

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
     
      <Modal.Body>
            <div className="container w-100">
            <Stepper />

            </div>
      </Modal.Body>
     
    </Modal>
  );
}