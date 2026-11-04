import { renderHook, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import useFetch from './useFetch.js'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('useFetch', () => {
  it('no hace la petición si no hay URL', () => {
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)

    const { result } = renderHook(() => useFetch(null))

    expect(result.current).toEqual({ data: null, error: null, loading: false })
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('empieza cargando y luego entrega los datos', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => ({
        ok: true,
        json: async () => ({ name: 'Andrés' }),
      })),
    )

    const { result } = renderHook(() => useFetch('https://api.test/user'))

    expect(result.current.loading).toBe(true)

    await waitFor(() => expect(result.current.loading).toBe(false))

    expect(result.current.data).toEqual({ name: 'Andrés' })
    expect(result.current.error).toBeNull()
  })

  it('expone un error cuando la respuesta no es correcta', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => ({
        ok: false,
        status: 404,
        statusText: 'Not Found',
        json: async () => ({}),
      })),
    )

    const { result } = renderHook(() => useFetch('https://api.test/missing'))

    await waitFor(() => expect(result.current.loading).toBe(false))

    expect(result.current.error).toBeInstanceOf(Error)
    expect(result.current.error.message).toBe('Error 404: Not Found')
    expect(result.current.data).toBeNull()
  })

  it('expone un error si fetch falla', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => {
        throw new Error('sin conexión')
      }),
    )

    const { result } = renderHook(() => useFetch('https://api.test/user'))

    await waitFor(() => expect(result.current.error).not.toBeNull())

    expect(result.current.error.message).toBe('sin conexión')
    expect(result.current.loading).toBe(false)
  })

  it('ignora los errores de cancelación (AbortError)', async () => {
    const abortError = new Error('cancelado')
    abortError.name = 'AbortError'

    vi.stubGlobal('fetch', vi.fn(() => Promise.reject(abortError)))

    const { result } = renderHook(() => useFetch('https://api.test/user'))

    await waitFor(() => expect(result.current.loading).toBe(false))

    expect(result.current.error).toBeNull()
    expect(result.current.data).toBeNull()
  })

  it('vuelve a pedir los datos cuando cambia la URL', async () => {
    const fetchMock = vi.fn(async (url) => ({
      ok: true,
      json: async () => ({ url }),
    }))
    vi.stubGlobal('fetch', fetchMock)

    const { result, rerender } = renderHook(({ url }) => useFetch(url), {
      initialProps: { url: 'https://api.test/a' },
    })

    await waitFor(() => expect(result.current.data).toEqual({ url: 'https://api.test/a' }))

    rerender({ url: 'https://api.test/b' })

    await waitFor(() => expect(result.current.data).toEqual({ url: 'https://api.test/b' }))
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })
})
