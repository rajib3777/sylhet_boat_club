import { notices } from '../../data/appData'
import './NoticeTicker.css'

export default function NoticeTicker() {
  return (
    <div className="notice-ticker">
      <div className="ticker-badge">
        <span className="ticker-dot" />
        <span>জরুরি নোটিশ</span>
      </div>
      <div className="ticker-scroll-wrap">
        <div className="ticker-track">
          {[...notices, ...notices].map((n, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-en">{n.title}</span>
              <span className="ticker-sep">◆</span>
              <span className="ticker-bn">{n.titleBn}</span>
              <span className="ticker-sep">◆◆◆</span>
            </span>
          ))}
        </div>
      </div>
      <a href="/notice" className="ticker-cta">All Notices →</a>
    </div>
  )
}
