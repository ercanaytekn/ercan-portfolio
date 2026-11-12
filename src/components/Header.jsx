import { useSite } from '../hooks/useSite'

export function Header() {
  const { theme, toggleLanguage, toggleTheme, data } = useSite()
  const isDark = theme === 'dark'

  return (
    <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 pt-10 pb-6 md:pt-14">
      <span className="text-2xl leading-none font-bold text-accent md:text-4xl">{data.hero.name}</span>

      <nav className="flex items-center gap-3 md:gap-6 text-xs md:text-sm font-bold tracking-widest">
        <button onClick={toggleLanguage} className="whitespace-nowrap text-white/70">
          <span className="text-accent">{data.ui.switchLang.highlight}</span>
          {data.ui.switchLang.rest}
        </button>

        <button
          onClick={toggleTheme}
          role="switch"
          aria-checked={isDark}
          className="flex items-center gap-2 text-white md:text-primary-dark dark:text-gray-300 md:dark:text-gray-300"
        >
          <span className="relative h-6 w-12 shrink-0 rounded-full bg-white/30 md:bg-primary dark:bg-surface-dark md:dark:bg-surface-dark">
            <span
              className={`absolute top-1 h-4 w-4 rounded-full bg-accent transition-all ${isDark ? 'left-1' : 'left-7'}`}
            />
          </span>
          <span className="text-left md:min-w-32">
            {isDark ? data.ui.lightMode : data.ui.darkMode}
          </span>
        </button>
      </nav>
    </header>
  )
}
