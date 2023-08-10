import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Página não encontrada | Beers & Brainiacs',
  description:
    'A página que você está procurando não existe. Aqui estão alguns links úteis.',
  openGraph: {
    title: 'Inicio | Beers & Brainiacs',
    description:
      'A página que você está procurando não existe. Aqui estão alguns links úteis.',
    url: 'beersbrainiacs.vercel.app',
    siteName: 'Beers & Brainiacs',
    images: [
      {
        url: 'beersbrais.vercel.app/og.png',
        width: 800,
        height: 600
      }
    ],
    locale: 'pt',
    type: 'website'
  }
}

export default function Page() {
  return (
    <section className="bg-white">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            Página não encontrada
          </h1>
          <p className="mt-4 text-gray-500">
            A página que você está procurando não existe. Aqui estão alguns
            links úteis:
          </p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <Link
              href="/"
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>Voltar</span>
            </Link>

            <Link
              href="/codigo-de-conduta"
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-primary rounded-lg shrink-0 sm:w-auto hover:bg-primary/80"
            >
              Ler código de conduta
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
