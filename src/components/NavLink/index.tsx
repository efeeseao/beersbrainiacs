import { ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'

interface NavLinkProps extends LinkProps {
  children: ReactNode
  className: string
}

export const NavLink = ({ children, href, ...props }: NavLinkProps) => (
  <Link
    href={href}
    {...props}
    className={`py-2.5 px-4 text-center rounded-full duration-150 ${
      props?.className || ''
    }`}
    passHref
  >
    {children}
  </Link>
)
