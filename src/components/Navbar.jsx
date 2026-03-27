import { useState } from 'react'
import './navbar.css'

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const [active, setActive] = useState('Work')
  const links = ['Work', 'About', 'Contact']

  return (
    <nav className={dark ? 'dark' : 'light'}>
      <div className="brand">
        risto <span>/ dev</span>
      </div>

      <div className="nav-links">
        {links.map(l => (
          <a
            key={l}
            className={active === l ? 'active' : ''}
            onClick={() => setActive(l)}
          >{l}</a>
        ))}
      </div>

      <div className="nav-right">
        <button
          className="theme-toggle"
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
        >
          <span>☀️</span>
          <div className="toggle-pill">
            <div className="toggle-knob" />
          </div>
          <span>🌙</span>
        </button>
      </div>
    </nav>
  )
}