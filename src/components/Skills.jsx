import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { useSite } from '../hooks/useSite'

const skillStyles = {
  javascript: { Icon: SiJavascript, tile: 'bg-[#f7df1e] text-black' },
  node: { Icon: SiNodedotjs, tile: 'bg-black text-[#5fa04e]' },
  react: { Icon: SiReact, tile: 'bg-[#20232a] text-[#61dafb]' },
  vscode: { Icon: VscVscode, tile: 'bg-[#0078d4] text-white' },
  redux: { Icon: SiRedux, tile: 'bg-[#764abc] text-white' },
  tailwind: { Icon: SiTailwindcss, tile: 'bg-[#0f172a] text-[#38bdf8]' },
}

export function Skills() {
  const { data } = useSite()
  const { skills } = data

  return (
    <section className="bg-white py-20 dark:bg-surface-dark">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 md:px-10 lg:flex-row lg:gap-32">
        <h2 className="text-4xl font-bold text-primary md:text-5xl dark:text-accent">
          {skills.title}
        </h2>

        <ul className="grid flex-1 grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {skills.items.map((skill) => {
            const { Icon, tile } = skillStyles[skill.key]
            return (
              <li key={skill.key} className="flex items-center gap-6">
                <span
                  className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-xl lg:h-28 lg:w-28 shadow-lg ${tile}`}
                >
                  <Icon className="h-12 w-12 lg:h-16 lg:w-16" />
                </span>
                <span className="text-lg font-medium text-gray-500 lg:text-2xl uppercase dark:text-white">
                  {skill.name}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
