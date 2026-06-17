'use client'
import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setErrorMsg(data.error ?? 'Something went wrong.')
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    } catch {
      setErrorMsg('Network error — please try again.')
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const buttonStyle =
    status === 'success'
      ? { background: 'rgba(0,255,136,0.15)', color: 'var(--accent)', border: '1px solid rgba(0,255,136,0.3)' }
      : status === 'error'
      ? { background: 'rgba(248,113,113,0.15)', color: '#f87171', border: '1px solid rgba(248,113,113,0.3)' }
      : undefined

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="cf-name">Your Name</label>
        <input
          id="cf-name"
          type="text"
          name="name"
          placeholder="Jane Smith"
          value={form.name}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cf-email">Email Address</label>
        <input
          id="cf-email"
          type="email"
          name="email"
          placeholder="jane@company.com"
          value={form.email}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="Tell me about your project..."
          value={form.message}
          onChange={handleChange}
          required
          disabled={status === 'loading'}
        />
      </div>
      {status === 'error' && errorMsg && (
        <p style={{ fontSize: '0.8rem', color: '#f87171', marginTop: '-0.25rem' }}>{errorMsg}</p>
      )}
      <button
        type="submit"
        className="form-submit"
        disabled={status === 'loading'}
        style={buttonStyle}
      >
        {status === 'loading'
          ? 'Sending...'
          : status === 'success'
          ? 'Message Sent ✓'
          : status === 'error'
          ? 'Failed — Try Again'
          : 'Send Message →'}
      </button>
    </form>
  )
}
