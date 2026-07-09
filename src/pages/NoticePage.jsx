import { useState } from 'react'
import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import { notices } from '../data/appData'
import { Calendar, Download } from 'lucide-react'
import toast from 'react-hot-toast'

export default function NoticePage() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Urgent', 'Sports', 'Finance', 'Membership', 'Maintenance']

  const filteredNotices = notices.filter(item => {
    if (filter === 'All') return true
    if (filter === 'Urgent') return item.urgent
    return item.category === filter
  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        title="Official Notices"
        subtitle="Access notices, circulars, and updates regarding club operations and tournaments."
        bgImage="/assets/images/renders/lobby2.jpg"
      />


      <section className="section bg-navy-mid">
        <div className="container">
          {/* Categories */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: filter === cat ? '#010812' : 'rgba(255,255,255,0.5)',
                  padding: '0.5rem 1.25rem', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '99px',
                  background: filter === cat ? '#c9a84c' : 'transparent', transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
            {filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className="glass-card"
                style={{
                  padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem',
                  borderLeft: notice.urgent ? '4px solid #ef4444' : '1px solid rgba(255,255,255,0.08)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span className="label text-gold" style={{ fontSize: '0.6rem' }}>{notice.category}</span>
                  <span className="body-sm text-muted" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem' }}>
                    <Calendar size={13} /> {notice.date}
                  </span>
                </div>
                <h3 className="heading-md" style={{ fontSize: '1.25rem' }}>{notice.title}</h3>
                <p className="body-sm text-muted" style={{ lineHeight: 1.6 }}>{notice.content}</p>
                <button
                  onClick={() => toast.success('Notice PDF Download Started!')}
                  className="btn btn-outline"
                  style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem', fontSize: '0.65rem' }}
                >
                  <Download size={13} /> Download PDF
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
