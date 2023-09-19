'use client'

import { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import LoginForm from '../AuthForms/LoginForm';
import Image from 'next/image';
import styles from './auth.module.css';

const AuthModal = ({ show, closeModal }) => {
    const [activeTab, setActiveTab] = useState('login');
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
    };
  
    const handleLinkClick = (tab) => {
      setActiveTab(tab);
    };

    return (
        <Modal show={show} onHide={closeModal} size='md' centered>
          <Modal.Header style={{borderBottom: "0px", padding: "0px"}} closeButton>
          </Modal.Header>
          <Modal.Body>
            <div className={styles.modalHeader}>
                <Image src={'/cubuild-logo.png'} width={500} height={500} quality={75} loading='lazy' alt={'Logo'} />
            </div>
            {activeTab === 'login' && (

            <LoginForm handleLinkClick={handleLinkClick} active={activeTab} closeModal={closeModal} />

            )}
            {activeTab === 'signup' && (
              <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="signupName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="signupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="signupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Sign Up
                </Button>
              </Form>
            )}
            {activeTab === 'reset' && (
              <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="resetEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Reset Password
                </Button>
              </Form>
            )}
          </Modal.Body>
        </Modal>
      );
    };

export default AuthModal;