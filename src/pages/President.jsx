import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import { presidentMessage, clubInfo } from '../data/appData'

export default function President() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        title="President's Message"
        subtitle={`A warm welcome message and insights from our honorable President ${presidentMessage.name}.`}
        bgImage="/assets/images/renders/lobby2.jpg"
      />


      <section className="section bg-white" style={{ color: '#000' }}>
        <div className="container grid-2-col">
          <div>
            <div style={{ borderRadius: '2rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
              <img src={presidentMessage.photo} alt={`President ${presidentMessage.name}`} style={{ width: '100%', display: 'block' }} />
            </div>
            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <h3 className="heading-md" style={{ color: '#010812' }}>{presidentMessage.name}</h3>
              <p className="label text-gold" style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>{presidentMessage.title}, {presidentMessage.organization}</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 className="heading-xl text-gradient-gold">A Landmark of Connections</h2>
            <blockquote style={{ fontSize: '1.25rem', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', borderLeft: '4px solid #c9a84c', paddingLeft: '1.5rem', margin: 0, color: '#334155' }}>
              "{presidentMessage.shortQuote}"
            </blockquote>
            <div className="body-md" style={{ color: '#475569', lineHeight: 1.8, whiteSpace: 'pre-line' }}>
              {presidentMessage.message}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <div style={{ width: '4rem', height: '1px', background: '#c9a84c', marginBottom: '1rem' }} />
              <p className="label" style={{ color: '#010812', fontWeight: 800 }}>{presidentMessage.name}</p>
              <p className="label" style={{ color: '#94a3b8', fontSize: '0.6rem' }}>{presidentMessage.title}, {presidentMessage.organization}</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
