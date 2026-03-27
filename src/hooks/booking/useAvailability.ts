import { useEffect, useMemo, useState } from 'react'
import { fetchAvailability } from '../../lib/booking/api'
import type { AvailabilityResponse } from '../../lib/booking/types'

type AvailabilityState = {
  data: AvailabilityResponse | null
  loading: boolean
  error: string | null
}

export function useAvailability(date: string, guests: number) {
  const [state, setState] = useState<AvailabilityState>({
    data: null,
    loading: false,
    error: null,
  })

  useEffect(() => {
    if (!date || guests < 1) {
      setState({ data: null, loading: false, error: null })
      return
    }

    let cancelled = false
    setState((prev) => ({ ...prev, loading: true, error: null }))

    fetchAvailability(date, guests)
      .then((data) => {
        if (!cancelled) {
          setState({ data, loading: false, error: null })
        }
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setState({
            data: null,
            loading: false,
            error: error instanceof Error ? error.message : 'Could not load availability',
          })
        }
      })

    return () => {
      cancelled = true
    }
  }, [date, guests])

  const slots = useMemo(() => state.data?.slots || [], [state.data])

  return {
    ...state,
    slots,
  }
}
