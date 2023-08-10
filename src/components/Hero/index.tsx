import { GradientWrapper } from '@/components/GradientWrapper'
import { IconArrowRight } from '@/icons/ArrowRight'

export const Hero = () => (
  <section>
    <GradientWrapper
      wrapperClassName="inset-0"
      className="custom-screen text-gray-600"
    >
      <div className="space-y-5 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl text-secondary font-extrabold mx-auto sm:text-6xl">
          Experiência única onde a tecnologia
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#ED4E50]">
            encontra a descontração.
          </span>
        </h1>
        <p className="max-w-2xl mx-auto">
          Prepare-se para explorar as últimas tendências tecnológicas,
          compartilhar conhecimento e se conectar com entusiastas como você,
          enquanto saboreia cervejas artesanais selecionadas. O Beer & Brainiacs
          é o lugar perfeito para aprender, discutir e se divertir, tudo ao
          mesmo tempo. Vamos criar memórias incríveis juntos!
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <a
            role="button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/forms/u/0/"
            className="py-2.5 px-4 text-center rounded-full duration-150 flex items-center gap-x-2 text-white bg-primary hover:bg-primary/90 active:bg-primary "
          >
            Participar
            <IconArrowRight />
          </a>
        </div>
      </div>
    </GradientWrapper>
  </section>
)
