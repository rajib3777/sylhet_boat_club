import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Anchor, Users, Building2, CalendarDays } from 'lucide-react'
import './StatsBar.css'

const stats = [
  { icon: Anchor, num: 12, suffix: '+', label: 'Years of Legacy', desc: 'Est. 2014' },
  { icon: Users, num: 3200, suffix: '+', label: 'Distinguished Members', desc: 'Elite Community' },
  { icon: Building2, num: 15, suffix: '+', label: 'Elite Facilities', desc: 'World Class' },
  { icon: CalendarDays, num: 50, suffix: '+', label: 'Annual Events', desc: 'Year Round' },
]

export default function StatsBar() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section className="stats-bar" ref={ref}>
      <div className="stats-bar-glow" />
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="stat-item">
                <div className="stat-icon">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <div className="stat-body">
                  <div className="stat-number">
                    {inView ? (
                      <CountUp end={s.num} duration={2.5} delay={i * 0.2} separator="," />
                    ) : '0'}
                    <span className="stat-suffix">{s.suffix}</span>
                  </div>
                  <div className="stat-label">{s.label}</div>
                  <div className="stat-desc">{s.desc}</div>
                </div>
                {i < stats.length - 1 && <div className="stat-divider" />}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
