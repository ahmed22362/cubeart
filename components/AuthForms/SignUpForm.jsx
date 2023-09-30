'use client'

import Image from 'next/image';
import styles from '../Auth/auth.module.css';
import {useEffect, useState} from 'react';
import Cookies from 'universal-cookie';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function SignUpForm({ handleLinkClick, active, closeModal }) {
    const validationSchema = Yup.object().shape({
        first_name: Yup.string()
            .required('First Name is required'),
        last_name: Yup.string()
            .required('Last Name is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Type a valid email address'),
        password: Yup.string()
            .required("Password is required")
            .min(4, "Password length should be at least 4 characters")
            .max(12, "Password cannot exceed more than 12 characters"),
        confirm_password: Yup.string()
            .required("Confirm Password is required")
            .min(4, "Password length should be at least 4 characters")
            .max(12, "Password cannot exceed more than 12 characters")
            .oneOf([Yup.ref("password")], "Passwords do not match")
    });

    const formOptions = { resolver: yupResolver(validationSchema) };


    const {register, watch,handleSubmit, formState: { errors }} = useForm(formOptions);
    const [responseMessage, setMessage] = useState(null);
    const cookie = new Cookies();
    const url = process.env.API_URL;
    const [showComponent, setShowComponent] = useState(false);

    useEffect(() => {
        setShowComponent(true);
    }, []);
    const onSubmit = (formData) => {
        const formObj = {
            name: `${formData.first_name} ${formData.last_name}`,
            email: formData.email,
            password: formData.password,
            passwordConfirmation: formData.confirm_password
        }
        console.log(formObj);
        fetch(`${url}/user/auth/signup`, {
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
                setMessage('Signup success');
                setTimeout(() => {
                    closeModal()
                }, 2000)
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
        <>
            <div className={`${styles.loginFormModal + ' ' + styles.effect} ${showComponent ? styles.show : ''}`}>
                <div className={styles.LoginFormHeader}>
                    <h3>Welcome to Cubuild!</h3>
                    <span>Register to get your full experience with us!</span>
                </div>
                {responseMessage && (
                        <div className={`alert ${responseMessage.includes('success') ? 'alert-success' : 'alert-danger'}`}>
                            {responseMessage}
                        </div>
                    )}
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputControl}>
                    <label htmlFor="name">Full Name</label>
                        <div className={styles.fullname}>
                            <div className='col' id='name'>
                                <input
                                    name='first_name'
                                    {...register('first_name')}
                                    placeholder='First name' 
                                    id='first_name'
                                    type='text'
                                    autoComplete='off'
                                    />
                                <span className="text-danger">{errors.first_name?.message}</span>
                            </div>
                        <div className='col'>
                            <input
                                name='last_name'
                                {...register('last_name')}
                                placeholder='Last name' 
                                id='last_name'
                                type='text'
                                autoComplete='off'
                                />
                            <span className="text-danger">{errors.last_name?.message}</span>
                        </div>
                    </div>
                </div>
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
                <div className={styles.inputControl}>
                    <label htmlFor="password">Password</label>
                    <input 
                        name='password'
                        {...register('password')}
                        placeholder='your password' 
                        id='password'
                        type='password'
                        autoComplete='off'
                        />
                    <span className="text-danger">{errors.password?.message}</span>
                </div>
                <div className={styles.inputControl}>
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input 
                        name='confirm_password'
                        {...register('confirm_password')}
                        placeholder='confirm password' 
                        id='confirm_password'
                        type='password'
                        autoComplete='off'
                        />
                    <span className="text-danger">{errors.confirm_password?.message}</span>
                </div>
                    <input type="submit" className={styles.submitBtn} value={"Register"}/>
                </form>
                <div className={styles.SignupWith}>
                    <span>Or Register with</span>
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
                    Already have an account ?
                    <span onClick={() => handleLinkClick('login')} className={active === 'login' ? 'active' : ''}>
                        Login Now!
                    </span>
                    </div>
                </div>
            </div>
        </>
    )
};
