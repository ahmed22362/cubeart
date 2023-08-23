import Link from "next/link";
import styles from "./navbar.module.css"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <div className="logo-div">
          <Link className="navbar-brand" href="/">
            <img src="/logo.png" alt="" />
          </Link>
          <h2
            style={{
              color: "#292D32",
              fontFamily: "Poppins",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "normal",
            }}
          >
            <Link className="navbar-brand" style={{fontSize: "32px"}} href="/">
              CuBuild
            </Link>
          </h2>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
            <form>
              <div
                className="input-group"
                style={{
                  borderRadius: "8px",
                }}
              >
                <span
                  className="input-group-text"
                  id="basic-addon1"
                  style={{
                    backgroundColor: "#ECF5FA",
                    border: "0"
                  }}
                >
                  <img src="/search-normal.svg" alt="" />
                </span>
                <input
                  type="text"
                  style={{
                    border: "0",
                    backgroundColor: "#ECF5FA",
                  }}
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
              </div>
            </form>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 end-of-nav">
            <button className="nav-btn">Print your design</button>
            <div>
                <i className="bi bi-cart3"></i>
            </div>
            <div className="lang-section">
              <i className="bi bi-globe2"></i>
              <span>Arabic</span>
            </div>
            <div>
              <div className="dropdown">
                <i className="bi bi-person dropdown-toggle" style={{cursor: "pointer"}} role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>

                <ul className="dropdown-menu" style={{right: "0", padding: "10px"}}>
                  <li className={styles.dropDownLink}>
                      <i className="bi bi-person-gear"></i>
                      <Link className="dropdown-item" href="#">Edit Profile</Link>
                    </li>
                  <li className={styles.dropDownLink}>
                    <i className="bi bi-heart"></i>
                    <Link className="dropdown-item" href="#">Wishlist</Link>
                  </li>
                  <li className={styles.dropDownLink}>
                    <i className="bi bi-cart3"></i>
                    <Link className="dropdown-item" href="#">Cart</Link>
                  </li>
                  <li className={styles.buttonLi}>
                    <button className="btn btn-danger shadow-sm">Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
