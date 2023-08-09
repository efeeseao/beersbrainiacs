import { ReactNode, HTMLProps } from 'react'

interface DarkWrapperProps extends HTMLProps<HTMLElement> {
  children: ReactNode
}

export const DarkWrapper = ({ children, ...props }: DarkWrapperProps) => (
  <section
    {...props}
    className={`relative overflow-hidden bg-primary py-28 my-16 sm:py-32 ${
      props.className || ''
    }`}
  >
    <div
      className="absolute inset-0 max-w-xl mx-auto h-72 blur-[118px]"
      style={{
        background:
          'linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)'
      }}
    ></div>
    <div className="relative">{children}</div>
  </section>
)
