"use client"
import React, { useState } from 'react';
import { Password } from 'primereact/password';
import { MainButton } from '@/components';
// import '../personal_info/PersonalInfoStyle.css';
import './security.css';
import Cookies from 'universal-cookie';
import { Alert } from 'react-bootstrap';
import { useEffect } from 'react';
import Link from 'next/link';


function Page() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [resMessage, setResMessage] = useState('');
  const [resStatus, setResStatus] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [currentPasswordError, setCurrentPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [newPasswordConfirmError, setNewPasswordConfirmError] = useState('');
  const url = process.env.NEXT_PUBLIC_URL
  

  const cookei = new Cookies();

  const handleSaveClick = () => {
    // Reset previous error messages
    setCurrentPasswordError('');
    setNewPasswordError('');
    setNewPasswordConfirmError('');

    if (!currentPassword) {
      setCurrentPasswordError('Current Password is required.');
    }
    if (!newPassword) {
      setNewPasswordError('New Password is required.');
    }
    if (!newPasswordConfirm) {
      setNewPasswordConfirmError('Confirm New Password is required.');
    }

    // Check if there are any validation errors
    if (currentPasswordError || newPasswordError || newPasswordConfirmError) {
      setShowAlert(true); // Show the alert with danger message
      return; // Don't proceed with the API request if there are errors
    }

    const data = {
      currentPassword,
      newPassword,
      newPasswordConfirm,
    };

    fetch(`${url}/user/auth/updateMyPassword`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${cookei.get('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === 'success') {
          setResStatus(true);
          setResMessage('Password Updated Successfully');
        } else {
          setResMessage(data.message);
          setResStatus(false);
        }
        console.log(cookei.get('token'));
        data.token ? cookei.set('token', data.token) : '';
        setShowAlert(true); // Show the alert after the API request
        setTimeout(() => {
          setShowAlert(false); // Hide the alert after 3 seconds
        }, 9000); // 3000 milliseconds = 3 seconds
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (showAlert) {
      // Hide the alert after 3 seconds
      const timeoutId = setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      // Clear the timeout if the component unmounts before 3 seconds
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showAlert]);

  return (
    <div className="col-md-7">
      <div className='shadow bg-white  p-5 mb-5 bg-white rounded'>
      <h5 className='mb-5'>Edit Your Password</h5>
        {showAlert && (
          <Alert variant="danger">
            {currentPasswordError || newPasswordError || newPasswordConfirmError || resMessage}
          </Alert>
        )}
        <form>
          {/* ... (other input fields) */}
          <label className='ms-3 mt-4 d-block' htmlFor="currentPassword">Current Password</label>
          <Password
            inputClassName='input-group form-control'
            style={{ outline: 'none', border: 'none', position: "relative" }}
            className='form-control'
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            toggleMask
            autoComplete='off'
          />

          <label className='ms-3 mt-4 d-block' htmlFor='newPassword'>New password</label>
          <Password
            inputClassName='input-group form-control'
            style={{ outline: 'none', border: 'none', position: "relative" }}
            className='form-control'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            toggleMask
            autoComplete='off'
          />

          <label className='ms-3 mt-4 d-block' htmlFor='confirmNewPassword'>Confirm New password</label>
          <Password
            inputClassName='input-group form-control'
            style={{ outline: 'none', border: 'none', position: "relative" }}
            className='form-control'
            value={newPasswordConfirm}
            onChange={(e) => setNewPasswordConfirm(e.target.value)}
            toggleMask
            autoComplete='off'
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSaveClick();
              }
            }}
          />
        </form>
        <div className="form-button mt-5 d-flex">
          <Link style={{textDecoration:'none'}} href={'/'}>
        <MainButton className='discardButton me-2' text={'Discard'}  />
          </Link>
          <MainButton className='ms-3' text={'Save'} onclick={handleSaveClick} />
        </div>
      </div>
    </div>
  );
}

export default Page;
