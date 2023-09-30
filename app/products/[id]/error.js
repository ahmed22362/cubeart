'use client' // Error components must be Client Components
import Link from 'next/link'
 import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "red",
        flexDirection: "column"
    }}>
      <h2>No Product With This Link</h2>
      <Link href="/" style={{
        border: "1px solid #333",
        padding: "5px",
        color: "#000",
        textDecration: "none",
      }}>
        back to home
      </Link>
    </div>
  )
}