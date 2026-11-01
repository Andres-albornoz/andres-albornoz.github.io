import { useEffect } from 'react'

const contactos = [
  {
    label: 'Correo',
    value: 'AN.ALBORNOZC@duocuc.cl',
    href: 'mailto:AN.ALBORNOZC@duocuc.cl',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.4l8 5 8-5V7H4Zm16 10V9.8l-7.4 4.6a1 1 0 0 1-1.2 0L4 9.8V17h16Z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'Andres-albornoz',
    href: 'https://github.com/Andres-albornoz?tab=repositories',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'Ubicación',
    value: 'San Joaquín, Santiago',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
      </svg>
    ),
  },
]

function Contacto() {
  useEffect(() => {
    document.title = 'Contacto | Andrés Albornoz'
  }, [])

  return (
    <section className="contacto" aria-labelledby="contacto-title">
      <p className="eyebrow">Hablemos</p>
      <h1 id="contacto-title">Contacto</h1>
      <p className="contact-lead">
        ¿Tienes una pregunta, una propuesta o simplemente quieres saludar?
        Escríbeme por correo o encuéntrame en GitHub.
      </p>

      <div className="contact-grid">
        {contactos.map((contacto) => {
          const content = (
            <>
              <span className="contact-icon">{contacto.icon}</span>
              <span className="contact-label">{contacto.label}</span>
              <strong>{contacto.value}</strong>
            </>
          )

          return contacto.href ? (
            <a
              className="contact-card"
              href={contacto.href}
              key={contacto.label}
              target={contacto.href.startsWith('http') ? '_blank' : undefined}
              rel={contacto.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {content}
            </a>
          ) : (
            <div className="contact-card" key={contacto.label}>
              {content}
            </div>
          )
        })}
      </div>

      <div className="contact-note">
        <h2>¿Prefieres el correo directo?</h2>
        <p>
          Puedes escribirme a{' '}
          <a href="mailto:AN.ALBORNOZC@duocuc.cl">
            AN.ALBORNOZC@duocuc.cl
          </a>{' '}
          y te responderé lo antes posible.
        </p>
        <a className="btn btn-primary" href="mailto:AN.ALBORNOZC@duocuc.cl">
          Enviar un correo
        </a>
      </div>
    </section>
  )
}

export default Contacto
