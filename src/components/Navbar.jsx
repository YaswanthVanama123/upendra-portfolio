import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { profile } from '../data/portfolio.js'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  const goToSection = (e, id) => {
    e.preventDefault()
    close()
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${id}`)
    }
  }

  const goHome = (e) => {
    e.preventDefault()
    close()
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="/" className="nav__brand" onClick={goHome}>
          <span className="nav__brand-mark">&lt;/&gt;</span>
          <span className="nav__brand-text">{profile.shortName}</span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.id} href={`/#${link.id}`} className="nav__link" onClick={(e) => goToSection(e, link.id)}>
              {link.label}
            </a>
          ))}
          <a href="/#contact" className="nav__link nav__link--cta" onClick={(e) => goToSection(e, 'contact')}>
            Contact
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
