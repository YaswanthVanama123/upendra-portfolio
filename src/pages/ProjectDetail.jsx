import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/portfolio.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)

  if (index === -1) {
    return (
      <main className="detail">
        <div className="container">
          <h1 className="detail__title">Project not found</h1>
          <p className="detail__overview">
            Sorry, that project doesn't exist. It may have been moved or renamed.
          </p>
          <Link to="/#projects" className="btn btn--primary">
            Back to Projects
          </Link>
        </div>
      </main>
    )
  }

  const project = projects[index]
  const prev = projects[index - 1]
  const next = projects[index + 1]

  return (
    <main className="detail">
      <div className="container">
        <Link to="/#projects" className="detail__back">
          <span aria-hidden="true">←</span> Back to Projects
        </Link>

        <header className="detail__header">
          <p className="detail__eyebrow">Project {String(index + 1).padStart(2, '0')}</p>
          <h1 className="detail__title">{project.title}</h1>
          {project.context && <p className="detail__context">{project.context}</p>}

          <ul className="detail__tech">
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>

          {(project.codeUrl || project.liveUrl) && (
            <div className="detail__links">
              {project.codeUrl && (
                <a href={project.codeUrl} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          )}
        </header>

        <p className="detail__overview">{project.description}</p>

        {project.features?.length > 0 && (
          <section className="detail__section">
            <h2 className="detail__section-title">Key Features</h2>
            <ul className="detail__features">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </section>
        )}

        {project.stackUsage?.length > 0 && (
          <section className="detail__section">
            <h2 className="detail__section-title">Tech Stack in Action</h2>
            <ul className="detail__stack">
              {project.stackUsage.map((s) => (
                <li key={s.tech}>
                  <span className="detail__stack-tech">{s.tech}</span>
                  <span className="detail__stack-detail">{s.detail}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.challenges?.length > 0 && (
          <section className="detail__section">
            <h2 className="detail__section-title">Challenges &amp; Solutions</h2>
            <div className="detail__challenges">
              {project.challenges.map((c, i) => (
                <div className="challenge" key={i}>
                  <p className="challenge__problem">
                    <span>Challenge</span> {c.problem}
                  </p>
                  <p className="challenge__solution">
                    <span>Solution</span> {c.solution}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <nav className="detail__pager" aria-label="Project navigation">
          {prev ? (
            <Link to={`/projects/${prev.slug}`} className="detail__pager-link detail__pager-link--prev">
              <span>← Previous</span>
              <strong>{prev.title}</strong>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/projects/${next.slug}`} className="detail__pager-link detail__pager-link--next">
              <span>Next →</span>
              <strong>{next.title}</strong>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </main>
  )
}
