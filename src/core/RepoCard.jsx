export default function RepoCard({ repo }) {
  return (
    <article className="repo-card">
      <div className="repo-card-head">
        <h3>
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            {repo.name}
          </a>
        </h3>
        <span className="repo-stars" aria-label={`${repo.stargazers_count} estrellas`}>
          ★ {repo.stargazers_count}
        </span>
      </div>

      <p className="repo-desc">{repo.description ?? 'Sin descripción.'}</p>

      <footer className="repo-meta">
        <span className="tag">{repo.language ?? 'Sin lenguaje'}</span>
        <span>Actualizado {new Date(repo.updated_at).toLocaleDateString('es-CL')}</span>
      </footer>
    </article>
  )
}
