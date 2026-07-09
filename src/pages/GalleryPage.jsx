import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import { galleryImages, clubInfo } from '../data/appData'

const categories = ['All', 'Boating', 'Events', 'Facilities', 'Sports']

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
        subtitle={`Browse photos capturing key events, elite amenities, and the vibrant life of ${clubInfo.name}.`}
        bgImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
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

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', gridAutoRows: '220px' }}>
            {filtered.map((img, i) => (
              <div
                key={img.id}
                className="glass-card"
                style={{
                  overflow: 'hidden', position: 'relative', borderRadius: '1.5rem',
                  gridColumn: i % 5 === 0 ? 'span 2' : 'span 1', gridRow: i % 5 === 0 ? 'span 2' : 'span 1'
                }}
              >
                <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,12,27,0.9), transparent)',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem', opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = 1 }}
                onMouseLeave={e => { e.currentTarget.style.opacity = 0 }}
                >
                  <span className="label text-gold" style={{ fontSize: '0.55rem', marginBottom: '0.25rem' }}>{img.category}</span>
                  <h4 className="heading-md" style={{ fontSize: '0.9rem', color: '#fff' }}>{img.alt}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
