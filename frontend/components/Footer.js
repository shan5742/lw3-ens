import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with &#10084; by
      <a className={styles.footerLink} href="https://twitter.com/shan8851">
        Shan8851
      </a>
    </footer>
  );
}
