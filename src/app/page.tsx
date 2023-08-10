import type { Metadata } from 'next'

import { Hero } from '@/components/Hero'
import { LogoGrid } from '@/components/LogoGrid'
import { CenteredCTAText } from '@/components/CenteredCTAText'
import { Features } from '@/components/Features'
import { FQAs } from '@/components/FQAs'

export const metadata: Metadata = {
  title: 'Inicio | Beers & Brainiacs',
  description: 'Experiência única onde a tecnologia encontra a descontração.',
  openGraph: {
    title: 'Inicio | Beers & Brainiacs',
    description: 'Experiência única onde a tecnologia encontra a descontração.',
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

export default function Home() {
  return (
    <>
      <Hero />
      <LogoGrid />
      <CenteredCTAText />
      <Features />
      <FQAs />
    </>
  )
}
