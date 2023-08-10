export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4 mt-7">
        Estamos em Desenvolvimento!
      </h1>
      <p className="text-lg text-gray-500">Desculpe pelo transtorno.</p>
      <img
        src="/images/under-construction.svg"
        alt="Em construção"
        className="mt-8"
        style={{ maxWidth: '400px' }}
      />
    </section>
  )
}
