import './Navbar.css'
import { useEffect, useState } from 'react'

function Navbar() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) root.classList.add('dark-theme')
    else root.classList.remove('dark-theme')
  }, [isDark])

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="brand">Portfolio</a>
        <nav>
          <ul className="nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact" className="contact-link">Contact</a></li>
            <li>
              <button
                type="button"
                className="theme-toggle"
                onClick={() => setIsDark((v) => !v)}
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                title={isDark ? 'Light theme' : 'Dark theme'}
              >
                <span aria-hidden>{isDark ? '☀️' : '🌙'}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar


