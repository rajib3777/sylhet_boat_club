import { motion } from 'framer-motion'
import PageHero from '../components/ui/PageHero'
import { Anchor, Compass, Heart, Award, Shield, Users, Leaf, Globe, Star } from 'lucide-react'
import { clubInfo, ourStory, mission, vision, coreValues } from '../data/appData'

const historyTimeline = [
  { year: '2026', title: 'The Vision & Birth', desc: 'Sylhet Boat Club Limited was conceived on the banks of the Sari Gowain River — a landmark institution for Sylhet\'s business leaders, families, and NRBs.' },
  { year: 'Phase 1', title: 'Elite Facilities Launch', desc: 'Opening of the infinity swimming pool, snooker, billiards, card room, premium court sports (tennis, basketball, badminton), and the signature riverside dining.' },
  { year: 'Phase 2', title: '20 Luxury Suites', desc: 'Launch of 20 ultra-luxury, fully-equipped rooms reserved exclusively for club members and distinguished guests from around the world.' },
  { year: 'Phase 3', title: 'Eco-Tourism Gateway', desc: 'Establishment of the premier gateway connecting members to Ratargul, Lalakhal, Sada Pathor, and Jaflong via scenic Sari Gowain River cruises.' },
]

const pillars = [
  { icon: Shield, title: 'Eco-Tourism Gateway', desc: 'Serving as the premier launchpad for Sylhet\'s world-renowned eco-tourism destinations including Ratargul, Jaflong, and Lalakhal.' },
  { icon: Globe, title: 'Corporate & Social Networking', desc: 'A prestigious nexus for elite business leaders, diplomats, and families to connect, collaborate, and build lasting relationships.' },
  { icon: Leaf, title: 'Premium Wellness', desc: 'Promoting an active, healthy lifestyle through top-tier sports facilities and tranquil natural surroundings along the river.' },
  { icon: Users, title: 'NRB Homecoming Hub', desc: 'The preferred sanctuary for millions of Non-Resident Bangladeshis visiting Sylhet, offering a world-class home away from home.' },
  { icon: Star, title: 'Fine Dining & Culture', desc: 'A curated culinary journey inspired by Bengali heritage and international standards, from hilsa to artisan breads baked in our in-house bakery.' },
  { icon: Heart, title: 'Family & Community', desc: 'Purpose-built spaces for families, children, and women ensuring every member\'s family feels welcome, safe, and celebrated.' },
]

