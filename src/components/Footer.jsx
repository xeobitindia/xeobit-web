import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>
            XEO<em>BIT</em>
          </span>
          <p>Your meeting command center.</p>
        </div>
        <div className={styles.links}>
          <div className={styles.col}>
            <span className={styles.colTitle}>Product</span>
            <Link to="/xeobit">XEOBIT Connect AI</Link>
            <a href="/#features">Features</a>
            <a href="/#how">How it works</a>
          </div>
          <div className={styles.col}>
            <span className={styles.colTitle}>Company</span>
            <a href="/#waitlist">Early access</a>
            <a href="https://dashboard.xeobitindia.in/privacy-policy/">
              Privacy policy
            </a>
            <a href="https://dashboard.xeobitindia.in/terms/">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} XEOBIT India. All rights reserved.</span>
        <span>Built for Efficiency.</span>
      </div>
    </footer>
  );
}
