import { useSite } from '../hooks/useSite'

const linkClass =
  'font-medium text-primary-dark underline underline-offset-4 hover:text-primary dark:text-accent'

export function Projects() {
  const { data } = useSite()
  const { projects } = data

  return (
    <section className="bg-accent py-20 dark:bg-olive">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="mb-10 text-4xl font-bold text-primary md:text-5xl dark:text-accent">
          {projects.title}
        </h2>

        <div className="space-y-10">
          {projects.items.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-xl md:min-h-[24rem] md:flex-row lg:min-h-[26rem] dark:bg-surface-dark"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-cover md:h-auto md:w-[45%]"
              />

              <div className="flex flex-1 flex-col justify-center gap-5 p-8 lg:gap-6 lg:p-12">
                <h3 className="text-3xl font-bold text-primary dark:text-[#c1baed]">
                  {project.title}
                </h3>
                <p className="leading-relaxed text-gray-700 dark:text-white">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-primary px-4 py-1 text-sm text-white dark:bg-[#8173da]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-6">
                  {project.siteUrl && (
                    <a href={project.siteUrl} target="_blank" rel="noreferrer" className={linkClass}>
                      {projects.viewSite}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className={linkClass}>
                      {projects.github}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
