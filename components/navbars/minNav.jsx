import Link from "next/link";
import styles from './navbar.module.css'

export default function MinNav() {
    return(
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#429ECA"}}>
        <div className="container">
            <ul className={"navbar-nav me-auto mb-2 mb-lg-0 ul-links " + styles.ulMinLinks}>
              <li className="nav-item">
                <Link href={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link href={'#services'} className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link href={'#'} className="nav-link">Products</Link> 
              </li>
              <li className="nav-item">
                <Link href={'/projects'} className="nav-link">Projects</Link> 
              </li>
            </ul>
          </div>
      </nav>
    );
}