"use client"

import { NavLinks } from '@/components';

export default function RootLayout({ children }) {
    return (
       <>
        <nav aria-label="breadcrumb" className="navbar navbar-expand-lg my-2" style={{backgroundColor: "#ECF5FA"}}>
            <div className="container">
                <NavLinks route={"/products"} childRoute={`/products/id`} />
            </div>
        </nav>
            {children}
       </>
    );
}