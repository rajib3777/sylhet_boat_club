import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ecMembers } from '../../data/members'
import './ECMembers.css'

export default function ECMembers() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="ec-section section" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="ec-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Governance</div>
          <h2 className="ec-title">
            Executive <span className="text-gradient-gold">Committee</span>
          </h2>
          <div className="gold-line" />
        </motion.div>

        {/* Grid */}
        <div className="ec-grid">
          {ecMembers.slice(0, 6).map((member, i) => {
            const isPresident = member.role === 'President'
            return (
              <motion.div
                key={member.id}
                className={`ec-card ${isPresident ? 'has-image' : 'no-image'}`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                {isPresident ? (
                  <>
                    <div className="ec-img-wrap gold-border-wrapper">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                      />
                      <div className="ec-img-overlay" />
                      <span className="ec-badge">{member.id}</span>
                    </div>
                    <div className="ec-info glass-card">
                      <span className="ec-role">{member.role}</span>
                      <h3 className="ec-name">{member.name}</h3>
                      <p className="ec-portfolio">{member.portfolio}</p>
                    </div>
                  </>
                ) : (
                  <div className="ec-info glass-card ec-text-card">
                    <span className="ec-badge-inline">{member.id}</span>
                    <span className="ec-role">{member.role}</span>
                    <h3 className="ec-name">{member.name}</h3>
                    <p className="ec-portfolio">{member.portfolio}</p>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>


        {/* CTA */}
        <motion.div
          className="ec-cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link to="/ec-members" className="btn btn-gold ec-btn">
            View All Board Members
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
