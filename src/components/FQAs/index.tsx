import { SectionWrapper } from '@/components/SectionWrapper'
import { faqsList } from '@/data/fqas'

export const FQAs = () => (
  <SectionWrapper id="fqas">
    <div className="custom-screen text-gray-600">
      <div className="max-w-xl xl:mx-auto xl:text-center">
        <h2 className="text-gray-800 text-3xl font-extrabold sm:text-4xl">
          Perguntas Frequentes
        </h2>
        <p className="mt-3">
          Tudo o que você precisa saber sobre a Beers & Brainiacs. Não consegue
          encontrar a resposta que está procurando? Sinta-se à vontade para
          perguntar.
        </p>
      </div>
      <div className="mt-12">
        <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
          {faqsList.map(({ a, q }, idx) => (
            <li key={idx} className="space-y-3">
              <summary className="flex items-center justify-between font-semibold text-gray-700">
                {q}
              </summary>
              <p
                dangerouslySetInnerHTML={{ __html: a }}
                className="leading-relaxed"
              ></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
)
