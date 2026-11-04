import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderAt } from '../test/renderWithRouter.jsx'

describe('Página de inicio', () => {
  it('muestra el encabezado y la presentación', () => {
    renderAt('/')

    expect(
      screen.getByRole('heading', { level: 1, name: 'Andrés Albornoz' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Aprendiendo y construyendo' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Estudiante de Informática/)).toBeInTheDocument()
  })

  it('lista las tecnologías del estudiante', () => {
    renderAt('/')

    const lista = screen.getByRole('list', { name: 'Tecnologías' })
    const tecnologias = screen
      .getAllByRole('listitem')
      .filter((item) => lista.contains(item))
      .map((item) => item.textContent)

    expect(tecnologias).toContain('Python')
    expect(tecnologias).toContain('Unity')
    expect(tecnologias).toContain('React')
    expect(tecnologias).toHaveLength(10)
  })

  it('muestra la sección de certificados', () => {
    renderAt('/')

    expect(
      screen.getByRole('heading', { level: 2, name: 'Certificados' }),
    ).toBeInTheDocument()

    const seccion = screen.getByRole('region', { name: 'Certificados' })
    expect(within(seccion).getAllByRole('article')).toHaveLength(2)
    expect(within(seccion).getByText('Entry Level Python')).toBeInTheDocument()
    expect(within(seccion).getByText('Unity Essentials')).toBeInTheDocument()
  })

  it('enlaza al correo y a la página de contacto', () => {
    renderAt('/')

    expect(
      screen.getByRole('link', { name: 'Enviar correo' }),
    ).toHaveAttribute('href', 'mailto:AN.ALBORNOZC@duocuc.cl')
    expect(
      screen.getByRole('link', { name: 'Ver contacto' }),
    ).toHaveAttribute('href', '/contacto')
    expect(
      screen.getByRole('link', { name: 'Ver certificados' }),
    ).toHaveAttribute('href', '#certificados')
  })

  it('actualiza el título del documento', () => {
    renderAt('/')

    expect(document.title).toBe('Andrés Albornoz | CV personal')
  })
})