const valueIcons = { Excellence: Award, Community: Users, 'Family time': Heart, Nature: Leaf, Integrity: Shield, Innovation: Star, Hospitality: Globe }

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero
        title="About Our Club"
        subtitle={`Exploring the rich vision, values, and destination legacy that define ${clubInfo.name}.`}
        bgImage="/assets/images/renders/exterior1.jpg"
      />

      {/* Our Story — Real PDF Content */}
      <section className="section bg-navy-mid">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <div className="section-label">Our Story</div>
            <h2 className="heading-xl text-gradient-gold" style={{ margin: '1rem 0 1.5rem' }}>
              Where Nature Inspires Connections
            </h2>
            <p className="body-md text-muted" style={{ marginBottom: '1.5rem', lineHeight: 1.85 }}>
              There are very few places in the world where nature, culture, and opportunity come together as effortlessly as Sylhet.
            </p>
            <p className="body-md text-muted" style={{ marginBottom: '1.5rem', lineHeight: 1.85 }}>
              Blessed with emerald tea gardens, crystal-clear rivers, rolling hills, and the enchanting haors, Sylhet has long been known as Bangladesh's premier tourism destination — the cherished homecoming of millions of Non-Resident Bangladeshis, a thriving center of commerce, and a region celebrated for its warmth, hospitality, and timeless traditions.
            </p>
            <p className="body-md text-muted" style={{ lineHeight: 1.85 }}>
              From this remarkable landscape, <strong style={{ color: 'var(--gold-primary)' }}>Sylhet Boat Club Limited</strong> was born — nestled on the peaceful banks of the majestic Sari Gowain River, only 3 kilometers from Sylhet International Airport.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <div className="gold-border-wrapper" style={{ borderRadius: '2rem', overflow: 'hidden' }}>
              <img src="/assets/images/renders/exterior1.jpg" alt="Sylhet Boat Club — Riverside" style={{ width: '100%', display: 'block' }} />
            </div>
            <div className="glass-card" style={{ position: 'absolute', bottom: '-2rem', left: '-2rem', padding: '1.5rem 2rem', maxWidth: '220px' }}>
              <div style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', color: 'var(--gold-primary)', fontWeight: 700 }}>3 km</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--white-70)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '0.25rem' }}>from Sylhet Airport</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Promise */}
      <section className="section bg-navy">
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Promise</div>
          <h2 className="heading-xl text-gradient-gold" style={{ margin: '1rem 0 2rem' }}>
            Why Sylhet Boat Club?
          </h2>
          <p className="body-md text-muted" style={{ lineHeight: 1.9, marginBottom: '1.5rem' }}>
            Imagine beginning your morning with the sunrise reflecting over the Sari Gowain River. Spend the day kayaking through calm waters, enjoying riverside sports, or hosting an executive meeting overlooking the river.
          </p>
          <p className="body-md text-muted" style={{ lineHeight: 1.9, marginBottom: '1.5rem' }}>
            In the afternoon, embark on a boat journey to Ratargul Swamp Forest, Lalakhal, Shada Pathor, or Jaflong before returning for an elegant dinner by the water.
          </p>
          <p className="body-md text-muted" style={{ lineHeight: 1.9, marginBottom: '3rem' }}>
            As evening falls, families gather on the green lawns while friends reconnect over coffee, and business relationships evolve into lasting partnerships. <em style={{ color: 'var(--gold-primary)' }}>This is the Sylhet Boat Club experience.</em>
          </p>
          {/* Interior render */}
          <div className="gold-border-wrapper" style={{ borderRadius: '1.5rem', overflow: 'hidden' }}>
            <img src="/assets/images/renders/lounge1.jpg" alt="SBCL Riverside Lounge" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section bg-navy-mid">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Journey</div>
          <h2 className="heading-xl text-center text-gradient-gold" style={{ marginBottom: '4rem' }}>Development Phases</h2>
          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'rgba(201, 168, 76, 0.2)', transform: 'translateX(-50%)' }} />
            {historyTimeline.map((item, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end', position: 'relative', marginBottom: '3rem', width: '100%' }}>
                <div style={{
                  position: 'absolute', left: '50%', top: '10px', width: '14px', height: '14px', borderRadius: '50%',
                  background: '#c9a84c', border: '3px solid #010812', transform: 'translateX(-50%)', zIndex: 2,
                  boxShadow: '0 0 12px rgba(201,168,76,0.5)'
                }} />
                <div className="glass-card" style={{ width: '44%', padding: '2rem' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--gold-primary)', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>{item.year}</span>
                  <h3 className="heading-md" style={{ marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p className="body-sm text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission — Real Text */}
      <section className="section bg-navy">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Core Pillars</div>
          <h2 className="heading-xl text-center text-gradient-gold" style={{ marginBottom: '4rem' }}>Vision & Mission</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem', marginBottom: '4rem' }}>
            <div className="glass-card" style={{ padding: '3rem 2.5rem' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9a84c', marginBottom: '1.5rem' }}>
                <Compass size={24} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: '1rem' }}>Our Vision</h3>
              <p className="body-sm text-muted" style={{ lineHeight: 1.8 }}>
                To become South Asia's most admired waterfront private club and the premier gateway to Sylhet's natural wonders, recognized internationally for excellence in hospitality, recreation, sustainability, and community leadership.
              </p>
              <ul style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1.25rem' }}>
                {['The preferred destination for NRBs visiting Bangladesh', 'A prestigious meeting place for business & diplomacy', 'A benchmark for sustainable waterfront development', 'A legacy institution future generations call their own'].map(item => (
                  <li key={item} style={{ color: 'var(--white-70)', fontSize: '0.85rem', lineHeight: 1.6 }}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card" style={{ padding: '3rem 2.5rem' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9a84c', marginBottom: '1.5rem' }}>
                <Anchor size={24} />
              </div>
              <h3 className="heading-md" style={{ marginBottom: '1rem' }}>Our Mission</h3>
              <p className="body-sm text-muted" style={{ lineHeight: 1.8 }}>
                To create Bangladesh's finest riverside lifestyle destination by bringing together business leaders, professionals, families, and global citizens in an environment that celebrates nature, hospitality, wellness, recreation, and meaningful human connections.
              </p>
              <ul style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1.25rem' }}>
                {['Promoting eco-friendly tourism & responsible development', 'Providing exceptional leisure, sports & hospitality', 'Building a vibrant community for networking & lifelong friendships', 'Showcasing the natural beauty of Sylhet to the world'].map(item => (
                  <li key={item} style={{ color: 'var(--white-70)', fontSize: '0.85rem', lineHeight: 1.6 }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Six Pillars */}
      <section className="section bg-navy-mid">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Areas of Importance</div>
          <h2 className="heading-xl text-center text-gradient-gold" style={{ marginBottom: '4rem' }}>Six Pillars of SBCL</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9a84c' }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--white)' }}>{title}</h3>
                <p className="body-sm text-muted" style={{ lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values — Real Content */}
      <section className="section bg-navy">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>What We Stand For</div>
          <h2 className="heading-xl text-center text-gradient-gold" style={{ marginBottom: '4rem' }}>Core Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {coreValues.map(({ title, desc }) => {
              const Icon = valueIcons[title] || Star
              return (
                <div key={title} className="glass-card" style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9a84c' }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--gold-primary)' }}>{title}</h3>
                  <p className="body-sm text-muted" style={{ lineHeight: 1.65 }}>{desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Architectural Site Plan — Real Client Asset */}
      <section className="section bg-navy-mid">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Master Plan</div>
          <h2 className="heading-xl text-center text-gradient-gold" style={{ marginBottom: '2rem' }}>Architectural Site Plan</h2>
          <p className="body-md text-muted" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
            Designed by <strong style={{ color: 'var(--gold-primary)' }}>Arquitectura Design Studio</strong> (Principal Architect: Fariah Sharmeen Akbar), the 
            SBCL master plan spans multiple floors along the Sari Gowain riverbank.
          </p>
          <div className="gold-border-wrapper" style={{ borderRadius: '1.5rem', overflow: 'hidden', marginBottom: '2rem' }}>
            <img src="/assets/images/floorplan_page2.png" alt="SBCL Site Plan" style={{ width: '100%', display: 'block' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
            {[
              { label: 'Ground Floor', img: '/assets/images/floorplan_page3.png', desc: 'Main entrance, pool, family lounge & restaurant' },
              { label: 'First Floor', img: '/assets/images/floorplan_page4.png', desc: 'Banquet hall, club offices & special lounge' },
              { label: 'Second Floor', img: '/assets/images/floorplan_page5.png', desc: 'Main bar, billiards room & second lounge' },
              { label: 'Third Floor', img: '/assets/images/floorplan_page6.png', desc: 'Accommodation rooms & upper lounge terrace' },
            ].map(({ label, img, desc }) => (
              <div key={label} className="glass-card" style={{ padding: '0', overflow: 'hidden', borderRadius: 'var(--radius-lg)' }}>
                <img src={img} alt={label} style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '16/9' }} />
                <div style={{ padding: '1.25rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--gold-primary)', marginBottom: '0.35rem' }}>{label}</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--white-50)', lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
