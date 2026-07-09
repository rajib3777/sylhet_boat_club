import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import { ecMembers } from '../data/members'
import { clubInfo } from '../data/appData'

export default function ECMembersPage() {
  const advisor = ecMembers.find(m => m.role === 'Advisor')
  const others = ecMembers.filter(m => m.role !== 'Advisor')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        title="Executive Committee"
        subtitle={`Meet the leadership and governance driving ${clubInfo.name}'s vision.`}
        bgImage="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
      />

      {/* Advisor Section */}
      {advisor && (
        <section className="section bg-navy">
          <div className="container">
            <div className="section-label" style={{ justifyContent: 'center' }}>Advisory Board</div>
            <h2 className="heading-xl text-center text-gradient-gold" style={{ marginBottom: '4rem' }}>Our Advisor</h2>

            <div className="glass-card" style={{ maxWidth: '500px', margin: '0 auto', overflow: 'hidden', padding: '2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
              <span className="label" style={{ background: '#c9a84c', color: '#010812', padding: '0.35rem 0.75rem', borderRadius: '99px', fontSize: '0.65rem' }}>{advisor.id}</span>
              <span className="label" style={{ fontSize: '0.6rem', color: '#c9a84c' }}>{advisor.role}</span>
              <h3 className="heading-md">{advisor.name}</h3>
              <p className="body-sm text-muted" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem', marginTop: '0.5rem', width: '100%' }}>{advisor.portfolio}</p>
            </div>
          </div>
        </section>
      )}

      {/* Committee Grid */}
      <section className="section bg-navy-mid">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Board Members</div>
          <h2 className="heading-xl text-center text-gradient-gold" style={{ marginBottom: '4rem' }}>The Executive Committee</h2>

          <div className="grid-3-col">

            {others.map((member) => {
              const isPresident = member.role === 'President'
              return (
                <div key={member.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: isPresident ? 'auto' : '220px', justifyContent: isPresident ? 'flex-start' : 'center' }}>
                  {isPresident ? (
                    <>
                      <div style={{ aspectRatio: '4/5', overflow: 'hidden', position: 'relative' }}>
                        <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <span className="label" style={{
                          position: 'absolute', top: '1rem', left: '1rem', background: '#c9a84c', color: '#010812',
                          padding: '0.35rem 0.75rem', borderRadius: '99px', fontSize: '0.6rem'
                        }}>{member.id}</span>
                      </div>
                      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <span className="label text-gold" style={{ fontSize: '0.6rem' }}>{member.role}</span>
                        <h3 className="heading-md">{member.name}</h3>
                        <p className="body-sm text-muted" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem', marginTop: '0.5rem' }}>{member.portfolio}</p>
                      </div>
                    </>
                  ) : (
                    <div style={{ padding: '2rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem', position: 'relative' }}>
                      <span className="label" style={{
                        position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.04)', color: '#c9a84c',
                        padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.55rem', border: '1px solid rgba(201, 168, 76, 0.15)'
                      }}>{member.id}</span>
                      <span className="label text-gold" style={{ fontSize: '0.6rem', marginTop: '0.5rem' }}>{member.role}</span>
                      <h3 className="heading-md" style={{ fontSize: '1.15rem' }}>{member.name}</h3>
                      <p className="body-sm text-muted" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '0.75rem', marginTop: '0.5rem', fontSize: '0.75rem', lineHeight: 1.5 }}>{member.portfolio}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </motion.div>
  )
}
