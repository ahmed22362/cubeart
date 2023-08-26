"use client"

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap-icons/font/bootstrap-icons.min.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import './globals.css'

import React,{ useEffect } from "react";

import { MinNav, Navbar } from '@/components';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        
import 'primeicons/primeicons.css';
        
export default function RootLayout({ children }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar />
        <MinNav />
        {children}
        </body>
    </html>
  )
}
