import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { presidentMessage } from '../../data/appData'
import './PresidentMessage.css'

export default function PresidentMessage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="president-section section" ref={ref}>
      <div className="president-bg-glow" />
      <div className="container">
        <div className="president-grid">
          {/* Image */}
          <motion.div
            className="president-img-col"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="president-img-wrap">
              <img
                src={presidentMessage.photo}
                alt={`President ${presidentMessage.name}`}
                loading="lazy"
                style={{ objectPosition: 'top center' }}
              />
              <div className="president-img-overlay" />
              <div className="president-nameplate">
                <h3>{presidentMessage.name}</h3>
                <p>{presidentMessage.title}, {presidentMessage.organization}</p>
              </div>
            </div>
            {/* Decorative frame */}
            <div className="president-frame" />
          </motion.div>

          {/* Content */}
          <motion.div
            className="president-content"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-label">Leadership Insights</div>

            <h2 className="president-heading">
              Message From <br />
              <span className="text-gradient-gold">The President</span>
            </h2>

            <div className="president-gold-bar" />

            <blockquote className="president-quote">
              "{presidentMessage.shortQuote}"
            </blockquote>

            <p className="president-body">
              Inspired by the breathtaking beauty of Sylhet, our vision is to create a world-class riverside club on the banks of the Sari Gowain River that reflects the pride, hospitality, and vibrant spirit of this remarkable region.
            </p>

            <div className="president-signature">
              <div className="signature-line" />
              <div>
                <span className="signature-name">{presidentMessage.name}</span>
                <span className="signature-title">{presidentMessage.title}, {presidentMessage.organization}</span>
              </div>
            </div>

            <Link to="/president" className="btn btn-outline president-btn">
              Read Full Message
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
