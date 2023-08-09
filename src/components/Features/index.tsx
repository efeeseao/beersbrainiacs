import { DarkWrapper } from '@/components/DarkWrapper'
import { features } from '@/data/values'

export const Features = () => (
  <DarkWrapper id="features">
    <div className="custom-screen text-gray-300 justify-between gap-24 lg:flex">
      <div className="max-w-xl">
        <h2 className="text-white text-3xl font-semibold sm:text-4xl">
          valores que fazem parte da comunidade Beers & Brainiacs!
        </h2>
        <p className="mt-3 text-white">
          na Beers & Brainiacs, cultivamos valores que consideramos fundamentais
          e que servem como alicerce da nossa comunidade.
        </p>
      </div>
      <div className="mt-12 lg:mt-0">
        <ul className="grid gap-8 sm:grid-cols-2">
          {features.map(({ desc, title }, idx) => (
            <li key={idx} className="flex gap-x-4">
              <div className="flex-none w-12 h-12 bg-secondary text-gray-100 rounded-lg flex items-center justify-center">
                +
              </div>
              <div>
                <h4 className="text-lg text-gray-100 font-semibold">{title}</h4>
                <p className="mt-3 text-white">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </DarkWrapper>
)
