"use client";

import Map from "./../Map/Map";
import FooterContent from "./../footerContent/footerContent";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={"px-5 py-5 " + styles.footerSection}>
      <FooterContent />
      <Map />
    </footer>
  );
}
