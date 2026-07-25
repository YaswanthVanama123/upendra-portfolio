import { useState } from 'react'
import { profile } from '../data/portfolio.js'

const EMPTY = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [note, setNote] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setNote({ type: 'err', text: 'Please fill in every field.' })
      return
    }

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`

    setNote({ type: 'ok', text: 'Thanks! Your email client should open — or reach me directly below.' })
    setForm(EMPTY)
  }

  return (
    <section className="section" id="contact">
      <div className="container contact">
        <p className="contact__eyebrow">
          <span className="section__num">05.</span> What's Next?
        </p>
        <h2 className="contact__title">Get In Touch</h2>
        <p className="contact__desc">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say
          hi, my inbox is always open — I'll do my best to get back to you!
        </p>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__row">
            <label className="field">
              <span className="field__label">Name</span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
            </label>
            <label className="field">
              <span className="field__label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>
          </div>
          <label className="field">
            <span className="field__label">Message</span>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </label>
          <button type="submit" className="btn btn--primary">
            Send Message
          </button>
          {note && <p className={`contact__note contact__note--${note.type}`}>{note.text}</p>}
        </form>

        <div className="contact__info">
          <a href={`mailto:${profile.email}`} className="contact__email">
            {profile.email}
          </a>
          {profile.phone && (
            <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`} className="contact__email">
              {profile.phone}
            </a>
          )}
          {profile.location && <span className="contact__loc">{profile.location}</span>}
        </div>
      </div>
    </section>
  )
}
