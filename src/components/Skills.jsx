import { stacks, skillGroups } from '../data/portfolio.js'
import { Reveal } from '../hooks/useReveal.jsx'

export default function Skills() {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <h2 className="section__title">
          <span className="section__num">02.</span> Skills &amp; Stack
        </h2>
        <p className="section__lead">
          Backend-first: Core Java, J2EE, and Spring for services, Kafka and MQ for integration, Oracle and Cassandra
          for data — with React when a feature needs a UI.
        </p>

        <div className="stacks">
          {stacks.map((stack) => (
            <Reveal as="article" key={stack.key} className={`stack-card stack-card--${stack.key}`}>
              <div className="stack-card__head">
                <h3 className="stack-card__title">{stack.title}</h3>
                <span className="stack-card__tag">{stack.tag}</span>
              </div>
              <ul className="stack-card__list">
                {stack.items.map((item) => (
                  <li key={item.name}>
                    <span className="dot"></span>
                    <span>
                      <strong>{item.name}</strong> — {item.note}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <Reveal key={group.title} className="skill-group">
              <h4 className="skill-group__title">{group.title}</h4>
              <ul className="chips">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
