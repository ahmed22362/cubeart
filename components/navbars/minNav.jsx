import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";

export default function MinNav() {
  const pathName = usePathname();
  const isAdminLogin = pathName.startsWith("/cuAuth");
  const isAdminDashboard = pathName.startsWith("/dashboard");
  if (!(isAdminDashboard || isAdminLogin)) {
    return (
      <nav
        className={"navbar navbar-expand-lg " + styles.minNav}
        style={{ backgroundColor: "#429ECA" }}
      >
        <div className={"container " + styles.containerStyle}>
          <ul
            className={
              "navbar-nav me-auto mb-2 mb-lg-0 ul-links " + styles.ulMinLinks
            }
          >
            <li className="nav-item">
              <Link href={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/#services"} className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/products"} className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/projects"} className="nav-link">
                Projects
              </Link>
            </li>
          </ul>
          <ul
            className={
              "navbar-nav me-auto mb-lg-0 ul-links " + styles.iconsLinks
            }
          >
            <li className="nav-item">
              <Link href={"/"} className="nav-link">
                <i className="bi bi-house-door"></i>
                <span>Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/#services"} className="nav-link">
                <i className="bi bi-layout-wtf"></i>
                <span>Services</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/products"} className="nav-link">
                <i className="bi bi-shop"></i>
                <span>Products</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/projects"} className="nav-link">
                <i className="bi bi-palette2"></i>
                <span>Projects</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
