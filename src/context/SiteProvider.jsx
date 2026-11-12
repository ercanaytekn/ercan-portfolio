import { useEffect } from 'react'
import { SiteContext } from './SiteContext'
import { siteReducer, initialState, ACTIONS } from './siteReducer'
import { usePersistedReducer } from '../hooks/usePersistedReducer'
import content from '../data/content.json'

export function SiteProvider({ children }) {
  const [state, dispatch] = usePersistedReducer(
    'site-preferences',
    siteReducer,
    initialState,
  )
  const { language, theme } = state

  const toggleLanguage = () => dispatch({ type: ACTIONS.TOGGLE_LANGUAGE })
  const toggleTheme = () => dispatch({ type: ACTIONS.TOGGLE_THEME })

  const data = content[language]

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <SiteContext.Provider
      value={{ language, theme, toggleLanguage, toggleTheme, data }}
    >
      {children}
    </SiteContext.Provider>
  )
}
