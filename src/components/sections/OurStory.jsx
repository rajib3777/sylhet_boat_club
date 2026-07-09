import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { clubInfo, stats as clubStats } from '../../data/appData'
import './OurStory.css'

export default function OurStory() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="story-section section" ref={ref}>
      {/* Ambient background */}
      <div className="story-bg-glow story-glow-1" />
      <div className="story-bg-glow story-glow-2" />

      <div className="container">
        <div className="story-grid">
          {/* Image Column */}
          <motion.div
            className="story-images"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Main Image */}
            <div className="story-main-img gold-border-wrapper">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=85"
                alt="Sylhet Boat Club Waterfront"
                loading="lazy"
              />
              <div className="story-img-overlay" />
            </div>

            {/* Floating secondary image */}
            <motion.div
              className="story-float-img"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80"
                alt="Club Restaurant"
                loading="lazy"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="story-badge glass-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
            >
              <div className="badge-years">
                <span className="badge-num">2026</span>
                <span className="badge-unit">Launch</span>
              </div>
              <div className="badge-divider" />
              <div className="badge-members">
                <p className="badge-label" style={{ marginTop: 0 }}>Sari Gowain River</p>
                <p className="badge-label" style={{ color: '#c9a84c' }}>Sylhet, Bangladesh</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="story-content"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="story-label section-label">Our Heritage</div>

            <h2 className="story-heading">
              Our <span className="text-gradient-gold">Story</span>
            </h2>

            <div className="story-text">
              <p className="story-quote">
                {clubInfo.tagline} — Nestled on the peaceful banks of the majestic Sari Gowain River.
              </p>
              <p>
                There are very few places in the world where nature, culture, and opportunity come together as effortlessly as Sylhet.
              </p>
              <p>
                Blessed with emerald tea gardens, crystal-clear rivers, rolling hills, and enchanting haors, Sylhet has long been known as Bangladesh's premier tourism destination.
              </p>
              <p>
                It is the cherished homecoming of millions of Non-Resident Bangladeshis (NRBs), a thriving center of commerce powered by natural gas and industry, and a region celebrated for its warmth, hospitality, and timeless traditions.
              </p>
            </div>

            <div className="story-features">
              {[
                { num: '2026', label: 'Est. Year' },
                { num: '3 km', label: 'From Airport' },
                { num: '15+', label: 'Elite Facilities' },
              ].map(f => (
                <div key={f.label} className="story-feature">
                  <span className="story-feature-num">{f.num}</span>
                  <span className="story-feature-label">{f.label}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="story-link">
              <span>Read Our Legacy</span>
              <div className="story-link-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
