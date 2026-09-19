import React from 'react'
import icon from "../assets/icon.png";
import styles from "./Navbar.module.css";

const Logo = ({logo=true, className=""}) => {
  return (
    <div className={className}>
      {logo==true&&<img src={icon} alt="XEOBIT" className={styles.logoImg} />}
      <span className={styles.logoText}>
        XEO<em>BIT</em>
      </span>
    </div>
  );
}

export default Logo