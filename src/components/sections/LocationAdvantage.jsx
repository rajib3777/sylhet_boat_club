import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { destinations, clubInfo } from '../../data/appData'
import './LocationAdvantage.css'

export default function LocationAdvantage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="location-section section" ref={ref}>
      <div className="location-bg-glow" />
      <div className="container">
        <div className="location-grid">
          {/* Info Side */}
          <motion.div
            className="location-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="section-label">Prime Location</div>
            <h2 className="location-title">
              Gateway to <br />
              <span className="text-gradient-gold">Extraordinary Wonders</span>
            </h2>
            <p className="location-sub">
              Positioned strategically on the serene riverbanks of the Sari Gowain River, {clubInfo.name} offers both secluded privacy and effortless connectivity to the region's most iconic natural attractions.
            </p>
            <div className="gold-border-wrapper" style={{ borderRadius: '1.5rem', overflow: 'hidden', marginTop: '1.5rem' }}>
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
                alt="Sylhet River View Sunset"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </motion.div>

          {/* Destinations Side */}
          <div className="destinations-grid">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                className="destination-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="destination-icon">{dest.icon}</div>
                <h3 className="destination-name">{dest.name}</h3>
                <span className="destination-time">{dest.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
