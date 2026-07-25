import { useEffect, useState } from 'react'
import { about } from '../data/portfolio.js'
import { Reveal, useReveal } from '../hooks/useReveal.jsx'

function Stat({ value, label }) {
  const { ref, visible } = useReveal({ threshold: 0.4 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!visible) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setCount(value)
      return
    }

    const duration = 1200
    let start = null
    let frame
    const step = (ts) => {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * value))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [visible, value])

  return (
    <div className="stat" ref={ref}>
      <span className="stat__num">{count}</span>
      <span className="stat__plus">+</span>
      <p className="stat__label">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section__title">
          <span className="section__num">01.</span> About Me
        </h2>

        <div className="about">
          <Reveal className="about__text">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="about__list">
              {about.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="about__stats">
            {about.stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
