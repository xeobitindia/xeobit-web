import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import screenshotDashboard from '../assets/screenshot-dashboard.png'
import screenshotDashboard2 from '../assets/dashboard.png'
import screenshotLogin from '../assets/screenshot-login.png'
import styles from './Home.module.css'

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

function Section({ children, className = '' }) {
  const [ref, visible] = useInView()
  return (
    <div ref={ref} className={`${styles.reveal} ${visible ? styles.visible : ''} ${className}`}>
      {children}
    </div>
  )
}

const FEATURES = [
  { icon: '📥', title: 'Auto-detected invites', desc: 'Connects to Gmail and automatically pulls every meeting invite — no manual entry, no missed events.' },
  { icon: '🗂️', title: 'Unified timeline', desc: 'Today, this week, upcoming — all in one dashboard. Filter by date, platform, or organiser in seconds.' },
  { icon: '🔒', title: 'Read-only & private', desc: 'XEOBIT only reads your Gmail. It never modifies, stores, or shares your email data with anyone.' },
  { icon: '⚡', title: 'Instant overview', desc: 'Open the app and know your full day in under five seconds. No digging through threads.' },
  { icon: '🖥️', title: 'Desktop-native', desc: 'A lightweight desktop app — always accessible, no tab hunting, no browser fatigue.' },
  { icon: '🔗', title: 'Any platform', desc: 'Google Meet, Zoom, Teams — XEOBIT detects meeting links across all platforms automatically.' },
]

