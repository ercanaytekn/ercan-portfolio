import { useEffect, useReducer } from 'react'

function readFromStorage(key, initialState) {
  try {
    const stored = localStorage.getItem(key)
    return stored !== null
      ? { ...initialState, ...JSON.parse(stored) }
      : initialState
  } catch {
    return initialState
  }
}

export function usePersistedReducer(key, reducer, initialState) {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) =>
    readFromStorage(key, initial),
  )

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, dispatch]
}
