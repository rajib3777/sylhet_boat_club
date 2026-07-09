import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import { menuCategories, menuItems } from '../data/appData'
import { Link } from 'react-router-dom'

export default function DiningPage() {
  const [activecat, setActivecat] = useState('Starters')

  const filtered = menuItems.filter(item => item.category === activecat)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        title="Culinary Excellence"
        subtitle="Savor a range of local & international cuisines curated by our world-class culinary chefs."
        bgImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
      />

      {/* Menu list */}
      <section className="section bg-navy-mid">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Gourmet Dining</div>
          <h2 className="heading-xl text-center text-gradient-gold" style={{ marginBottom: '4rem' }}>Our Restaurant Menu</h2>

          {/* Menu Categories */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            {menuCategories.map(cat => (
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

          {/* Menu Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            {filtered.map((item) => (
              <div key={item.id} className="glass-card" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <h3 className="heading-md" style={{ fontSize: '1.15rem' }}>{item.name}</h3>
                    {item.tag && <span className="label text-gold" style={{ fontSize: '0.55rem', background: 'rgba(201, 168, 76, 0.1)', padding: '0.2rem 0.6rem', borderRadius: '99px' }}>{item.tag}</span>}
                  </div>
                  <p className="body-sm text-muted">{item.description}</p>
                </div>
                <div className="heading-md text-gradient-gold" style={{ fontSize: '1.25rem', marginLeft: '2rem' }}>{item.price}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <Link to="/reservation" className="btn btn-gold">Reserve a Dining Table</Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
