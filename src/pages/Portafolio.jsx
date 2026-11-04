import { useEffect, useState } from 'react'
import RepoCard from '../core/RepoCard.jsx'
import { ErrorMessage, Loading } from '../core/Status.jsx'
import useFetch from '../hooks/useFetch.js'
import {
  GITHUB_PROFILE_URL,
  getLanguages,
  prepareRepos,
  reposUrl,
} from '../services/github.js'

function Portafolio() {
  useEffect(() => {
    document.title = 'Portafolio | Andrés Albornoz'
  }, [])

  const { data, error, loading } = useFetch(reposUrl())
  const [language, setLanguage] = useState('Todos')

  // Valores derivados: se recalculan en cada render a partir de los datos.
  const repos = data ? prepareRepos(data) : []
  const languages = ['Todos', ...getLanguages(repos)]
  const visible =
    language === 'Todos' ? repos : repos.filter((repo) => repo.language === language)

  return (
    <section className="portafolio" aria-labelledby="portafolio-title">
      <p className="eyebrow">Proyectos</p>
      <h1 id="portafolio-title">Portafolio</h1>
      <p className="portafolio-lead">
        Repositorios públicos de{' '}
        <a href={GITHUB_PROFILE_URL} target="_blank" rel="noreferrer">
          github.com/Andres-albornoz
        </a>
        , obtenidos en vivo desde la API de GitHub.
      </p>

      {loading && <Loading text="Cargando repositorios…" />}
      {error && <ErrorMessage error={error} />}

      {data && !error && (
        <>
          <div
            className="repo-filters"
            role="group"
            aria-label="Filtrar por lenguaje"
          >
            {languages.map((lang) => (
              <button
                key={lang}
                type="button"
                className={lang === language ? 'chip chip--active' : 'chip'}
                aria-pressed={lang === language}
                onClick={() => setLanguage(lang)}
              >
                {lang}
              </button>
            ))}
          </div>

          <p className="repo-count">
            {visible.length} {visible.length === 1 ? 'proyecto' : 'proyectos'}
          </p>

          {visible.length > 0 ? (
            <div className="repo-grid">
              {visible.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          ) : (
            <p className="repo-empty">No hay proyectos en este lenguaje.</p>
          )}
        </>
      )}
    </section>
  )
}

export default Portafolio
