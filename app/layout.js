"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './globals.css'
import React,{ useEffect } from "react";
import Navbar from './components/navbars/navbar';
import MinNav from './components/navbars/minNav';
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
