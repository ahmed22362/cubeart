"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import Cookies from "universal-cookie";

import Logout from "@/modules/logout/logout";

export default function DropDown({ openModal }) {
  const cookie = new Cookies();

  const user = cookie.get("user-data");

  return (
    <>
      <div className={"dropdown " + styles.dropDown}>
        <i
          className="bi bi-person dropdown-toggle"
          style={{ cursor: "pointer" }}
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></i>
        <ul
          className={"dropdown-menu " + styles.dropUl}
          style={{ right: "0", padding: "10px", left: "0%", top: "48px" }}
        >
          {user ? (
            <>
              <li className={styles.dropDownLink}>
                <Link className={"dropdown-item"} href={"/editprofile/cart"}>
                  <i className="bi bi-cart3"></i>
                  Cart
                </Link>
              </li>

              <li className={styles.dropDownLink}>
                <Link className="dropdown-item" href="/editprofile/wishlist">
                  <i className="bi bi-heart"></i>
                  Wishlist
                </Link>
              </li>
              <li className={styles.dropDownLink}>
                <Link className="dropdown-item" href="/editprofile/security">
                  <i className="bi bi-person-gear"></i>
                  Edit Profile
                </Link>
              </li>
              <li className={styles.buttonLi}>
                <button className={styles.logout} onClick={() => Logout()}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className={styles.buttonLi}>
                <button className={styles.login} onClick={openModal}>
                  Login
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
      <li className={`${styles.sayHi} ${user ? "d-flex" : ""}`}>
        {user ? `Hi, ${user?.name.split(" ")[0] ?? ""} \u{1F44B}` : <></>}
      </li>
    </>
  );
}
