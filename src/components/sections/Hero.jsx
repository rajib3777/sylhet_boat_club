import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Play, ArrowDown } from 'lucide-react'
import { clubInfo, stats as clubStats } from '../../data/appData'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import './Hero.css'

const slides = [
  { id: 1, image: '/assets/images/renders/exterior1.jpg', alt: 'Sylhet Boat Club — Riverside Exterior View' },
  { id: 2, image: '/assets/images/renders/lobby1.jpg', alt: 'Grand Lobby — Sylhet Boat Club' },
  { id: 3, image: '/assets/images/renders/barlounge.jpg', alt: 'Riverside Bar & Lounge' },
  { id: 4, image: '/assets/images/renders/exterior2.jpg', alt: 'Sylhet Boat Club — Garden Facade' },
]


const words = ['Luxury', 'Nature', 'Leisure', 'Prestige']

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIdx(prev => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      {/* Background Video */}
      <div className="hero-slider">
        <video
          className="hero-bg-video"
          src="/assets/video/club-film.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div className="hero-overlay" />
        <div className="hero-overlay-gradient" />
      </div>


      {/* Particles */}
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 8}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
          }} />
        ))}
      </div>

      {/* Content */}
      <div className="hero-content">
        <motion.div
          className="hero-inner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Pre-title */}
          <motion.div
            className="hero-pretitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="pretitle-line" />
            <span>Est. {clubInfo.established} &bull; {clubInfo.location}</span>
            <span className="pretitle-line" />
          </motion.div>

          {/* Main Heading */}
          <div className="hero-heading">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
            >
              Where Nature
            </motion.h1>
            <motion.div
              className="hero-word-cycle"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9 }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={word}
                  className={`hero-word ${i === wordIdx ? 'active' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: i === wordIdx ? 1 : 0, y: i === wordIdx ? 0 : -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Sub text */}
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {clubInfo.tagline2}. Experience the pinnacle of recreation, wellness, and prestige on the banks of the Sari Gowain River in Sylhet.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <Link to="/membership" className="btn btn-gold hero-cta-primary">
              <span>Explore Membership</span>
              <span className="btn-arrow">&rarr;</span>
            </Link>
            <button className="hero-cta-video" onClick={() => setShowVideo(true)}>
              <span className="play-btn"><Play size={16} fill="currentColor" /></span>
              <span>Watch Club Film</span>
            </button>
          </motion.div>

          {/* Stats mini */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            {clubStats.map((item) => (
              <div key={item.label} className="hero-stat">
                <span className="hero-stat-num">{item.num}</span>
                <span className="hero-stat-label">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Pagination */}
      <div className="hero-pagination" />

      {/* Scroll indicator */}
      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={16} />
        <span>Scroll</span>
      </motion.div>

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          className="video-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowVideo(false)}
        >
          <div className="video-modal-inner" onClick={e => e.stopPropagation()}>
            <button className="video-close" onClick={() => setShowVideo(false)}>&#x2715;</button>
            <video
              className="video-player"
              src="/assets/video/club-film.mp4"
              controls
              autoPlay
              style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#000' }}
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}
