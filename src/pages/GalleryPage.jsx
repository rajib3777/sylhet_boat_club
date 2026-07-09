import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import { galleryImages, clubInfo } from '../data/appData'

const categories = ['All', 'Exterior', 'Interior', 'Dining']

export default function GalleryPage() {
  const [activecat, setActivecat] = useState('All')

  const filtered = activecat === 'All' ? galleryImages : galleryImages.filter(img => img.category === activecat)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        title="Moments of Prestige"
        subtitle={`Browse photos capturing the elite amenities, stunning architecture, and lakeside life of ${clubInfo.name}.`}
        bgImage="/assets/images/renders/barlounge.jpg"
      />

      <section className="section bg-navy-mid">
        <div className="container">
          {/* Categories */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActivecat(cat)}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: activecat === cat ? '#010812' : 'rgba(255,255,255,0.5)',
                  padding: '0.5rem 1.25rem', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '99px',
                  background: activecat === cat ? '#c9a84c' : 'transparent', transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Responsive Gallery Grid */}
          <div className="gallery-grid">
            {filtered.map((img, i) => {
              const isFeatured = i % 5 === 0
              return (
                <div
                  key={img.id}
                  className={`gallery-card-item glass-card ${isFeatured ? 'featured' : ''}`}
                >
                  <img src={img.src} alt={img.caption || img.category} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,12,27,0.9), transparent)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem', opacity: 0,
                    transition: 'opacity 0.35s ease', cursor: 'pointer'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = 1 }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = 0 }}
                  >
                    <span className="label text-gold" style={{ fontSize: '0.55rem', marginBottom: '0.25rem' }}>{img.category}</span>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', color: '#fff', fontWeight: 600 }}>{img.caption || img.category}</h4>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
