import { Link } from 'react-router-dom'
import { projects } from '../data/portfolio.js'
import { Reveal } from '../hooks/useReveal.jsx'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section__title">
          <span className="section__num">03.</span> Featured Projects
        </h2>
        <p className="section__lead">
          Enterprise and personal full-stack applications across the MERN &amp; PERN stacks.
          Open a case study for a deep dive into the tech stack and the problems solved.
        </p>

        <div className="projects">
          {projects.map((project, i) => (
            <Reveal as="article" key={project.slug} className="project-card">
              <div className="project-card__index" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="project-card__body">
                <div className="project-card__head">
                  <div>
                    <h3 className="project-card__title">
                      <Link to={`/projects/${project.slug}`}>{project.title}</Link>
                    </h3>
                    {project.context && <p className="project-card__context">{project.context}</p>}
                  </div>

                  <div className="project-card__links">
                    {project.codeUrl && (
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live
                      </a>
                    )}
                  </div>
                </div>

                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__foot">
                  <ul className="project-card__tech">
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>

                  <Link className="project-card__more" to={`/projects/${project.slug}`}>
                    View Case Study <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
