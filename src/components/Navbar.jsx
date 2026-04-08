import { useState } from 'react'
import './navbar.css'

export default function Navbar({ onMenuClick }) {
  const [dark, setDark] = useState(false)
  const [active, setActive] = useState('Work')
  const links = ['Work', 'About', 'Contact']

  return (
    <nav className={dark ? 'dark' : 'light'}>

      { /* hamburger — calls onMenuClick from App */ }
      <button
        className="icon-btn"
        onClick={onMenuClick}
        aria-label="Toggle sidebar"
      >
        <HamburgerIcon />
      </button>

      <span className="brand">
        Risto <span className="brand-sub">/ dev</span>
      </span>

      <div className="nav-links">
        {links.map(l => (
          <div
            key={l}
            className={`nav-link ${active === l ? 'active' : ''}`}
            onClick={() => setActive(l)}
          >{l}</div>
        ))}
      </div>

      <div className="nav-right">
        <button
          className="theme-toggle"
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
        >
          <span>☀</span>
          <div className="toggle-pill">
            <div className="toggle-knob" />
          </div>
          <span>☽</span>
        </button>
      </div>
    </nav>
  )
}

function HamburgerIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16"
      fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round"
    >
      <path d="M2 4h12M2 8h12M2 12h12" />
    </svg>
  )
}