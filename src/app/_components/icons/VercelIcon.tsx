import { ComponentPropsWithoutRef } from 'react'

export const VercelIcon = (
  props: ComponentPropsWithoutRef<'svg'> & { size?: number },
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 1L24 22H0L12 1Z" fill="currentColor" />
    </svg>
  )
}
