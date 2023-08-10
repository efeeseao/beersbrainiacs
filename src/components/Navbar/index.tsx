'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import { NavHeader } from '@/components/NavHeader'
import { IconArrowRight } from '@/icons/ArrowRight'
import { navigation } from '@/data/navLink'

export const Navbar = () => {
  const [state, setState] = useState<boolean>(false)
  const menuBtnEl = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target as Node
      if (menuBtnEl.current && !menuBtnEl.current.contains(target)) {
        setState(false)
      }
    }
  }, [])

  return (
    <header className="relative">
      <div className="custom-screen md:hidden">
        <NavHeader
          menuBtnEl={menuBtnEl}
          state={state}
          onClick={() => setState(!state)}
        />
      </div>
      <nav
        className={`bg-white pb-5 md:text-sm md:static md:block ${
          state
            ? 'absolute z-20 top-2 inset-x-4 shadow-lg rounded-xl border md:shadow-none md:border-none'
            : 'hidden'
        }`}
      >
        <div className="custom-screen gap-x-20 items-center md:flex">
          <NavHeader
            menuBtnEl={menuBtnEl}
            state={state}
            onClick={() => setState(!state)}
          />
          <div
            className={`flex-1 items-center mt-8 text-gray-600 md:font-medium md:mt-0 md:flex ${
              state ? 'block' : 'hidden'
            } `}
          >
            <ul className="justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="hover:text-gray-900">
                  <Link href={item.path} scroll={true} className="block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
              <a
                role="button"
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/u/0/"
                className="py-2.5 px-4 text-center rounded-full duration-150 flex items-center justify-center gap-x-1 text-sm text-white font-medium bg-primary hover:bg-primary/90 active:bg-primary md:inline-flex"
              >
                Participar
                <IconArrowRight />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
