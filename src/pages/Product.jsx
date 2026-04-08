import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import screenshotDashboard from '../assets/screenshot-dashboard.png'
import screenshotLogin from '../assets/screenshot-login.png'
import icon from '../assets/icon.png'
import styles from './Product.module.css'

function useInView() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.12 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function Fade({ children, delay = 0, className = '' }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      className={`${styles.fade} ${visible ? styles.fadeIn : ''} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

const SPECS = [
  { label: 'Platform', value: 'macOS · Windows' },
  { label: 'Gmail access', value: 'Read-only OAuth 2.0' },
  { label: 'Supported platforms', value: 'Zoom · Google Meet · Teams' },
  { label: 'Data storage', value: 'None — fully local' },
  { label: 'Current version', value: '1.0.0 (Beta)' },
  { label: 'Upcoming', value: 'AI transcription · Summaries' },
]

export default function Product() {
  return (
    <main className={styles.page}>

      {/* PRODUCT HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Fade>
            <div className={styles.productBadge}>
              <img src={icon} alt="XEOBIT" className={styles.productIcon} />
              <span>XEOBIT Connect AI</span>
            </div>
          </Fade>
          <Fade delay={0.1}>
            <h1>Your meetings,<br /><em>always in sight.</em></h1>
          </Fade>
          <Fade delay={0.2}>
            <p className={styles.heroSub}>
              A focused desktop app that connects to your Gmail account and displays all your meeting invites in one clean dashboard. No noise, no fluff — just what matters next.
            </p>
          </Fade>
          <Fade delay={0.3}>
            <div className={styles.heroActions}>
              <a href="/#waitlist" className={styles.btnPrimary}>Get early access</a>
              <Link to="/" className={styles.btnGhost}>← Back to home</Link>
            </div>
          </Fade>
        </div>
      </section>

      {/* MAIN SCREENSHOT */}
      <section className={styles.mainScreenshot}>
        <Fade>
          <div className={styles.screenshotWrap}>
            <div className={styles.screenshotBar}>
              <span className={styles.dot} style={{background:'#ff6058'}} />
              <span className={styles.dot} style={{background:'#ffbd2e'}} />
              <span className={styles.dot} style={{background:'#28c941'}} />
              <span className={styles.screenshotTitle}>XEOBIT Connect AI</span>
            </div>
            <img src={screenshotDashboard} alt="XEOBIT dashboard" className={styles.screenshotImg} />
          </div>
        </Fade>
      </section>

      {/* SIGN IN FLOW */}
      <section className={styles.signInSection}>
        <div className={styles.signInGrid}>
          <Fade delay={0.05}>
            <div className={styles.signInText}>
              <span className={styles.label}>Getting started</span>
              <h2>One click to connect</h2>
              <p>Sign in with your Google account and XEOBIT immediately begins scanning your inbox for meeting invites. The whole process takes under a minute.</p>
              <ul className={styles.signInPoints}>
                <li>
                  <span className={styles.tick}>✓</span>
                  <span>Read-only Gmail access — we can never modify your inbox</span>
                </li>
                <li>
                  <span className={styles.tick}>✓</span>
                  <span>No email content is stored anywhere</span>
                </li>
                <li>
                  <span className={styles.tick}>✓</span>
                  <span>Disconnect anytime from your Google account settings</span>
                </li>
              </ul>
            </div>
          </Fade>
          <Fade delay={0.15}>
            <div className={styles.signInImgWrap}>
              <img src={screenshotLogin} alt="XEOBIT sign in screen" className={styles.signInImg} />
            </div>
          </Fade>
        </div>
      </section>

      {/* SPECS */}
      <section className={styles.specsSection}>
        <Fade>
          <span className={styles.label}>Technical specs</span>
          <h2>What's under the hood</h2>
        </Fade>
        <Fade delay={0.1}>
          <div className={styles.specsGrid}>
            {SPECS.map(s => (
              <div className={styles.specRow} key={s.label}>
                <span className={styles.specLabel}>{s.label}</span>
                <span className={styles.specValue}>{s.value}</span>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      {/* ROADMAP */}
      <section className={styles.roadmapSection}>
        <Fade>
          <div className={styles.roadmapInner}>
            <span className={styles.labelLight}>Roadmap</span>
            <h2 className={styles.titleLight}>What's coming next</h2>
            <div className={styles.roadmapGrid}>
              {[
                { phase: 'Now', status: 'live', items: ['Gmail meeting detection', 'Zoom · Meet · Teams links', 'Desktop app (Mac + Windows)', 'Secure OAuth login'] },
                { phase: 'Next', status: 'soon', items: ['AI meeting transcription', 'Auto-generated summaries', 'Action item extraction', 'Smart pre-meeting reminders'] },
                { phase: 'Later', status: 'planned', items: ['Multi-account support', 'Calendar integrations', 'Team dashboards', 'Mobile companion app'] },
              ].map((phase, i) => (
                <Fade key={phase.phase} delay={i * 0.1}>
                  <div className={styles.roadmapCard}>
                    <div className={styles.roadmapHeader}>
                      <span className={styles.phaseLabel}>{phase.phase}</span>
                      <span className={`${styles.phaseBadge} ${styles[phase.status]}`}>{phase.status}</span>
                    </div>
                    <ul className={styles.roadmapItems}>
                      {phase.items.map(item => (
                        <li key={item}>
                          <span className={`${styles.phaseDot} ${styles[phase.status + 'Dot']}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </Fade>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <Fade>
          <h2>Ready to get started?</h2>
          <p>Join the waitlist for early access and be the first to try the AI features.</p>
          <a href="/#waitlist" className={styles.btnPrimary}>Join the waitlist</a>
        </Fade>
      </section>
    </main>
  )
}
