import { Link } from 'react-router-dom'
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Send } from 'lucide-react'
import { clubInfo } from '../../data/appData'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-col brand">
            <Link to="/" className="footer-logo">
              <svg viewBox="0 0 40 30" fill="none" width="40" height="30">
                <path d="M2 22 Q10 12 20 11 Q30 12 38 22" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
                <path d="M6 22 L34 22 Q31 28 20 29 Q9 28 6 22Z" fill="rgba(201,168,76,0.2)" stroke="#c9a84c" strokeWidth="1.2"/>
                <line x1="20" y1="11" x2="20" y2="2" stroke="#c9a84c" strokeWidth="1.2"/>
                <path d="M20 2 L28 8 L20 9Z" fill="#c9a84c"/>
              </svg>
              <span>{clubInfo.name}</span>
            </Link>
            <p className="brand-desc">
              Experience the pinnacle of recreation, leisure, and prestige on the shores of the Sari Gowain River. Sylhet's premier waterfront sanctuary.
            </p>
            <div className="brand-socials">
              <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Club</Link></li>
              <li><Link to="/president">President Message</Link></li>
              <li><Link to="/founding-members">Founding Members</Link></li>
              <li><Link to="/ec-members">EC Committee</Link></li>
              <li><Link to="/notice">Notice Board</Link></li>
            </ul>
          </div>

          {/* Facilities */}
          <div className="footer-col">
            <h3>Amenities</h3>
            <ul className="footer-links">
              <li><Link to="/facilities">Boat Riding</Link></li>
              <li><Link to="/dining">Fine Dining</Link></li>
              <li><Link to="/facilities">Billiards Room</Link></li>
              <li><Link to="/facilities">Tennis Courts</Link></li>
              <li><Link to="/facilities">Guest House</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col contact">
            <h3>Contact Us</h3>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={16} className="contact-icon" />
                <span>{clubInfo.locationFull}</span>
              </li>
              <li>
                <Phone size={16} className="contact-icon" />
                <span>{clubInfo.phone}</span>
              </li>
              <li>
                <Mail size={16} className="contact-icon" />
                <span>{clubInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to receive exclusive club updates, upcoming event schedules and newsletters.</p>
            <form onSubmit={e => e.preventDefault()} className="newsletter-form">
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit" aria-label="Subscribe"><Send size={16} /></button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {clubInfo.name}. All Rights Reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
