import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import icon from '../assets/icon.png'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo}>
        <img src={icon} alt="XEOBIT" className={styles.logoImg} />
        <span className={styles.logoText}>XEO<em>BIT</em></span>
      </Link>

      <ul className={`${styles.links} ${menuOpen ? styles.open : styles.close}`}>
        <li><Link to="/" className={location.pathname === '/' ? styles.active : ''}>Home</Link></li>
        <li><Link to="/xeobit" className={location.pathname === '/xeobit' ? styles.active : ''}>Product</Link></li>
        <li><a href="/#features" onClick={()=>setMenuOpen(false)}>Features</a></li>
        <li><a href="/#how" onClick={()=>setMenuOpen(true)}>How it works</a></li>
      </ul>

      <a href="/#waitlist" className={styles.cta}>Get early access</a>

      <button
        className={styles.burger}
        onClick={()=>setMenuOpen(o=>!o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
