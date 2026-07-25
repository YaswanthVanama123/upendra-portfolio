import { timeline } from '../data/portfolio.js'
import { Reveal } from '../hooks/useReveal.jsx'

export default function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <h2 className="section__title">
          <span className="section__num">04.</span> Experience &amp; Education
        </h2>

        <div className="timeline">
          {timeline.map((item, i) => (
            <Reveal key={i} className="timeline__item">
              <div className="timeline__dot"></div>
              <div className="timeline__content">
                <span className="timeline__date">{item.date}</span>
                <h3 className="timeline__title">
                  {item.title} <span className="timeline__at">@ {item.org}</span>
                </h3>
                <p className="timeline__desc">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
