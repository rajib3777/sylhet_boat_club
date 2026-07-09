import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import { events } from '../data/appData'
import { Calendar, MapPin, Clock } from 'lucide-react'

const categories = ['All', 'Sports', 'Water', 'Social', 'Cultural']

export default function EventsPage() {
  const [activecat, setActivecat] = useState('All')

  const filtered = activecat === 'All' ? events : events.filter(e => e.category === activecat)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        title="Events & Tournaments"
        subtitle="Stay updated with our upcoming championships, gala nights, and member events."
        bgImage="/assets/images/renders/lobby2.jpg"
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
          <div className="grid-3-col">

            {filtered.map((event) => (
              <div key={event.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ aspectRatio: '16/10', overflow: 'hidden', position: 'relative' }}>
                  <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span className="label" style={{
                    position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(1, 8, 18, 0.85)',
                    color: '#c9a84c', border: '1px solid rgba(201, 168, 76, 0.25)', padding: '0.35rem 0.75rem',
                    borderRadius: '99px', fontSize: '0.58rem'
                  }}>{event.category}</span>
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <h3 className="heading-md" style={{ fontSize: '1.2rem', lineHeight: 1.3 }}>{event.title}</h3>
                  <p className="body-sm text-muted">{event.description}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem' }}>
                    <span className="body-sm text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem' }}><Calendar size={13} color="#c9a84c" /> {event.date}</span>
                    <span className="body-sm text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem' }}><Clock size={13} color="#c9a84c" /> {event.time}</span>
                    <span className="body-sm text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem' }}><MapPin size={13} color="#c9a84c" /> {event.venue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
