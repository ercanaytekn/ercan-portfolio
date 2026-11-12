import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { SiteContext } from './SiteContext'
import { siteReducer, initialState, ACTIONS } from './siteReducer'
import { usePersistedReducer } from '../hooks/usePersistedReducer'
import { postSiteContent } from '../api/siteApi'
import content from '../data/content.json'

export function SiteProvider({ children }) {
  const [state, dispatch] = usePersistedReducer(
    'site-preferences',
    siteReducer,
    initialState,
  )
  const { language, theme } = state
  const [remoteData, setRemoteData] = useState(null)

  const data =
    remoteData?.language === language ? remoteData.content : content[language]

  const toggleLanguage = () => {
    const nextLanguage = language === 'en' ? 'tr' : 'en'
    const nextContent = content[nextLanguage]

    dispatch({ type: ACTIONS.TOGGLE_LANGUAGE })

    toast
      .promise(postSiteContent(nextLanguage, nextContent), {
        pending: nextContent.toast.pending,
        success: nextContent.toast.success,
        error: nextContent.toast.error,
      })
      .then((result) => {
        if (result?.content?.hero) {
          setRemoteData({ language: nextLanguage, content: result.content })
        }
      })
      .catch((error) => {
        console.error('İçerik sunucuya gönderilemedi:', error)
      })
  }

  const toggleTheme = () => dispatch({ type: ACTIONS.TOGGLE_THEME })

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
