import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { clubInfo } from '../../data/appData'
import './Preloader.css'

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 600)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 120)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Animated boat SVG */}
          <div className="preloader-logo">
            <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="boat-svg">
              <motion.path
                d="M10 55 Q 30 30 60 28 Q 90 30 110 55"
                stroke="#c9a84c"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
              <motion.path
                d="M20 55 L100 55 Q 95 70 60 72 Q 25 70 20 55Z"
                fill="#c9a84c"
                fillOpacity="0.15"
                stroke="#c9a84c"
                strokeWidth="1.5"
                initial={{ pathLength: 0, fillOpacity: 0 }}
                animate={{ pathLength: 1, fillOpacity: 0.15 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
              <motion.line
                x1="60" y1="28" x2="60" y2="5"
                stroke="#c9a84c"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              <motion.path
                d="M60 5 L80 20 L60 22Z"
                fill="#c9a84c"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              />
              {/* Wave lines */}
              <motion.path
                d="M5 68 Q 20 64 35 68 Q 50 72 65 68 Q 80 64 95 68 Q 108 72 115 68"
                stroke="#c9a84c"
                strokeWidth="1"
                fill="none"
                strokeOpacity="0.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </svg>
          </div>

          <motion.h2
            className="preloader-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {clubInfo.name}
          </motion.h2>

          <motion.p
            className="preloader-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Est. {clubInfo.established} — {clubInfo.tagline}
          </motion.p>

          <div className="preloader-bar-wrap">
            <motion.div
              className="preloader-bar"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          <motion.span
            className="preloader-count"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
