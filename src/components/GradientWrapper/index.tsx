import { ReactNode, HTMLProps } from 'react'

interface GradientWrapperProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
  wrapperClassName?: string
}

export const GradientWrapper = ({
  children,
  wrapperClassName,
  ...props
}: GradientWrapperProps) => (
  <section {...props} className={`relative py-28 ${props.className || ''}`}>
    <div
      className={`absolute top-12 m-auto max-w-3xl h-[250px] blur-[130px] ${
        wrapperClassName || ''
      }`}
      style={{
        background:
          'linear-gradient(108.49deg, rgba(152, 103, 240, 0.24) 23.1%, rgba(237, 78, 80, 0.06) 62.53%)'
      }}
    ></div>
    <div className="relative">{children}</div>
  </section>
)