const STEPS = [
  { num: '1', title: 'Connect your Gmail', desc: 'Sign in with Google — a one-time OAuth flow. XEOBIT only requests read-only access to your inbox.' },
  { num: '2', title: 'XEOBIT scans your inbox', desc: 'The app automatically identifies and organises all meeting invites, extracting times, links, and attendees.' },
  { num: '3', title: 'See your day clearly', desc: 'Your unified meeting dashboard is ready. Always up to date with your latest invites.' },
]

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleWaitlist = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <main>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Now available for Gmail
            </div>
            <h1>All your meetings,<br /><em>one clear view.</em></h1>
            <p className={styles.heroSub}>
              XEOBIT pulls every meeting invite from your Gmail and surfaces them in a clean, unified dashboard — so nothing slips through the cracks.
            </p>
            <div className={styles.heroActions}>
              <Link to="/xeobit" className={styles.btnPrimary}>See the product</Link>
              <a href="#how" className={styles.btnGhost}>How it works →</a>
            </div>
          </div>

          <div className={styles.heroScreenshots}>
            <div className={styles.screenshotMain}>
              <img src={screenshotDashboard} alt="XEOBIT dashboard" />
            </div>
            <div className={styles.screenshotSub}>
              <img src={screenshotLogin} alt="XEOBIT sign in" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.featuresSection} id="features">
        <Section>
          <p className={styles.sectionLabel}>Why XEOBIT</p>
          <h2 className={styles.sectionTitle}>Built for teams that move fast</h2>
          <p className={styles.sectionSub}>Small businesses don't need another bloated calendar tool. XEOBIT is focused, fast, and does one thing really well.</p>
        </Section>
        <div className={styles.featuresGrid}>
          {FEATURES.map((f, i) => (
            <Section key={f.title}>
              <div className={styles.featureCard} style={{ animationDelay: `${i * 0.06}s` }}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </Section>
          ))}
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className={styles.screenshotsSection}>
        <Section>
          <p className={styles.sectionLabel}>The product</p>
          <h2 className={styles.sectionTitle}>See it in action</h2>
          <p className={styles.sectionSub}>A clean, no-nonsense interface built for busy professionals who just want to know what's next.</p>
        </Section>
        <Section className={styles.screenshotsGrid}>
          <div className={styles.screenshotCard}>
            <div className={styles.screenshotLabel}>Dashboard view</div>
            <img src={screenshotDashboard} alt="XEOBIT dashboard showing today's meetings" className={styles.screenshotFull} />
          </div>
          <div className={styles.screenshotCard}>
            <div className={styles.screenshotLabel}>Dashboard view</div>
            <img src={screenshotDashboard2} alt="XEOBIT dashboard showing today's meetings" className={styles.screenshotFull} />
          </div>
          <div className={styles.screenshotCard}>
            <div className={styles.screenshotLabel}>Sign-in screen</div>
            <img src={screenshotLogin} alt="XEOBIT sign in screen" className={styles.screenshotFull} />
          </div>
        </Section>
      </section>

      {/* HOW IT WORKS */}
      <section className={styles.howSection} id="how">
        <div className={styles.howInner}>
          <Section>
            <p className={`${styles.sectionLabel} ${styles.labelLight}`}>How it works</p>
            <h2 className={`${styles.sectionTitle} ${styles.titleLight}`}>Up and running<br />in minutes</h2>
            <p className={`${styles.sectionSub} ${styles.subLight}`}>Three steps. No configuration needed after setup.</p>
          </Section>
          <div className={styles.steps}>
            {STEPS.map((s, i) => (
              <Section key={s.num}>
                <div className={styles.step} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className={styles.stepNum}>{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className={styles.soonSection}>
        <Section>
          <div className={styles.soonGrid}>
            <div>
              <span className={styles.soonBadge}>Coming soon</span>
              <h2 className={styles.sectionTitle}>Even smarter,<br />with AI</h2>
              <p className={styles.sectionSub}>The next version of XEOBIT brings AI-powered features designed to give you back your time.</p>
              <div className={styles.soonItems}>
                {[
                  { icon: '🎙️', title: 'AI meeting transcription', desc: 'Auto-transcribe your calls so you can stay present instead of furiously taking notes.' },
                  { icon: '📝', title: 'Smart summaries', desc: 'Crisp summaries of every meeting — decisions made, action items, and next steps.' },
                  { icon: '🔔', title: 'Smart reminders', desc: 'Context-aware nudges that remind you what you need before each meeting starts.' },
                ].map(item => (
                  <div className={styles.soonItem} key={item.title}>
                    <div className={styles.soonIcon}>{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.soonVisual}>
              <svg viewBox="0 0 400 340" xmlns="http://www.w3.org/2000/svg" fill="none">
                <circle cx="200" cy="170" r="130" stroke="#c4522a" strokeWidth="0.5" strokeDasharray="5 7" opacity="0.25"/>
                <circle cx="200" cy="170" r="92" stroke="#c4522a" strokeWidth="0.5" strokeDasharray="5 7" opacity="0.35"/>
                <circle cx="200" cy="170" r="54" stroke="#c4522a" strokeWidth="0.5" opacity="0.45"/>
                <circle cx="200" cy="170" r="22" fill="#c4522a" opacity="0.1"/>
                <circle cx="200" cy="170" r="9" fill="#c4522a"/>
                <circle cx="200" cy="40" r="6" fill="#d96b3f"/>
                <circle cx="322" cy="122" r="4.5" fill="#d96b3f" opacity="0.7"/>
                <circle cx="290" cy="280" r="4" fill="#d96b3f" opacity="0.5"/>
                <circle cx="80" cy="215" r="4.5" fill="#d96b3f" opacity="0.6"/>
                <circle cx="110" cy="78" r="3.5" fill="#d96b3f" opacity="0.4"/>
                <g transform="translate(162, 162)">
                  <rect x="0" y="-20" width="5" height="40" rx="2.5" fill="#c4522a" opacity="0.5"/>
                  <rect x="9" y="-12" width="5" height="24" rx="2.5" fill="#c4522a" opacity="0.4"/>
                  <rect x="18" y="-28" width="5" height="56" rx="2.5" fill="#c4522a" opacity="0.7"/>
                  <rect x="27" y="-16" width="5" height="32" rx="2.5" fill="#c4522a" opacity="0.5"/>
                  <rect x="36" y="-9" width="5" height="18" rx="2.5" fill="#c4522a" opacity="0.35"/>
                </g>
                <text x="200" y="256" textAnchor="middle" fontFamily="'DM Serif Display', Georgia, serif" fontSize="10.5" fill="#c4522a" opacity="0.5">AI transcription — coming soon</text>
              </svg>
            </div>
          </div>
        </Section>
      </section>

      {/* WAITLIST CTA */}
      <section className={styles.ctaSection} id="waitlist">
        <Section>
          <h2>Be the first to know</h2>
          <p>Join the waitlist and get early access when the AI features launch.</p>
          {submitted ? (
            <div className={styles.successMsg}>
              ✓ You're on the list — we'll be in touch soon.
            </div>
          ) : (
            <form className={styles.ctaForm} onSubmit={handleWaitlist}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit">Join waitlist</button>
            </form>
          )}
        </Section>
      </section>
    </main>
  )
}
