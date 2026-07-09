import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { clubInfo } from '../../data/appData'
import './MembershipCTA.css'

const tiers = [
  {
    name: 'Ordinary Member',
    price: 'Contact for Fee',
    features: [
      'Access to boat riding facilities',
      'Entry to all standard restaurants & cafes',
      'Use of tennis and squash courts',
      'Standard invitations to club social events',
    ],
  },
  {
    name: 'Life Member',
    price: 'Lifetime Prestige',
    featured: true,
    features: [
      'Lifetime absolute club access',
      'Priority yacht & boat reservation privileges',
      'Access to exclusive VIP Velvet Lounge',
      'Executive boardroom booking rights',
      'Full reciprocal benefits at affiliated clubs',
      'Special invitations to premium gala dinners',
    ],
  },
  {
    name: 'Associate Member',
    price: 'Contact for Fee',
    features: [
      'Access to standard club facilities',
      'Billiards & card room access',
      'Standard dining discount rates',
      'Invitation to seasonal events',
    ],
  },
]

export default function MembershipCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="membership" className="membership-section section" ref={ref}>
      <div className="membership-bg-glow" />
      <div className="container">
        {/* Header */}
        <motion.div
          className="membership-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Join The Legacy</div>
          <h2 className="membership-title">
            Elite Club <span className="text-gradient-gold">Membership</span>
          </h2>
          <p className="membership-sub">Enjoy unparalleled prestige and status on the banks of the Sari Gowain River, Sylhet</p>
        </motion.div>

        {/* Tiers Grid */}
        <div className="membership-grid">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              className={`membership-card glass-card ${tier.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              {tier.featured && <div className="card-badge">Most Prestigious</div>}
              <div className="card-header">
                <h3>{tier.name}</h3>
                <div className="price-tag text-gradient-gold">{tier.price}</div>
              </div>
              <div className="card-divider" />
              <ul className="card-features">
                {tier.features.map((feat, idx) => (
                  <li key={idx}>
                    <Check size={14} className="check-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/membership"
                className={`btn ${tier.featured ? 'btn-gold' : 'btn-outline'} card-btn`}
              >
                Apply for Membership
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
