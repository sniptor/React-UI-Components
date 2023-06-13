import React from 'react'
import styles from './FlamingoFooter.module.css'
import { ReactComponent as AppStore } from "./assets/AppStore.svg";
import { ReactComponent as GooglePlay } from "./assets/GooglePlay.svg";

function FlamingoFooter() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterContainer}>
        <div className={styles.Col}>
          <h1 className={styles.ColHeader}>Help center</h1>
          <div className={styles.FooterLinksContainer}>
            <h1 className={styles.FooterLink}>Frequently Asked Questions</h1>
            <h1 className={styles.FooterLink}>Driver Training Platform</h1>
            <h1 className={styles.FooterLink}>Support</h1>
          </div>
          <div className={styles.FooterBottom}>
            <h1 className={styles.CopyrightText}>Sniptor 2023 ©</h1>
          </div>
        </div>
        <div className={styles.Col}>
          <h1 className={styles.ColHeader}>Links</h1>
          <div className={styles.FooterLinksContainer}>
            <h1 className={styles.FooterLink}>Privacy</h1>
            <h1 className={styles.FooterLink}>Cookies</h1>
            <h1 className={styles.FooterLink}>About</h1>
          </div>
        </div>
        <div className={styles.Col}>
          <h1 className={styles.ColHeader}>Download the application</h1>
          <div className={styles.FooterIconLinksContainer}>
            <AppStore className={styles.AppStoreIcon} />
            <GooglePlay className={styles.GooglePlayIcon} />
          </div>
        </div>
      </div>
      <div className={styles.FooterBottom1}>
        <h1 className={styles.CopyrightText}>Sniptor 2023 ©</h1>
      </div>
    </footer>
  );
}

export default FlamingoFooter