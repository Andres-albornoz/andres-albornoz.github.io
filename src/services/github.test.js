import { describe, expect, it } from 'vitest'
import { repos } from '../test/mocks.js'
import {
  GITHUB_AVATAR_URL,
  GITHUB_PROFILE_URL,
  GITHUB_USER,
  getLanguages,
  prepareRepos,
  reposUrl,
  userUrl,
} from './github.js'

describe('github: constantes y URLs', () => {
  it('usa la cuenta de GitHub del sitio', () => {
    expect(GITHUB_USER).toBe('Andres-albornoz')
    expect(GITHUB_PROFILE_URL).toBe('https://github.com/Andres-albornoz')
    expect(GITHUB_AVATAR_URL).toBe('https://avatars.githubusercontent.com/Andres-albornoz')
  })

  it('arma las URLs de la API de GitHub', () => {
    expect(userUrl()).toBe('https://api.github.com/users/Andres-albornoz')
    expect(reposUrl()).toBe(
      'https://api.github.com/users/Andres-albornoz/repos?sort=updated&per_page=100',
    )
  })
})

describe('github: prepareRepos', () => {
  it('quita los forks', () => {
    const result = prepareRepos(repos)

    expect(result.map((repo) => repo.name)).not.toContain('fork-ejemplo')
    expect(result.every((repo) => !repo.fork)).toBe(true)
  })

  it('ordena por estrellas de mayor a menor', () => {
    const result = prepareRepos(repos)

    expect(result.map((repo) => repo.name)).toEqual([
      'tarea-python',
      'juego-unity',
      'cv-web',
      'repo-sin-lenguaje',
    ])
  })

  it('desempata por fecha de actualización más reciente', () => {
    // juego-unity y cv-web tienen 3 estrellas; juego-unity se actualizó después.
    const result = prepareRepos(repos)
    const conTresEstrellas = result.filter((repo) => repo.stargazers_count === 3)

    expect(conTresEstrellas.map((repo) => repo.name)).toEqual(['juego-unity', 'cv-web'])
  })

  it('no modifica el arreglo original', () => {
    const copia = [...repos]

    prepareRepos(repos)

    expect(repos).toEqual(copia)
  })

  it('devuelve un arreglo vacío si no hay repositorios', () => {
    expect(prepareRepos([])).toEqual([])
  })
})

describe('github: getLanguages', () => {
  it('lista los lenguajes únicos en orden alfabético', () => {
    expect(getLanguages(repos)).toEqual(['C#', 'Java', 'JavaScript', 'Python'])
  })

  it('ignora los repositorios sin lenguaje', () => {
    const sinLenguaje = [
      { language: null },
      { language: 'Python' },
      { language: 'Python' },
      {},
    ]

    expect(getLanguages(sinLenguaje)).toEqual(['Python'])
  })

  it('devuelve un arreglo vacío si no hay repositorios', () => {
    expect(getLanguages([])).toEqual([])
  })
})
