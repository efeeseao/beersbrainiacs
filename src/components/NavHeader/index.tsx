import React, { RefObject } from 'react'
import Link from 'next/link'

import { Brand } from '@/components/Brand'
import { IconClose } from '@/icons/Close'
import { IconOpen } from '@/icons/Open'

interface NavHeaderProps {
  onClick: () => void
  state: boolean
  menuBtnEl: RefObject<HTMLButtonElement> | null
}

export const NavHeader = ({ onClick, state, menuBtnEl }: NavHeaderProps) => (
  <div className="flex items-center justify-between py-5 md:block">
    <Link href="/">
      <Brand />
    </Link>
    <div className="md:hidden">
      <button
        role="button"
        aria-label="Abrir menu"
        ref={menuBtnEl || null}
        className="text-gray-500 hover:text-gray-800"
        onClick={onClick}
      >
        {state ? <IconOpen /> : <IconClose />}
      </button>
    </div>
  </div>
)
