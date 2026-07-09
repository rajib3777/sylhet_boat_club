import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, X, Menu, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react'
import { clubInfo } from '../../data/appData'
import './Navbar.css'

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    children: [
      { label: 'Club History', path: '/about' },
      { label: "President's Message", path: '/president' },
      { label: 'Founding Members', path: '/founding-members' },
      { label: 'EC Members', path: '/ec-members' },
    ],
  },
  {
    label: 'Facilities',
    children: [
      { label: 'All Facilities', path: '/facilities' },
      { label: 'Dining & Cuisine', path: '/dining' },
      { label: 'Sports & Games', path: '/facilities' },
      { label: 'Reservations', path: '/reservation' },
    ],
  },
  { label: 'Events', path: '/events' },
  { label: 'Gallery', path: '/gallery' },
  {
    label: 'More',
    children: [
      { label: 'Membership', path: '/membership' },
      { label: 'Notice Board', path: '/notice' },
      { label: 'Affiliated Clubs', path: '/affiliated-clubs' },
      { label: 'Contact Us', path: '/contact' },
    ],
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Top Bar */}
      <div className={`navbar-topbar ${scrolled ? 'hidden' : ''}`}>
        <div className="container topbar-inner">
          <div className="topbar-left">
            <span><Phone size={12} /> {clubInfo.phone}</span>
            <span><Mail size={12} /> {clubInfo.email}</span>
          </div>
          <div className="topbar-right">
            <a href="#" aria-label="Facebook"><Facebook size={13} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={13} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={13} /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img
              src="/assets/images/logo.png"
              alt="Sylhet Boat Club Limited"
              className="logo-img"
            />
            <div className="logo-text">
              <span className="logo-name">{clubInfo.shortName || 'SBCL'}</span>
              <span className="logo-tagline">{clubInfo.name}</span>
            </div>
          </Link>


          {/* Desktop Nav */}
          <nav className="navbar-desktop">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="nav-dropdown-wrap"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="nav-link-btn">
                    {link.label}
                    <ChevronDown size={13} className={`chevron ${activeDropdown === link.label ? 'open' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        className="nav-dropdown"
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="dropdown-gold-line" />
                        {link.children.map((child) => (
                          <Link key={child.label} to={child.path} className="dropdown-item">
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="navbar-cta">
            <Link to="/reservation" className="btn btn-gold navbar-btn">
              Reservations
            </Link>
            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <button className="mobile-close" onClick={() => setMobileOpen(false)}>
              <X size={24} />
            </button>

            <div className="mobile-logo">
              <svg viewBox="0 0 40 30" fill="none" width="48" height="36">
                <path d="M2 22 Q10 12 20 11 Q30 12 38 22" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
                <path d="M6 22 L34 22 Q31 28 20 29 Q9 28 6 22Z" fill="rgba(201,168,76,0.2)" stroke="#c9a84c" strokeWidth="1.2"/>
                <line x1="20" y1="11" x2="20" y2="2" stroke="#c9a84c" strokeWidth="1.2"/>
                <path d="M20 2 L28 8 L20 9Z" fill="#c9a84c"/>
              </svg>
              <div>
                <p className="mobile-logo-name">{clubInfo.name}</p>
                <p className="mobile-logo-sub">Est. {clubInfo.established}</p>
              </div>
            </div>

            <nav className="mobile-nav">
              {navLinks.map((link, i) =>
                link.children ? (
                  <div key={link.label} className="mobile-group">
                    <button
                      className="mobile-group-btn"
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={16} className={mobileExpanded === link.label ? 'open' : ''} />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === link.label && (
                        <motion.div
                          className="mobile-sub"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {link.children.map((child) => (
                            <Link key={child.label} to={child.path} className="mobile-sub-link">
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link key={link.label} to={link.path} className="mobile-link">
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <Link to="/reservation" className="btn btn-gold mobile-cta">
              Make a Reservation
            </Link>

            <div className="mobile-socials">
              <a href="#"><Facebook size={18} /></a>
              <a href="#"><Instagram size={18} /></a>
              <a href="#"><Youtube size={18} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
