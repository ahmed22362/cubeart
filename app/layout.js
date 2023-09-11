"use client"

import localFont from 'next/font/local'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './globals.css'

import React,{ useEffect } from "react";
import { MinNav, Navbar } from '@/components';

// Font files can be colocated inside of `app`
const Poppins = localFont({
  src: [
    {
      path: '../public/Poppins/Poppins-ExtraLight.ttf'
    },
    {
      path: '../public/Poppins/Poppins-Medium.ttf'
    },
    {
      path: '../public/Poppins/Poppins-Regular.ttf'
    },
    {
      path: '../public/Poppins/Poppins-SemiBold.ttf'
    }
  ],
  display: 'swap',
})

export default function RootLayout({ children }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
    <html lang="en" className={`${Poppins.className}`}>
      <head>
        <title>Cubuild</title>
      </head>
      <body>
        <Navbar />
        <MinNav />
        {children}
        </body>
    </html>
    </>
  )
}
