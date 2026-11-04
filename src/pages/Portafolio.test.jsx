import { screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mockFetch, repos } from '../test/mocks.js'
import { renderAt } from '../test/renderWithRouter.jsx'

beforeEach(() => {
  vi.stubGlobal(
    'fetch',
    mockFetch({ '/users/Andres-albornoz/repos': repos }),
  )
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('Página de portafolio', () => {
  it('muestra el estado de carga y luego los repositorios sin forks', async () => {
    renderAt('/portafolio')

    expect(screen.getByRole('status')).toHaveTextContent(/cargando/i)

    expect(await screen.findByText('tarea-python')).toBeInTheDocument()
    expect(screen.getByText('juego-unity')).toBeInTheDocument()
    expect(screen.getByText('cv-web')).toBeInTheDocument()
    expect(screen.getByText('repo-sin-lenguaje')).toBeInTheDocument()
    expect(screen.queryByText('fork-ejemplo')).not.toBeInTheDocument()
    expect(screen.getByText('4 proyectos')).toBeInTheDocument()
  })

  it('muestra un filtro por cada lenguaje disponible', async () => {
    renderAt('/portafolio')

    const filtros = await screen.findByRole('group', {
      name: 'Filtrar por lenguaje',
    })
    const botones = within(filtros)
      .getAllByRole('button')
      .map((boton) => boton.textContent)

    expect(botones).toEqual(['Todos', 'C#', 'JavaScript', 'Python'])
    expect(within(filtros).getByRole('button', { name: 'Todos' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })

  it('filtra los repositorios por lenguaje', async () => {
    const user = userEvent.setup()
    renderAt('/portafolio')

    await screen.findByText('tarea-python')
    await user.click(screen.getByRole('button', { name: 'Python' }))

    expect(screen.getByText('tarea-python')).toBeInTheDocument()
    expect(screen.queryByText('juego-unity')).not.toBeInTheDocument()
    expect(screen.queryByText('cv-web')).not.toBeInTheDocument()
    expect(screen.getByText('1 proyecto')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Python' }),
    ).toHaveAttribute('aria-pressed', 'true')

    await user.click(screen.getByRole('button', { name: 'Todos' }))

    expect(screen.getByText('juego-unity')).toBeInTheDocument()
    expect(screen.getByText('4 proyectos')).toBeInTheDocument()
  })

  it('muestra un mensaje cuando no hay repositorios', async () => {
    vi.stubGlobal('fetch', mockFetch({ '/users/Andres-albornoz/repos': [] }))

    renderAt('/portafolio')

    expect(await screen.findByText('0 proyectos')).toBeInTheDocument()
    expect(
      screen.getByText('No hay proyectos en este lenguaje.'),
    ).toBeInTheDocument()
  })

  it('muestra un error si la API responde con error', async () => {
    vi.stubGlobal('fetch', mockFetch({}))

    renderAt('/portafolio')

    expect(await screen.findByRole('alert')).toHaveTextContent(/Error 404/)
    expect(
      screen.queryByRole('group', { name: 'Filtrar por lenguaje' }),
    ).not.toBeInTheDocument()
  })

  it('actualiza el título del documento', () => {
    renderAt('/portafolio')

    expect(document.title).toBe('Portafolio | Andrés Albornoz')
  })
})
