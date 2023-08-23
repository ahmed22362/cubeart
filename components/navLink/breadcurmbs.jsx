"use client"

import Link from "next/link";
import { Breadcrumb } from "react-bootstrap"
    const breadcrumbLinks = [
        { title: "Home", url: "/" },
        { title: "Projects", url: "/projects" },
        { title: "Cat Decor", url: "/cat-decor", active: true }
    ];
export default function NavLinks() {
    return (
        <nav className="navbar">
            <Breadcrumb>
            {breadcrumbLinks.map((link, index) => (
                    <Breadcrumb.Item key={index} active={link.active}>
                        {link.active ? (
                            link.title
                        ) : (
                            <Link href={link.url}>{link.title}</Link>
                        )}
                    </Breadcrumb.Item>
                ))}
            </Breadcrumb>
        </nav>
    );
}