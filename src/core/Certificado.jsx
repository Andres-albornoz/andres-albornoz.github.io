import pythonCert from '../assets/certificado-python.jpg'
import unityCert from '../assets/certificado-unity.png'

const certificados = [
  {
    title: 'Entry Level Python',
    issuer: 'Python',
    description: 'Fundamentos de programación con Python.',
    image: pythonCert,
    alt: 'Certificado Entry Level Python',
  },
  {
    title: 'Unity Essentials',
    issuer: 'Unity',
    description: 'Introducción al desarrollo de videojuegos con Unity.',
    image: unityCert,
    alt: 'Certificado Unity Essentials',
  },
]

function Certificado() {
  return (
    <div className="cert-grid">
      {certificados.map((certificado) => (
        <article className="cert-card" key={certificado.title}>
          <a
            className="cert-media"
            href={certificado.image}
            target="_blank"
            rel="noreferrer"
            aria-label={`Ver ${certificado.title} en tamaño completo`}
          >
            <img
              src={certificado.image}
              alt={certificado.alt}
              loading="lazy"
            />
          </a>
          <div className="cert-body">
            <span className="tag">{certificado.issuer}</span>
            <h3>{certificado.title}</h3>
            <p>{certificado.description}</p>
            <a
              className="cert-link"
              href={certificado.image}
              target="_blank"
              rel="noreferrer"
            >
              Ver certificado <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Certificado
