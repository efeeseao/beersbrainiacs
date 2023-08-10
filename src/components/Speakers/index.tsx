import { speakers } from '@/data/speakers'

export const Speakers = () => (
  <section aria-labelledby="speakers-title" className="py-20 sm:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2
          id="speakers-title"
          className="font-display text-4xl font-medium tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#ED4E50] sm:text-5xl"
        >
          BeerTalkers
        </h2>
        <p className="mt-4 font-display text-2xl tracking-tight text-secondary">
          Aprenda com os Especialistas na Vanguarda da Inovação nas empresas
          mais sinistras.
        </p>
      </div>
      <section className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4">
        <div className="lg:col-span-4">
          <div className="js-tab-panel grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&amp;:not(:focus-visible)]:focus:outline-none">
            {speakers.map(({ avatar, company, id, name, title }) => (
              <div key={id}>
                <div className="group relative h-[24.5rem] transform overflow-hidden rounded-4xl">
                  <div className="absolute inset-0 bg-indigo-50">
                    <img
                      className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                      src={avatar}
                      alt={name}
                      role="img"
                    />
                  </div>
                </div>
                <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                  {name}
                </h3>
                <p className="mt-1 text-base tracking-tight text-slate-500">
                  {title} na {company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </section>
)
