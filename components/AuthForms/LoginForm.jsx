'use client'

import Image from 'next/image';
import styles from '../Auth/auth.module.css';

export default function LoginForm({ handleLinkClick, active }) {
    const formSubmitted = () => {
        console.log('Form submitted')
    }

    return(
        <>
            <div className={styles.loginFormModal}>
                <div className={styles.LoginFormHeader}>
                    <h3>Welcome back !</h3>
                    <span>Login to your account</span>
                </div>
                <form>
                <div className={styles.inputControl}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" placeholder='example@gmail.com' id='email'/>
                </div>
                <div className={styles.inputControl}>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='your password' id='password'/>
                    <span
                        onClick={() => handleLinkClick('reset')}
                        className={active === 'reset ' ? 'active ' : ' ' + styles.resetPassword}
                        >
                        Forget Password ?
                    </span>
                </div>
                </form>
                <button className={styles.submitBtn} onClick={formSubmitted}>Login</button>
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
