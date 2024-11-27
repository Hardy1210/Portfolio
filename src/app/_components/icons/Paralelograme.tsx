import { ComponentPropsWithoutRef } from 'react'

export const Paralelograme = (
  props: ComponentPropsWithoutRef<'svg'> & {
    size?: number
    className?: string
  },
) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 230.000000 132.000000"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g
        transform="translate(0.000000,132.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path
          d="M440 703 c-102 -173 -186 -322 -188 -329 -3 -12 114 -14 745 -14
l748 1 185 316 c102 173 186 322 188 329 3 12 -114 14 -745 14 l-748 -1 -185
-316z"
        />
      </g>
    </svg>
  )
}
