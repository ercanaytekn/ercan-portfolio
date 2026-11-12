export const initialState = {
  language: 'en',
  theme: 'light',
}

export const ACTIONS = {
  TOGGLE_LANGUAGE: 'TOGGLE_LANGUAGE',
  TOGGLE_THEME: 'TOGGLE_THEME',
}

export function siteReducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_LANGUAGE:
      return { ...state, language: state.language === 'en' ? 'tr' : 'en' }

    case ACTIONS.TOGGLE_THEME:
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' }

    default:
      return state
  }
}
