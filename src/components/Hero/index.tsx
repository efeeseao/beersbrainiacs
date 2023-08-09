import { GradientWrapper } from '@/components/GradientWrapper'
import { NavLink } from '@/components/NavLink'
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
        <p className="max-w-xl mx-auto">
          Prepare-se para explorar as últimas tendências tecnológicas,
          compartilhar conhecimento e se conectar com entusiastas como você,
          enquanto saboreia cervejas artesanais selecionadas. O Beer & Brainiacs
          é o lugar perfeito para aprender, discutir e se divertir, tudo ao
          mesmo tempo. Vamos criar memórias incríveis juntos!
        </p>
        <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
          <NavLink
            href="/inscrever-se"
            className="flex items-center gap-x-2 text-white bg-primary hover:bg-primary/90 active:bg-primary "
          >
            Participar
            <IconArrowRight />
          </NavLink>
          <NavLink
            href="#cta"
            className="flex items-center gap-x-2 text-secondary hover:text-gray-900"
            scroll={false}
          >
            Saiba mais
            <IconArrowRight />
          </NavLink>
        </div>
      </div>
    </GradientWrapper>
  </section>
)
