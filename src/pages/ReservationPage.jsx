import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import toast from 'react-hot-toast'

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', facility: 'Boat Riding Zone', date: '', time: '', guests: 2, requests: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    toast.success('Your reservation request has been received. Our Desk Officer will call to confirm!')
    setFormData({ name: '', email: '', phone: '', facility: 'Boat Riding Zone', date: '', time: '', guests: 2, requests: '' })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        title="Reservations & Bookings"
        subtitle="Book private dining, sports courts, banquet halls, or boat riding slots."
        bgImage="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80"
      />

      <section className="section bg-navy-mid">
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="glass-card" style={{ padding: '3.5rem' }}>
            <h3 className="heading-md" style={{ marginBottom: '2rem', textAlign: 'center' }}>Reserve an Amenity</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
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
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label className="label" style={{ fontSize: '0.65rem' }}>Phone Number</label>
                  <input
                    type="tel" required value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label className="label" style={{ fontSize: '0.65rem' }}>Select Amenity</label>
                  <select
                    value={formData.facility}
                    onChange={e => setFormData({ ...formData, facility: e.target.value })}
                    style={{ background: 'rgba(10,22,40,0.95)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff' }}
                  >
                    <option value="Boat Riding Zone">Boat Riding Zone</option>
                    <option value="Special Restaurant">Special Restaurant</option>
                    <option value="Café & Bakery">Café & Bakery</option>
                    <option value="The Residence Suite">The Residence Suite</option>
                    <option value="Billiards Room">Billiards Room</option>
                    <option value="Tennis Court">Tennis Court</option>
                    <option value="Squash Court">Squash Court</option>
                    <option value="Banquet Hall">Banquet Hall</option>
                    <option value="The Glass House">The Glass House</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label className="label" style={{ fontSize: '0.65rem' }}>Date</label>
                  <input
                    type="date" required value={formData.date}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label className="label" style={{ fontSize: '0.65rem' }}>Time Slot</label>
                  <input
                    type="time" required value={formData.time}
                    onChange={e => setFormData({ ...formData, time: e.target.value })}
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff' }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label className="label" style={{ fontSize: '0.65rem' }}>Number of Guests</label>
                  <input
                    type="number" min="1" required value={formData.guests}
                    onChange={e => setFormData({ ...formData, guests: e.target.value })}
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label className="label" style={{ fontSize: '0.65rem' }}>Special Requests / Notes</label>
                <textarea
                  rows="3" value={formData.requests}
                  onChange={e => setFormData({ ...formData, requests: e.target.value })}
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.5rem', padding: '0.75rem', color: '#fff', resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn btn-gold" style={{ justifyContent: 'center', marginTop: '1rem' }}>
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
