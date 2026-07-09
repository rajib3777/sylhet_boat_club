import { motion } from 'framer-motion'
import { clubInfo } from '../../data/appData'
import './PageHero.css'

export default function PageHero({ title, subtitle, bgImage }) {
  return (
    <section className="page-hero">
      <div
        className="page-hero-bg"
        style={{ backgroundImage: `url(${bgImage || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80'})` }}
      />
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="page-hero-inner"
        >
          <div className="section-label">{clubInfo.name}</div>
          <h1 className="page-hero-title text-gradient-gold">{title}</h1>
          {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  )
}
