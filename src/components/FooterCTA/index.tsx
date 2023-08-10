import { DarkWrapper } from '@/components/DarkWrapper'
import { IconArrowRight } from '@/icons/ArrowRight'

export const FooterCTA = () => (
  <DarkWrapper>
    <div className="custom-screen  gap-x-12 justify-between md:flex">
      <div className="max-w-xl">
        <h2 className="text-white text-3xl font-semibold sm:text-4xl">
          Seja Parte da Comunidade
        </h2>
        <p className="mt-3 text-gray-100">
          O Beer & Brainiacs é mais do que um evento, é uma comunidade
          apaixonada por tecnologia. Junte-se a nós para expandir seus
          horizontes, fazer novas amizades e compartilhar seu entusiasmo pela
          inovação. Vamos aprender e crescer juntos!
        </p>
      </div>
      <div className="flex-none mt-4 md:mt-0">
        <a
          href="https://chat.whatsapp.com/Ju2b1VzSGmqHwtFf8ZHOO8"
          target="_blank"
          className="py-2.5 px-4 text-center rounded-full duration-150 inline-flex items-center gap-x-2 font-medium text-sm text-white bg-secondary hover:bg-secondary/90 active:bg-secondary "
          rel="noreferrer"
        >
          WhatsApp
          <IconArrowRight />
        </a>
      </div>
    </div>
  </DarkWrapper>
)
