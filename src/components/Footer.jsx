import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import { useSite } from '../hooks/useSite'

const socialIcons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  email: MdAlternateEmail,
}

export function Footer() {
  const { data } = useSite()
  const { footer } = data

  return (
    <footer className="bg-gray-50 py-20 text-center dark:bg-surface-dark">
      <div className="mx-auto max-w-xl px-6">
        <h2 className="text-4xl font-bold text-primary md:text-5xl dark:text-[#8f88ff]">
          {footer.title}
        </h2>
        <p className="mt-6 text-lg text-gray-700 md:text-xl dark:text-white">
          {footer.text}
        </p>

        <a
          href={`mailto:${footer.email}`}
          className="mt-8 inline-block text-lg font-medium text-primary-dark underline md:text-xl underline-offset-4 hover:text-primary dark:text-[#8f88ff]"
        >
          {footer.email}
        </a>

        <ul className="mt-8 flex justify-center gap-6">
          {footer.links.map((link) => {
            const Icon = socialIcons[link.key]
            return (
              <li key={link.key}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="block text-primary-dark transition hover:-translate-y-1 hover:text-primary dark:text-[#8f88ff]"
                >
                  <Icon className="h-7 w-7" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
