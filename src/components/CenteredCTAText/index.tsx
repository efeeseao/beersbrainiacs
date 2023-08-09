import { SectionWrapper } from '@/components/SectionWrapper'

export const CenteredCTAText = () => (
  <SectionWrapper>
    <div className="custom-screen text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          O que Esperar dos eventos da{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#9867F0]">
            Beers & Brainiacs
          </span>
        </h2>
        <p className="mt-3 text-secondary">
          Nossos eventos são cuidadosamente projetados para oferecer uma
          experiência única e envolvente. Você pode esperar palestras
          estimulantes que abordam temas atuais e as mais recentes inovações
          tecnológicas. Além disso, proporcionamos um ambiente propício para
          discussões interativas, onde você terá oportunidades valiosas para
          compartilhar suas próprias ideias. Acreditamos na importância do
          networking, por isso oferecemos atividades para estabelecer conexões
          significativas na área de tecnologia. E, para aprimorar a experiência,
          cada evento inclui uma degustação de cervejas e outras bebidas. Seja
          bem-vindo a uma jornada de aprendizado, interação e diversão no Beer &
          Brainiacs!
        </p>
      </div>
    </div>
  </SectionWrapper>
)
