"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { useState } from "react";
import AuthModal from "../Auth/AuthComponent";
import dynamic from "next/dynamic";
import Search from "@/components/search/search";
import Cookies from 'universal-cookie';
import {useRouter} from "next/navigation";

const NoSSR = dynamic(() => import('./dropDown'), { ssr: false })

export default function Navbar() {
  const cookie = new Cookies();
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const printYourDesign = () => {
    if(cookie.get('token')) {
      router.replace('/upload')
    } else {
      setShowModal(true)
    }
  }


  return (
    <nav className={"navbar navbar-expand-lg bg-white " + styles.mainNav}>
      <div className={"container " + styles.containerSm}>
        <div className="logo-div">
          <Link className="navbar-brand" href="/">
            <Image
              src={"/logo.png"}
              width={"48"}
              height={"48"}
              placeholder='blur'
              blurDataURL={"/logo.png"}
              alt={"logo"}
            />
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
            <Link
              className="navbar-brand"
              style={{ fontSize: "32px" }}
              href="/"
            >
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
        <div
          className={"collapse navbar-collapse " + styles.collapseStyles}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100">
            <Search />
          </ul>
          <ul
            className={
              "navbar-nav me-auto mb-2 mb-lg-0 end-of-nav " +
              styles.rightSection
            }
          >
              <div className={styles.btnWithIcons}>
                <div onClick={() => printYourDesign()}>
                  <button className={styles.navBtn}>Print your design</button>
                </div>
                <div className={styles.icons}>
                  <>
                    <NoSSR openModal={handleModalOpen} />
                  </>
                </div>
            </div>
          </ul>
        </div>
      </div>
      <AuthModal show={showModal} closeModal={handleModalClose} />
    </nav>
  );
}
