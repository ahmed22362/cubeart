"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './globals.css'

import React,{ useEffect } from "react";
import { MinNav, Navbar } from '@/components';
import Head from 'next/head';


export default function RootLayout({ children }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
    <html lang="en">
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
