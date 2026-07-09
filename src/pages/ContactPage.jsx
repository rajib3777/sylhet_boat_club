import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import { MapPin, Phone, Mail } from 'lucide-react'
import { clubInfo } from '../data/appData'
import toast from 'react-hot-toast'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Your message has been sent successfully!')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        title="Contact Us"
        subtitle={`Get in touch for membership inquiries, event bookings, or general questions regarding ${clubInfo.name}.`}
        bgImage="/assets/images/renders/exterior2.jpg"
      />


      <section className="section bg-navy-mid">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'flex-start' }}>
          {/* Info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="section-label">Connect</div>
            <h2 className="heading-xl text-gradient-gold">Get in Touch</h2>
            <p className="body-md text-muted" style={{ marginBottom: '1rem' }}>
              For specific office inquiries, reservations or guest bookings, please contact us through one of our channels.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <MapPin size={24} color="#c9a84c" />
                <div>
                  <h4 className="heading-md" style={{ fontSize: '1rem' }}>Our Location</h4>
                  <p className="body-sm text-muted">{clubInfo.locationFull}</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <Phone size={24} color="#c9a84c" />
                <div>
                  <h4 className="heading-md" style={{ fontSize: '1rem' }}>Phone Lines</h4>
                  <p className="body-sm text-muted">{clubInfo.phone}</p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <Mail size={24} color="#c9a84c" />
                <div>
                  <h4 className="heading-md" style={{ fontSize: '1rem' }}>Email Support</h4>
                  <p className="body-sm text-muted">{clubInfo.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card" style={{ padding: '3rem' }}>
            <h3 className="heading-md" style={{ marginBottom: '2rem', textAlign: 'center' }}>Send Us a Message</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                <label className="label" style={{ fontSize: '0.65rem' }}>Subject</label>
                <input
                  type="text" required value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label className="label" style={{ fontSize: '0.65rem' }}>Message</label>
                <textarea
                  rows="4" required value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-gold" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ height: '400px', width: '100%', background: '#020c1b', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14470.920272093557!2d91.9793132!3d24.9498218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054ea601275bb%3A0xe54e60b2efd48cd8!2sSari+Gowain+River!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Sylhet Boat Club Map"
        ></iframe>
      </section>
    </motion.div>
  )
}
