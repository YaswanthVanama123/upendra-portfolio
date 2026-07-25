import { profile } from '../data/portfolio.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">
          Designed &amp; built by <strong>{profile.name}</strong>
        </p>
        <ul className="footer__socials">
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
        <p className="footer__copy">
          © {year} {profile.shortName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
