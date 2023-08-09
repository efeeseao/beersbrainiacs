import { ReactNode, HTMLProps } from 'react'

interface SectionWrapperProps extends HTMLProps<HTMLElement> {
  children: ReactNode
}

export const SectionWrapper = ({ children, ...props }: SectionWrapperProps) => (
  <section {...props} className={`py-16 lg:py-20 ${props.className || ''}`}>
    {children}
  </section>
)
