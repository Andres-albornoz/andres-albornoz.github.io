import { screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderAt } from '../test/renderWithRouter.jsx'

describe('Footer', () => {
  it('muestra el año actual y el nombre', () => {
    renderAt('/')

    const footer = screen.getByRole('contentinfo')
    const year = new Date().getFullYear()

    expect(footer).toHaveTextContent(String(year))
    expect(footer).toHaveTextContent('Andrés Albornoz')
  })

  it('muestra los enlaces de correo, GitHub y contacto', () => {
    renderAt('/')

    const footer = screen.getByRole('contentinfo')

    expect(within(footer).getByRole('link', { name: 'Correo' })).toHaveAttribute(
      'href',
      'mailto:AN.ALBORNOZC@duocuc.cl',
    )
    expect(
      within(footer).getByRole('link', { name: 'Portafolio' }),
    ).toHaveAttribute('href', '/portafolio')
    expect(
      within(footer).getByRole('link', { name: 'Contacto' }),
    ).toHaveAttribute('href', '/contacto')

    const github = within(footer).getByRole('link', { name: 'GitHub' })
    expect(github).toHaveAttribute(
      'href',
      'https://github.com/Andres-albornoz?tab=repositories',
    )
    expect(github).toHaveAttribute('target', '_blank')
    expect(github).toHaveAttribute('rel', 'noreferrer')
  })
})
