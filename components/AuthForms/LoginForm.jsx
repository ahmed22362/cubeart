'use client'

import Image from 'next/image';
import styles from '../Auth/auth.module.css';
import {useEffect, useState} from 'react';
import Cookies from 'universal-cookie';
import { useForm } from 'react-hook-form';


export default function LoginForm({ handleLinkClick, active, closeModal }) {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const [responseMessage, setMessage] = useState(null);
    const cookie = new Cookies();
    const url = process.env.NEXT_PUBLIC_URL;
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
            setShowComponent(true);
    }, []);
    const onSubmit = (formData) => {
        const formObj = {
            email: formData.email,
            password: formData.password,
        }
        fetch(`${url}/user/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formObj),
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                cookie.set('token', data.token);
                cookie.set('user', data.data);
                setMessage('login success');
                setTimeout(() => {
                    closeModal()
                }, 2000)
            } else {
                setMessage('Password or Email not correct please try again or contact us');
            }
        })
        .catch(error => {
            setMessage('something went wrong please try again or contact with us');
            console.log(error);
        });
    }

    return(
        <>
            <div  className={`${styles.loginFormModal + ' ' + styles.effect} ${showComponent ? styles.show : ''}`}>
                <div className={styles.LoginFormHeader}>
                    <h3>Welcome back !</h3>
                    <span>Login to your account</span>
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
                        {...register('email', {required: "email is required", pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "Please enter a valid email address"
                        }})}
                        placeholder='example@gmail.com' 
                        id='email'
                        type='email'
                        autoComplete='off'
                        />
                    <span className="text-danger">{errors.email?.message}</span>
                </div>
                <div className={styles.inputControl}>
                    <label htmlFor="password">Password</label>
                    <input 
                        {...register('password', {required: 'password is required'})}
                        placeholder='your password' 
                        id='password'
                        type='password'
                        autoComplete='off'
                        />
                    <span className="text-danger">{errors.password?.message}</span>
                    <span
                        onClick={() => handleLinkClick('reset')}
                        className={active === 'reset ' ? 'active ' : ' ' + styles.resetPassword}
                        >
                        Forget Password ?
                    </span>
                </div>
                    <input type="submit" className={styles.submitBtn} value={"Login"}/>
                </form>
                <div className={styles.loginWith}>
                    <span>Or login with</span>
                </div>
                <div className={styles.otherOptions}>
                    <div className={styles.OuthLogin}>
                        <span>
                            <Image src={'/Social-icons/google.png'} width={50} height={50} loading={'lazy'} alt={'google-icon'} />
                            Google
                        </span>
                        <span>
                            <Image src={'/Social-icons/facebook.png'} width={50} height={50} loading={'lazy'} alt={'facebook-icon'} />
                            Facebook
                        </span>
                    </div>
                    <div className={styles.signupLink}>
                        don't have an account ?
                    <span onClick={() => handleLinkClick('signup')} className={active === 'signup' ? 'active' : ''}>
                        SignUp Now!
                    </span>
                    </div>
                </div>
            </div>
        </>
    )
};
