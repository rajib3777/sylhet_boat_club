import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import { Check } from 'lucide-react'
import { clubInfo } from '../data/appData'
import toast from 'react-hot-toast'

export default function MembershipPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', type: 'Life Member', proposerName: '', proposerId: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      toast.success('Membership Application Submitted Successfully!')
      setStep(1)
      setFormData({ name: '', email: '', phone: '', address: '', type: 'Life Member', proposerName: '', proposerId: '' })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        title="Club Membership"
        subtitle={`Step into a world of privileges, sporting spirit and prestige at ${clubInfo.name}.`}
        bgImage="/assets/images/renders/restaurant.jpg"
      />

      <section className="section bg-navy-mid">
        <div className="container grid-2-col" style={{ alignItems: 'flex-start' }}>

          {/* Info */}
          <div>
            <div className="section-label">Privileges</div>
            <h2 className="heading-xl text-gradient-gold" style={{ margin: '1rem 0 1.5rem' }}>Membership Privileges</h2>
            <p className="body-md text-muted" style={{ marginBottom: '2rem' }}>
              Becoming a member of {clubInfo.name} connects you with a community of innovators, leaders, and recreation enthusiasts.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                'Access to premium yacht and speedboat riding Jetty',
                'Reciprocal privileges at top-tier partner clubs nationwide',
                'Invites to national snooker, pool and tennis tournaments',
                'Gourmet fine dining discount and glass house events entry',
                'Safe family atmosphere with dedicated kid-friendly play zones'
              ].map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <Check size={16} color="#c9a84c" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                  <span className="body-sm text-muted">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="glass-card" style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}>

            <h3 className="heading-md" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Application Form — Step {step} of 3</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {step === 1 && (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label className="label" style={{ fontSize: '0.65rem' }}>Full Name</label>
                    <input
                      type="text" required value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label className="label" style={{ fontSize: '0.65rem' }}>Email Address</label>
                    <input
                      type="email" required value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label className="label" style={{ fontSize: '0.65rem' }}>Phone Number</label>
                    <input
                      type="tel" required value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff' }}
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label className="label" style={{ fontSize: '0.65rem' }}>Residential Address</label>
                    <input
                      type="text" required value={formData.address}
                      onChange={e => setFormData({ ...formData, address: e.target.value })}
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label className="label" style={{ fontSize: '0.65rem' }}>Membership Type</label>
                    <select
                      value={formData.type}
                      onChange={e => setFormData({ ...formData, type: e.target.value })}
                      style={{ background: 'rgba(10,22,40,0.95)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff' }}
                    >
                      <option value="Life Member">Life Member</option>
                      <option value="Ordinary Member">Ordinary Member</option>
                      <option value="Associate Member">Associate Member</option>
                    </select>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label className="label" style={{ fontSize: '0.65rem' }}>Proposer's Full Name</label>
                    <input
                      type="text" required value={formData.proposerName}
                      onChange={e => setFormData({ ...formData, proposerName: e.target.value })}
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label className="label" style={{ fontSize: '0.65rem' }}>Proposer's Member ID</label>
                    <input
                      type="text" required value={formData.proposerId}
                      onChange={e => setFormData({ ...formData, proposerId: e.target.value })}
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff' }}
                    />
                  </div>
                </>
              )}

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                {step > 1 && (
                  <button
                    type="button" onClick={() => setStep(step - 1)}
                    className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }}
                  >
                    Back
                  </button>
                )}
                <button type="submit" className="btn btn-gold" style={{ flex: 2, justifyContent: 'center' }}>
                  {step === 3 ? 'Submit Application' : 'Next Step'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
