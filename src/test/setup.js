// Agrega matchers como toBeInTheDocument() a expect de Vitest.
// También limpia el DOM automáticamente después de cada prueba de Testing Library.
import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})
