import Link from "next/link";

export default function MinNav() {
    return(
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#429ECA"}}>
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ul-links">
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
                <Link href={'#'} className="nav-link">Portfolio</Link> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}