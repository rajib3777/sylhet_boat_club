import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Eye } from 'lucide-react'
import { galleryImages } from '../../data/appData'
import './GalleryShowcase.css'

export default function GalleryShowcase() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="gallery-showcase section" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          className="gallery-showcase-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Prestige Moments</div>
          <h2 className="gallery-showcase-title">
            Prestige <span className="text-gradient-gold">Gallery</span>
          </h2>
          <div className="gold-line" />
        </motion.div>

        {/* Grid */}
        <div className="gallery-showcase-grid">
          {galleryImages.slice(0, 6).map((img, i) => (
            <motion.div
              key={img.id}
              className={`gallery-showcase-item item-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-showcase-overlay">
                <span className="gallery-showcase-cat">{img.category}</span>
                <h3 className="gallery-showcase-name">{img.alt}</h3>
                <Link to="/gallery" className="gallery-showcase-eye">
                  <Eye size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="gallery-showcase-cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link to="/gallery" className="btn btn-gold">
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
