export default function Page() {
  return (
    <main className="flex items-center justify-center flex-col min-h-screen">
      <section className="space-y-6 text-center mt-12" data-aos="zoom-in-up">
        <h1 className="text-2xl text-black font-bold">Código de Conduta</h1>
        <span className="text-sm font-medium mt-2">
          Atualizado em 09 de Agosto de 2023
        </span>
      </section>
      <section className="grid place-items-center" data-aos="fade-up">
        <div className="w-full sm:w-10/12 md:w-1/2 space-y-10">
          <p className="mt-8">
            O{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#9867F0]">
              Beer & Brainiacs
            </span>{' '}
            é um espaço de aprendizado, troca de conhecimento e networking, onde
            todos são bem-vindos para compartilhar suas ideias e perspectivas
            sobre tecnologia, enquanto desfrutam de uma atmosfera descontraída e
            respeitosa. Para garantir que todos tenham uma experiência positiva
            e enriquecedora, adotamos o seguinte código de conduta:
          </p>

          <div className="">
            <ul className="space-y-4 text-secondary list-disc list-inside">
              <li className="flex flex-col text-gray-800">
                <span className="font-semibold">1. Respeito Mútuo:</span>
                Respeite as opiniões, crenças e experiências de todos os
                participantes, independentemente de suas diferenças. Promova um
                ambiente onde todos se sintam valorizados e ouvidos.
              </li>
              <li className="flex flex-col text-gray-800">
                <span className="font-semibold">
                  2. Inclusão e Diversidade:
                </span>
                Valorizamos a diversidade de origens, perspectivas e
                identidades. Não toleramos qualquer forma de discriminação,
                incluindo aquelas relacionadas a gênero, raça, religião,
                orientação sexual, habilidades, etc.
              </li>
              <li className="flex flex-col text-gray-800">
                <span className="font-semibold">
                  3. Colaboração e Participação:
                </span>
                Encorajamos a colaboração entre os participantes. Esteja aberto
                a ouvir os outros, compartilhar suas próprias experiências e
                contribuir para as discussões de maneira construtiva.
              </li>
              <li className="flex flex-col text-gray-800">
                <span className="font-semibold">
                  4. Ambiente Livre de Assédio:
                </span>
                Não toleramos assédio em nenhuma forma. Isso inclui comentários
                ofensivos, linguagem inapropriada, intimidação, perseguição,
                fotografias ou gravações não consensuais, entre outros
                comportamentos inadequados.
              </li>
              <li className="flex flex-col text-gray-800">
                <span className="font-semibold">
                  5. Apresentações Respeitosas:
                </span>
                Se você for um palestrante ou facilitador, mantenha o conteúdo
                da apresentação respeitoso e adequado para todos os públicos.
                Evite linguagem ou imagens ofensivas.
              </li>
              <li className="flex flex-col text-gray-800">
                <span className="font-semibold">
                  6. Uso Responsável de Álcool:
                </span>
                Embora este seja um evento que envolva cervejas, pedimos que
                todos consumam álcool de maneira responsável. Não é aceitável
                comportamento inadequado ou desrespeitoso associado ao consumo
                de álcool.
              </li>
              <li className="flex flex-col text-gray-800">
                <span className="font-semibold">
                  7. Reporte Comportamentos Inadequados:
                </span>
                Se você testemunhar ou experimentar comportamentos inadequados,
                assédio ou violações deste código de conduta, pedimos que relate
                imediatamente aos organizadores do evento.
              </li>
              <li className="flex flex-col text-gray-800">
                <span className="font-semibold">
                  8. Consequências de Violações:
                </span>
                Comportamentos que violem este código de conduta poderão
                resultar em ações apropriadas, que podem incluir a exclusão do
                evento ou outras medidas conforme necessário.
              </li>
            </ul>
          </div>
          <p>
            O{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#9867F0]">
              Beer & Brainiacs
            </span>{' '}
            é um espaço para aprendizado, networking e diversão. Esperamos que
            todos os participantes contribuam para um ambiente positivo e
            enriquecedor, onde todos possam se sentir confortáveis e
            respeitados. Agradecemos a colaboração de todos para manter essa
            atmosfera.
          </p>
        </div>
      </section>
    </main>
  )
}
