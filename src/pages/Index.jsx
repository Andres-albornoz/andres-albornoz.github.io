import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Certificado from '../core/Certificado.jsx'

const skills = [
  'Python',
  'Unity',
  'React',
  'JavaScript',
  'HTML',
  'CSS',
  'Git',
  'GitHub',
  'c#',
  'java',
]

function Index() {
  useEffect(() => {
    document.title = 'Andrés Albornoz | CV personal'
  }, [])

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Hola, soy</p>
          <h1 id="hero-title">Andrés Albornoz</h1>
          <p className="hero-role">
            Estudiante de Informática · Duoc UC San Joaquín
          </p>
          <p className="hero-text">
            Me interesa el desarrollo de software y los videojuegos. Estoy dando
            mis primeros pasos con Python y Unity, y este sitio reúne lo que he
            aprendido hasta ahora.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#certificados">
              Ver certificados
            </a>
            <Link className="btn btn-ghost" to="/contacto">
              Contacto
            </Link>
            <a
              className="btn btn-ghost"
              href="https://github.com/Andres-albornoz?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span className="btn-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="sobre-mi" aria-labelledby="about-title">
        <div className="section-head">
          <p className="eyebrow">Sobre mí</p>
          <h2 id="about-title">Aprendiendo y construyendo</h2>
        </div>
        <div className="about-grid">
          <div className="card about-card">
            <p>
              Soy estudiante de informática en Duoc UC San Joaquín. Estoy
              interesado en el desarrollo de software y videojuegos.
            </p>

            <p>
              He certificado mis primeros pasos en <strong>Python</strong> y{' '}
              <strong>Unity Essentials</strong>, y sigo practicando con
              tecnologías web como React y el desarrollo de videojuegos como
              programador júnior en Unity Learn.
            </p>
            <div className="about-links">
              <a
                href="https://github.com/Andres-albornoz?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                Ver mi GitHub <span aria-hidden="true">↗</span>
              </a>
              <Link to="/contacto">
                Hablemos <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="card skills-card">
            <h3>Tecnologías que estoy aprendiendo</h3>
            <ul className="skills" aria-label="Tecnologías">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <p className="skills-note">
              Siempre con ganas de sumar una herramienta nueva.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section"
        id="certificados"
        aria-labelledby="certificados-title"
      >
        <div className="section-head">
          <p className="eyebrow">Logros</p>
          <h2 id="certificados-title">Certificados</h2>
          <p className="section-subtitle">
            Certificaciones que respaldan mis primeros pasos en programación y
            desarrollo de videojuegos.
          </p>
        </div>
        <Certificado />
      </section>

      <section className="cta" aria-label="Enlaces de contacto">
        <p className="eyebrow">¿Trabajamos juntos?</p>
        <div className="cta-actions">
          <a className="btn btn-primary" href="mailto:AN.ALBORNOZC@duocuc.cl">
            Enviar correo
          </a>
          <Link className="btn btn-ghost" to="/contacto">
            Ver contacto
          </Link>
        </div>
      </section>
    </>
  )
}

export default Index
