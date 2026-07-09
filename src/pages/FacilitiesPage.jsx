import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import { facilities } from '../data/facilities'

const categories = ['All', 'Water', 'Dining', 'Sports', 'Entertainment', 'Private']

export default function FacilitiesPage() {
  const [activecat, setActivecat] = useState('All')

  const filtered = activecat === 'All' ? facilities : facilities.filter(f => f.category === activecat)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        title="Club Facilities"
        subtitle="Enjoy world-class recreation, boating, sports, fine dining and premium suites on the Sari Gowain River."
        bgImage="/assets/images/renders/lobby1.jpg"
      />


      {/* Facilities section */}
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem 2rem' }}>
            {filtered.map((facility) => (
              <div key={facility.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ aspectRatio: '16/10', overflow: 'hidden', position: 'relative' }}>
                  <img src={facility.image} alt={facility.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span className="label" style={{
                    position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(1, 8, 18, 0.85)',
                    color: '#c9a84c', border: '1px solid rgba(201, 168, 76, 0.25)', padding: '0.3rem 0.75rem',
                    borderRadius: '99px', fontSize: '0.6rem'
                  }}>{facility.categoryLabel}</span>
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <h3 className="heading-md">{facility.name}</h3>
                  <p className="body-sm text-muted">{facility.description}</p>
                  <p className="label text-gold" style={{ fontSize: '0.6rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem', marginTop: 'auto' }}>{facility.tagline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
