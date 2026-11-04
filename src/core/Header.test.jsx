import { screen, within } from '@testing-library/react'
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
    expect(
      within(nav).getByRole('link', { name: 'Portafolio' }),
    ).toHaveAttribute('href', '/portafolio')
    expect(within(nav).getByRole('link', { name: 'Contacto' })).toHaveAttribute(
      'href',
      '/contacto',
    )

    const github = within(nav).getByRole('link', { name: /github/i })
    expect(github).toHaveAttribute(
      'href',
      'https://github.com/Andres-albornoz?tab=repositories',
    )
    expect(github).toHaveAttribute('target', '_blank')
    expect(github).toHaveAttribute('rel', 'noreferrer')
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

  it('marca Portafolio como activo en su ruta', () => {
    renderAt('/portafolio')

    const header = screen.getByRole('banner')
    const nav = within(header).getByRole('navigation', {
      name: 'Navegación principal',
    })

    expect(
      within(nav).getByRole('link', { name: 'Portafolio' }),
    ).toHaveAttribute('aria-current', 'page')
  })
})
