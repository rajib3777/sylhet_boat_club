import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { affiliatedClubs } from '../../data/appData'
import './AffiliatedClubs.css'

export default function AffiliatedClubs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="affiliated-section section" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="affiliated-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Global Network</div>
          <h2 className="affiliated-title">
            Affiliated <span className="text-gradient-gold">Clubs</span>
          </h2>
          <p className="affiliated-sub">Enjoy reciprocal privileges at prestigious clubs nationwide</p>
        </motion.div>

        {/* Marquee Row 1 */}
        <div className="affiliated-marquee-wrap">
          <div className="affiliated-marquee">
            {[...affiliatedClubs, ...affiliatedClubs].map((club, i) => (
              <div key={i} className="club-marquee-card glass-card">
                <span className="club-icon">{club.icon}</span>
                <div className="club-details">
                  <h4>{club.name}</h4>
                  <p>{club.location} &bull; Since {club.since}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (Reverse) */}
        <div className="affiliated-marquee-wrap reverse mt-6">
          <div className="affiliated-marquee reverse">
            {[...affiliatedClubs, ...affiliatedClubs].reverse().map((club, i) => (
              <div key={i} className="club-marquee-card glass-card">
                <span className="club-icon">{club.icon}</span>
                <div className="club-details">
                  <h4>{club.name}</h4>
                  <p>{club.location} &bull; Since {club.since}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="affiliated-cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link to="/affiliated-clubs" className="btn btn-outline">
            View All Affiliations
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
