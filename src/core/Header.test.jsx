import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderAt } from '../test/renderWithRouter.jsx'

describe('Header', () => {
  it('muestra la marca como enlace al inicio', () => {
    renderAt('/')

    const header = screen.getByRole('banner')
    const marca = within(header).getByRole('link', { name: 'Ir al inicio' })

    expect(marca).toHaveAttribute('href', '/')
    expect(marca).toHaveTextContent('Andrés Albornoz')
    expect(marca).toHaveTextContent('CV personal')
  })

  it('muestra los enlaces de navegación', () => {
    renderAt('/')

    const header = screen.getByRole('banner')
    const nav = within(header).getByRole('navigation', {
      name: 'Navegación principal',
    })

    expect(within(nav).getByRole('link', { name: 'Inicio' })).toHaveAttribute(
      'href',
      '/',
    )
    expect(within(nav).getByRole('link', { name: 'Contacto' })).toHaveAttribute(
      'href',
      '/contacto',
    )

    const portafolio = within(nav).getByRole('link', { name: /portafolio/i })
    expect(portafolio).toHaveAttribute(
      'href',
      'https://github.com/Andres-albornoz?tab=repositories',
    )
    expect(portafolio).toHaveAttribute('target', '_blank')
    expect(portafolio).toHaveAttribute('rel', 'noreferrer')
  })

  it('marca la ruta activa con aria-current', () => {
    renderAt('/contacto')

    const header = screen.getByRole('banner')
    const nav = within(header).getByRole('navigation', {
      name: 'Navegación principal',
    })

    expect(within(nav).getByRole('link', { name: 'Contacto' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(
      within(nav).getByRole('link', { name: 'Inicio' }),
    ).not.toHaveAttribute('aria-current')
  })
})
