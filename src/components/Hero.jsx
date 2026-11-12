import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { useSite } from '../hooks/useSite'
import { Header } from './Header'

const linkButton =
  'flex items-center gap-2 rounded border border-primary-dark bg-white px-5 py-3 text-base font-medium text-primary-dark transition hover:-translate-y-0.5 dark:border-white/80 dark:bg-surface-dark dark:text-white'

export function Hero() {
  const { data } = useSite()
  const { hero } = data

  return (
    <section className="[--split:min(calc(50%+25.25rem),calc(100%-14.75rem))] bg-primary md:bg-[linear-gradient(to_right,var(--color-primary)_var(--split),var(--color-accent)_var(--split))] dark:bg-night md:dark:bg-[linear-gradient(to_right,var(--color-night)_var(--split),var(--color-olive)_var(--split))]">
      <div className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-40">
        <Header />

        <div className="mt-10 flex flex-col-reverse items-center gap-10 md:mt-24 md:flex-row md:justify-between">
          <div className="max-w-xl min-w-0">
            <h1 className="text-4xl leading-tight font-bold text-accent md:text-5xl lg:text-6xl xl:text-7xl">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg text-white md:text-2xl md:leading-snug">{hero.subtitle}</p>

            <div className="mt-8 flex gap-4">
              <a
                href={hero.github.url}
                target="_blank"
                rel="noreferrer"
                className={linkButton}
              >
                <FaGithub /> {hero.github.label}
              </a>
              <a
                href={hero.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className={linkButton}
              >
                <FaLinkedinIn /> {hero.linkedin.label}
              </a>
            </div>
          </div>

          <img
            src={hero.image}
            alt={hero.imageAlt}
            className="aspect-[15/16] w-72 shrink-0 rounded-2xl bg-white/20 object-cover shadow-xl lg:w-[22rem] xl:w-[26rem]"
          />
        </div>
      </div>
    </section>
  )
}
