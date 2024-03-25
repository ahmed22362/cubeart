"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <i className="pi pi-search" />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <i className="pi pi-comment" style={{ fontSize: "20px" }} />
          <i className="pi pi-bell" style={{ fontSize: "20px" }} />
          <i className="pi pi-globe" style={{ fontSize: "20px" }} />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
