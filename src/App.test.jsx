import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderAt } from './test/renderWithRouter.jsx'

// Pruebas de integración: renderizamos la app en jsdom y navegamos como un usuario.
describe('Navegación', () => {
  it('muestra la portada con el nombre y enlaces a GitHub', () => {
    renderAt('/')

    expect(
      screen.getByRole('heading', { level: 1, name: 'Andrés Albornoz' }),
    ).toBeInTheDocument()

    const githubLinks = screen.getAllByRole('link', { name: /github/i })
    expect(githubLinks.length).toBeGreaterThan(0)
    for (const link of githubLinks) {
      expect(link).toHaveAttribute(
        'href',
        expect.stringContaining('github.com/Andres-albornoz'),
      )
    }
  })

  it('navega a Contacto desde el menú', async () => {
    const user = userEvent.setup()
    renderAt('/')

    // El menú y el pie tienen un enlace "Contacto": usamos el del encabezado.
    await user.click(screen.getAllByRole('link', { name: 'Contacto' })[0])

    expect(
      await screen.findByRole('heading', { level: 1, name: 'Contacto' }),
    ).toBeInTheDocument()
    expect(document.title).toBe('Contacto | Andrés Albornoz')
  })

  it('vuelve al inicio desde el menú', async () => {
    const user = userEvent.setup()
    renderAt('/contacto')

    await user.click(screen.getByRole('link', { name: 'Inicio' }))

    expect(
      await screen.findByRole('heading', { level: 1, name: 'Andrés Albornoz' }),
    ).toBeInTheDocument()
  })

  it('incluye el enlace para saltar al contenido principal', () => {
    renderAt('/')

    expect(
      screen.getByRole('link', { name: 'Saltar al contenido' }),
    ).toHaveAttribute('href', '#main')
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main')
  })
})
