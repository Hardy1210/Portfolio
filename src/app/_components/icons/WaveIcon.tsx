import { ComponentPropsWithoutRef } from 'react'

export const WaveIcon = (
  props: ComponentPropsWithoutRef<'svg'> & { size?: number },
) => {
  return (
    <svg
      fill="none"
      height={props.size}
      width={props.size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      {...props}
    >
      <title>Wave</title>
      <path
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
        fill="currentColor"
      />
      <path
        d="M0 14c5.523 0 4.477 15 10 15s4.477-15 10-15 4.477 15 10 15 4.477-15 10-15"
        stroke="#fff"
        strokeWidth="4"
      />
    </svg>
  )
}
