import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/appData'
import './Testimonials.css'

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="testimonials-section section" ref={ref}>
      <div className="testimonials-bg-glow" />
      <div className="container">
        {/* Header */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Voices of Excellence</div>
          <h2 className="testimonials-title">
            Reflections & <span className="text-gradient-gold">Reviews</span>
          </h2>
          <div className="gold-line" />
        </motion.div>

        {/* Grid */}
        <div className="testimonials-grid">
          {testimonials.slice(0, 3).map((item, i) => (
            <motion.div
              key={item.id}
              className="testimonial-card glass-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className="testimonial-quote-mark">“</div>
              <div className="testimonial-stars">
                {[...Array(item.rating)].map((_, idx) => (
                  <Star key={idx} size={14} fill="#c9a84c" color="#c9a84c" />
                ))}
              </div>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="testimonial-divider" />
              <div className="testimonial-user">
                <div className="testimonial-avatar">{item.avatar}</div>
                <div>
                  <h4 className="testimonial-name">{item.name}</h4>
                  <p className="testimonial-role">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
