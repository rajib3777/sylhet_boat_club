import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, Clock } from 'lucide-react'
import { events } from '../../data/appData'
import './Events.css'

const categories = ['All', 'Sports', 'Water', 'Social', 'Cultural']

export default function Events() {
  const [activecat, setActivecat] = useState('All')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [timeLeft, setTimeLeft] = useState({})

  const filtered = activecat === 'All' ? events.slice(0, 3) : events.filter(e => e.category === activecat).slice(0, 3)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date('2026-07-20') - +new Date()
      let tempTimeLeft = {}

      if (difference > 0) {
        tempTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }
      return tempTimeLeft
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="events-section section" ref={ref}>
      <div className="events-bg-glow" />
      <div className="container">
        {/* Header */}
        <motion.div
          className="events-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">What's On</div>
          <h2 className="events-title">
            Upcoming <span className="text-gradient-gold">Events</span>
          </h2>
          <p className="events-sub">Mark your calendars for these exclusive club gatherings</p>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="events-tabs"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`events-tab ${activecat === cat ? 'active' : ''}`}
              onClick={() => setActivecat(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured countdown */}
        {inView && events[0] && activecat === 'All' && (
          <motion.div
            className="featured-event glass-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="featured-grid">
              <div className="featured-img-wrap">
                <img src={events[0].image} alt={events[0].title} />
              </div>
              <div className="featured-info">
                <span className="featured-badge">Featured Event</span>
                <h3 className="featured-title">{events[0].title}</h3>
                <p className="featured-desc">{events[0].description}</p>
                <div className="featured-meta">
                  <span><Calendar size={14} /> {events[0].date}</span>
                  <span><Clock size={14} /> {events[0].time}</span>
                  <span><MapPin size={14} /> {events[0].venue}</span>
                </div>
                {/* Countdown */}
                <div className="countdown-wrap">
                  <span className="countdown-label">Starts In:</span>
                  <div className="countdown-timer">
                    {Object.keys(timeLeft).length ? (
                      <>
                        <div className="time-block"><span>{timeLeft.days}</span><span className="unit">Days</span></div>
                        <div className="time-block"><span>{timeLeft.hours}</span><span className="unit">Hrs</span></div>
                        <div className="time-block"><span>{timeLeft.minutes}</span><span className="unit">Min</span></div>
                        <div className="time-block"><span>{timeLeft.seconds}</span><span className="unit">Sec</span></div>
                      </>
                    ) : (
                      <span>Event Started</span>
                    )}
                  </div>
                </div>
                <Link to="/reservation" className="btn btn-gold featured-btn">Register Now</Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Grid */}
        <div className="events-grid">
          {filtered.map((event, i) => (
            <motion.div
              key={event.id}
              className="event-card glass-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className="event-img-wrap">
                <img src={event.image} alt={event.title} loading="lazy" />
                <span className="event-cat-badge">{event.category}</span>
              </div>
              <div className="event-info">
                <h3 className="event-card-title">{event.title}</h3>
                <p className="event-card-desc">{event.description.substring(0, 80)}...</p>
                <div className="event-card-meta">
                  <span><Calendar size={13} /> {event.date}</span>
                  <span><MapPin size={13} /> {event.venue.substring(0, 15)}</span>
                </div>
                <Link to="/reservation" className="event-card-link">Register Now &rarr;</Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="events-cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link to="/events" className="btn btn-outline events-btn">
            View All Events
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
