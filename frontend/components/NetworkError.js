import React from "react";
import styles from "../styles/NetworkError.module.css";

export default function NetworkError() {
  return (
    <div className={styles.networkErrorContainer}>
      <p className={styles.networkErrorText}>
        Please connect to the Mainnet network
      </p>
    </div>
  );
}
