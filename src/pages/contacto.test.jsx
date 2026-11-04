import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderAt } from '../test/renderWithRouter.jsx'

describe('Página de contacto', () => {
  it('muestra el encabezado y el correo de contacto', () => {
    renderAt('/contacto')

    expect(
      screen.getByRole('heading', { level: 1, name: 'Contacto' }),
    ).toBeInTheDocument()

    const enlacesCorreo = screen.getAllByRole('link', {
      name: /AN\.ALBORNOZC@duocuc\.cl/i,
    })
    expect(enlacesCorreo.length).toBeGreaterThan(0)
    for (const enlace of enlacesCorreo) {
      expect(enlace).toHaveAttribute('href', 'mailto:AN.ALBORNOZC@duocuc.cl')
    }
  })

  it('enlaza al perfil de GitHub en una pestaña nueva', () => {
    renderAt('/contacto')

    const github = screen.getByRole('link', { name: /Andres-albornoz/i })
    expect(github).toHaveAttribute(
      'href',
      'https://github.com/Andres-albornoz?tab=repositories',
    )
    expect(github).toHaveAttribute('target', '_blank')
    expect(github).toHaveAttribute('rel', 'noreferrer')
  })

  it('muestra la ubicación como dato, no como enlace', () => {
    renderAt('/contacto')

    const ubicacion = screen.getByText('San Joaquín, Santiago')
    expect(ubicacion).toBeInTheDocument()
    expect(ubicacion.closest('a')).toBeNull()
  })

  it('actualiza el título del documento', () => {
    renderAt('/contacto')

    expect(document.title).toBe('Contacto | Andrés Albornoz')
  })
})
