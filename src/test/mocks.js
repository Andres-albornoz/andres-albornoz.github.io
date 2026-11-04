import { vi } from 'vitest'

// Datos falsos (mocks) para no depender de internet en las pruebas.
// Imitan la forma en que la API de GitHub responde a /users/:user/repos.
export const repos = [
  {
    id: 1,
    name: 'cv-web',
    description: 'Sitio CV personal hecho con React y Vite.',
    language: 'JavaScript',
    stargazers_count: 3,
    updated_at: '2026-09-10T00:00:00Z',
    fork: false,
    html_url: 'https://github.com/Andres-albornoz/cv-web',
  },
  {
    id: 2,
    name: 'tarea-python',
    description: 'Ejercicios y tareas del curso de Python.',
    language: 'Python',
    stargazers_count: 5,
    updated_at: '2026-08-01T00:00:00Z',
    fork: false,
    html_url: 'https://github.com/Andres-albornoz/tarea-python',
  },
  {
    id: 3,
    name: 'juego-unity',
    description: 'Prototipo de videojuego desarrollado en Unity.',
    language: 'C#',
    stargazers_count: 3,
    updated_at: '2026-10-01T00:00:00Z',
    fork: false,
    html_url: 'https://github.com/Andres-albornoz/juego-unity',
  },
  {
    id: 4,
    name: 'fork-ejemplo',
    description: 'Un repositorio forkeado que no debe mostrarse.',
    language: 'Java',
    stargazers_count: 99,
    updated_at: '2026-10-15T00:00:00Z',
    fork: true,
    html_url: 'https://github.com/Andres-albornoz/fork-ejemplo',
  },
  {
    id: 5,
    name: 'repo-sin-lenguaje',
    description: 'Repositorio sin lenguaje detectado por GitHub.',
    language: null,
    stargazers_count: 0,
    updated_at: '2026-07-01T00:00:00Z',
    fork: false,
    html_url: 'https://github.com/Andres-albornoz/repo-sin-lenguaje',
  },
]

/**
 * Reemplaza fetch global por uno que responde según la URL pedida.
 * Ejemplo: mockFetch({ '/users/Andres-albornoz/repos': repos })
 */
export function mockFetch(routes) {
  return vi.fn(async (url) => {
    const entry = Object.entries(routes).find(([pattern]) => String(url).includes(pattern))
    if (!entry) return { ok: false, status: 404, statusText: 'Not Found', json: async () => ({}) }
    return { ok: true, status: 200, statusText: 'OK', json: async () => entry[1] }
  })
}
