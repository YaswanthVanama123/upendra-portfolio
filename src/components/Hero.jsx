import { profile } from '../data/portfolio.js'
import { Reveal } from '../hooks/useReveal.jsx'

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero__inner">
        <Reveal className="hero__content">
          <p className="hero__eyebrow">Hi, my name is</p>
          <h1 className="hero__name">{profile.name}</h1>
          <h2 className="hero__role">
            {profile.role}
            <span className="hero__role-accent">— {profile.tagline}</span>
          </h2>
          <p className="hero__desc">{profile.intro}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Work
            </a>
            <a href={profile.resumeUrl} className="btn btn--ghost" download>
              Download Resume
            </a>
          </div>

          <ul className="hero__socials">
            {profile.socials.github && (
              <li>
                <a href={profile.socials.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            )}
            {profile.socials.linkedin && (
              <li>
                <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            )}
            <li>
              <a href={`mailto:${profile.email}`}>Email</a>
            </li>
          </ul>
        </Reveal>

        <Reveal className="hero__visual">
          <div className="hero__photo">
            <img src={profile.photo} alt={profile.name} width="440" height="440" loading="eager" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
