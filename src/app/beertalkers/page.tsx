import { Metadata } from 'next'

import { Speakers } from '@/components/Speakers'

export const metadata: Metadata = {
  title: 'BeerTalkers | Beers & Brainiacs',
  description:
    'Lista de convidados para o evento da Beers & Brainiacs do dia 26 de Agosto de 2023.',
  openGraph: {
    title: 'Inicio | Beers & Brainiacs',
    description:
      'Lista de convidados para o evento da Beers & Brainiacs do dia 26 de Agosto de 2023.',
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
  return <Speakers />
}
