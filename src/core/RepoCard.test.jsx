import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { repos } from '../test/mocks.js'
import RepoCard from './RepoCard.jsx'

describe('RepoCard', () => {
  it('muestra el nombre como enlace al repositorio', () => {
    render(<RepoCard repo={repos[1]} />)

    expect(
      screen.getByRole('heading', { level: 3, name: 'tarea-python' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'tarea-python' })).toHaveAttribute(
      'href',
      'https://github.com/Andres-albornoz/tarea-python',
    )
  })

  it('muestra descripción, lenguaje, estrellas y fecha', () => {
    render(<RepoCard repo={repos[1]} />)

    expect(
      screen.getByText('Ejercicios y tareas del curso de Python.'),
    ).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('★ 5')).toBeInTheDocument()
    expect(screen.getByText('★ 5')).toHaveAttribute('aria-label', '5 estrellas')
    expect(screen.getByText(/^Actualizado /)).toBeInTheDocument()
  })

  it('usa textos de respaldo cuando faltan datos', () => {
    const sinDatos = {
      id: 99,
      name: 'repo-vacio',
      description: null,
      language: null,
      stargazers_count: 0,
      updated_at: '2026-01-01T00:00:00Z',
      html_url: 'https://github.com/Andres-albornoz/repo-vacio',
    }

    render(<RepoCard repo={sinDatos} />)

    expect(screen.getByText('Sin descripción.')).toBeInTheDocument()
    expect(screen.getByText('Sin lenguaje')).toBeInTheDocument()
    expect(screen.getByText('★ 0')).toBeInTheDocument()
  })
})
