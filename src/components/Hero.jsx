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
          <div className="code-card">
            <div className="code-card__bar">
              <span></span>
              <span></span>
              <span></span>
              <p className="code-card__file">developer.js</p>
            </div>
            <pre className="code-card__body">
              <code>
                <span className="tok-key">const</span> <span className="tok-var">developer</span> = {'{'}
                {'\n'}  <span className="tok-prop">name</span>:{' '}
                <span className="tok-str">"{profile.shortName}"</span>,{'\n'}  <span className="tok-prop">role</span>:{' '}
                <span className="tok-str">"{profile.role}"</span>,{'\n'}  <span className="tok-prop">stacks</span>: [
                <span className="tok-str">"MERN"</span>, <span className="tok-str">"PERN"</span>],{'\n'}{'  '}
                <span className="tok-prop">focus</span>: <span className="tok-str">"scalable web apps"</span>,{'\n'}{'  '}
                <span className="tok-prop">available</span>: <span className="tok-bool">true</span>,{'\n'}
                {'}'};
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
