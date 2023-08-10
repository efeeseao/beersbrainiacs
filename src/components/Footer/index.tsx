import Link from 'next/link'
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'

import { Brand } from '@/components/Brand'
import { Newsletter } from '@/components/Newsletter'
import { navigation } from '@/data/navLink'

export const Footer = () => {
  const fullYear = new Date().getFullYear()

  return (
    <footer className="pt-32 sm:pt-44">
      <div className="custom-screen text-gray-600">
        <div className="flex flex-wrap gap-y-10 items-center justify-between">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Brand />
            </Link>
            <h2 className="text-gray-800 text-lg font-semibold sm:text-2xl">
              Beers & Brainiacs
            </h2>
            <p className="max-w-md">
              Experiência única onde a tecnologiaencontra a descontração.
            </p>
            <div className="pt-2 flex items-center gap-x-6 text-gray-400">
              <a
                href="https://facebook.com/beersbrainiacs"
                target="_blank"
                aria-label="Social media"
                className="hover:text-primary"
                rel="noreferrer"
              >
                <FiFacebook size={24} />
              </a>
              <a
                href="https://instagram.com/beersbrainiacs"
                target="_blank"
                aria-label="Social media"
                className="hover:text-primary"
                rel="noreferrer"
              >
                <FiInstagram size={24} />
              </a>
              <a
                href="https://twitter.com/beersbrainiacs"
                target="_blank"
                aria-label="Social media"
                className="hover:text-primary"
                rel="noreferrer"
              >
                <FiTwitter size={24} />
              </a>
            </div>
          </div>
          <Newsletter />
        </div>
        <div className="mt-10 py-10 border-t flex-row-reverse items-center justify-between sm:flex">
          <ul className="flex flex-wrap items-center gap-4 sm:text-sm">
            {navigation.map(({ name, path }, idx) => (
              <li
                key={idx}
                className="font-medium text-gray-700 hover:text-gray-900 duration-150"
              >
                <Link href={path}>{name}</Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 sm:mt-0">
            © {fullYear} Beers & Brainiacs. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
