import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { facilities } from '../../data/facilities'
import './Facilities.css'

const categories = ['All', 'Water', 'Dining', 'Sports', 'Entertainment', 'Private']

export default function Facilities() {
  const [activecat, setActivecat] = useState('All')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const filtered = activecat === 'All' ? facilities.slice(0, 8) : facilities.filter(f => f.category === activecat).slice(0, 8)

  return (
    <section className="facilities-section section" ref={ref}>
      <div className="facilities-bg-grid" />

      <div className="container">
        {/* Header */}
        <motion.div
          className="facilities-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Elite Lifestyle</div>
          <h2 className="facilities-title">
            Straight of <span className="text-gradient-gold">Art</span>
          </h2>
          <p className="facilities-sub">Exclusively curated amenities for our distinguished members</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="facilities-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`facilities-tab ${activecat === cat ? 'active' : ''}`}
              onClick={() => setActivecat(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="facilities-grid">
          {filtered.map((facility, i) => (
            <motion.div
              key={facility.id}
              className="facility-card"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <div className="facility-img-wrap">
                <img
                  src={facility.image}
                  alt={facility.name}
                  loading="lazy"
                />
                <div className="facility-img-overlay" />
                <span className="facility-category">{facility.categoryLabel}</span>
              </div>
              <div className="facility-info glass-card">
                <h3 className="facility-name">{facility.name}</h3>
                <p className="facility-desc">{facility.description}</p>
                <div className="facility-tagline">{facility.tagline}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="facilities-cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link to="/facilities" className="facilities-cta-link">
            <span>Explore All Amenities</span>
            <div className="facilities-cta-circle">
              <ArrowRight size={18} />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
