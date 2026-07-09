import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import { affiliatedClubs } from '../data/appData'

export default function AffiliatedClubsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        title="Affiliated Clubs"
        subtitle="Enjoy member access and benefits at our prestigious partner clubs across the country."
        bgImage="/assets/images/renders/exterior1.jpg"
      />

      <section className="section bg-navy-mid">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Global Privileges</div>
          <h2 className="heading-xl text-center text-gradient-gold" style={{ marginBottom: '4rem' }}>Our Affiliate Networks</h2>

          {/* Grid */}
          <div className="grid-4-col">

            {affiliatedClubs.map((club) => (
              <div key={club.id} className="glass-card" style={{ padding: '2.5rem 1.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <span style={{ fontSize: '3rem', filter: 'drop-shadow(0 0 10px rgba(201,168,76,0.3))' }}>{club.icon}</span>
                <h3 className="heading-md" style={{ fontSize: '1.15rem' }}>{club.name}</h3>
                <p className="body-sm text-muted">{club.location}</p>
                <span className="label text-gold" style={{ fontSize: '0.6rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.5rem', width: '100%' }}>Affiliated Since {club.since}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
