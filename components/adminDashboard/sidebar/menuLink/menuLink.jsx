"use client";

import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        (pathname === item.path ||
          (pathname.includes(item.path) && item.path !== "/dashboard")) &&
        styles.active
      }`}
    >
      <i className={item.icon}></i>
      <span> {item.title}</span>
    </Link>
  );
};
export default MenuLink;
