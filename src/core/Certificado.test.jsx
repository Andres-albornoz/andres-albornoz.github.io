import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Certificado from './Certificado.jsx'

describe('Certificado', () => {
  it('muestra una tarjeta por cada certificado', () => {
    render(<Certificado />)

    const tarjetas = screen.getAllByRole('article')
    expect(tarjetas).toHaveLength(2)

    expect(
      within(tarjetas[0]).getByRole('heading', { name: 'Entry Level Python' }),
    ).toBeInTheDocument()
    expect(
      within(tarjetas[1]).getByRole('heading', { name: 'Unity Essentials' }),
    ).toBeInTheDocument()
  })

  it('muestra la imagen, el emisor y la descripción', () => {
    render(<Certificado />)

    expect(
      screen.getByRole('img', { name: 'Certificado Entry Level Python' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Certificado Unity Essentials' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('Unity')).toBeInTheDocument()
    expect(
      screen.getByText('Fundamentos de programación con Python.'),
    ).toBeInTheDocument()
  })

  it('abre cada certificado en una pestaña nueva', () => {
    render(<Certificado />)

    const enlaces = screen.getAllByRole('link')
    expect(enlaces).toHaveLength(4)

    for (const enlace of enlaces) {
      expect(enlace).toHaveAttribute('target', '_blank')
      expect(enlace).toHaveAttribute('rel', 'noreferrer')
      expect(enlace.getAttribute('href')).toBeTruthy()
    }

    expect(
      screen.getByRole('link', { name: 'Ver Entry Level Python en tamaño completo' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Ver certificado/i })).toHaveLength(2)
  })
})
