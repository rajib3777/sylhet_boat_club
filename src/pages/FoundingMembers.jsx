import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import { foundingMembers } from '../data/members'
import { clubInfo } from '../data/appData'

export default function FoundingMembers() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        title="Founding Members"
        subtitle={`The visionaries and pioneers who established ${clubInfo.name} in ${clubInfo.established}.`}
        bgImage="https://images.unsplash.com/photo-1537519646099-335112f03225?w=1920&q=80"
      />

      <section className="section bg-navy-mid">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Visionaries</div>
          <h2 className="heading-xl text-center text-gradient-gold" style={{ marginBottom: '4rem' }}>Our Founders</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem 2rem' }}>
            {foundingMembers.map((member) => (
              <div key={member.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span className="label" style={{
                    position: 'absolute', top: '1rem', left: '1rem', background: '#c9a84c', color: '#010812',
                    padding: '0.35rem 0.75rem', borderRadius: '99px', fontSize: '0.6rem'
                  }}>{member.id}</span>
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span className="label text-gold" style={{ fontSize: '0.6rem' }}>Est. {member.year}</span>
                  <h3 className="heading-md">{member.name}</h3>
                  <p className="body-sm text-muted" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem', marginTop: '0.5rem' }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
