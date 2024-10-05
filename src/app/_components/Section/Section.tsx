import { PropsWithChildren } from 'react'

export const Section = (props: PropsWithChildren) => {
  return (
    <section className="flex flex-col max-w-5xl m-auto">
      {props.children}
    </section>
  )
}
