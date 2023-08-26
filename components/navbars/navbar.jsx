import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <div className="logo-div">
          <Link className="navbar-brand" href="/">
            <img src="logo.png" alt="logo" />
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
            <Link className="navbar-brand" href="/">
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
                  padding:'0px'
                }}
              >
                <span
                  className="input-group-text"
                  id="basic-addon1"
                  style={{
                    backgroundColor: "#ECF5FA",
                    border: "0",
                    padding:'0p'
                  }}
                >
                  <img src="search-normal.svg" alt="" />
                </span>
                <input
                  type="text"
                  style={{
                    border: "0",
                    backgroundColor: "#ECF5FA",
                    padding: '0px'
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
              <span>arabic</span>
            </div>
            <div>
              <i className="bi bi-person"></i>
              <i className="bi bi-arrow-down-short"></i>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
