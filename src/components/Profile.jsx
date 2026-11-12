import { useSite } from '../hooks/useSite'

export function Profile() {
  const { data } = useSite()
  const { profile } = data

  return (
    <section className="bg-primary py-24 text-white lg:py-28 dark:bg-night">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="mb-10 text-4xl font-bold text-accent md:text-5xl lg:mb-14">
          {profile.title}
        </h2>

        <div className="grid items-start gap-10 md:grid-cols-2 xl:grid-cols-3 xl:items-stretch xl:gap-10">
          <div className="flex flex-col">
            <h3 className="mb-6 text-2xl md:text-3xl lg:mb-8 lg:text-4xl">
              {profile.basicTitle}
            </h3>
            <dl className="flex flex-col gap-6 text-base md:text-lg lg:text-xl xl:gap-10">
              {profile.info.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[8.5rem_1fr] gap-4 lg:grid-cols-[10.5rem_1fr]"
                >
                  <dt className="font-semibold text-accent">{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <img
            src={profile.image}
            alt={profile.imageAlt}
            className="order-last aspect-square w-full max-w-md self-start justify-self-center rounded-2xl bg-white/20 object-cover shadow-xl md:col-span-2 xl:order-none xl:col-span-1 xl:max-w-none"
          />

          <div>
            <h3 className="mb-6 text-2xl md:text-3xl lg:mb-8 lg:text-4xl">
              {profile.aboutTitle}
            </h3>
            <div className="space-y-6 text-base leading-relaxed md:text-lg lg:text-xl">
              {profile.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
