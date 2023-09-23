'use client'
import styles from '../Auth/auth.module.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Reset({ handleLinkClick, active, closeModal }) {
    const validationSchema = Yup.object().shape({
        
        email: Yup.string()
            .required('Email is required')
            .email('Type a valid email address')
    });

    const formOptions = { resolver: yupResolver(validationSchema) };


    const {register, handleSubmit, formState: { errors }} = useForm(formOptions);
    const [responseMessage, setMessage] = useState(null);
    const url = process.env.API_URL;
    const onSubmit = (formData) => {
        const formObj = {
            email: formData.email
        }
        console.log(formObj);
        fetch(`${url}/user/auth/forgetPassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formObj),
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                setMessage(data.message);
                setTimeout(() => {
                    closeModal()
                }, 4000)
            } else {
                setMessage(data[0].message);
                console.log(data);
            }
        })
        .catch(error => {
            setMessage('something went wrong please try again or contact with us');
            console.log(error);
        });
    }

    return(
        <div className={styles.loginFormModal} style={{padding: "25px"}}>
            <div className={styles.LoginFormHeader}>
                <h3>Forget your Password ?</h3>
                <span style={{
                    fontSize: "15px",
                    padding: "10px",
                    textAlign: "center",
                }}>Don’t worry ! Reseting your password is easy , just type in the email you registered to Cubuild.</span>
            </div>
            {responseMessage && (
                    <div className={`alert ${responseMessage.includes('success') ? 'alert-success' : 'alert-danger'}`}>
                        {responseMessage}
                    </div>
                )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputControl}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        name='email'
                        {...register('email')}
                        placeholder='example@gmail.com' 
                        id='email'
                        type='email'
                        autoComplete='off'
                        />
                    <span className="text-danger">{errors.email?.message}</span>
                </div>
                <input type="submit" className={styles.submitBtn} value={"Send"}/>
            </form>
            <div className={styles.signupLink}>
                Did you remember your password ? 
            <span onClick={() => handleLinkClick('login')} className={active === 'login' ? 'active' : ''}>
                Try logging in
            </span>
            </div>
        </div>
    )
};
