import { ComponentPropsWithoutRef } from 'react'

export const NpmIcon = (
  props: ComponentPropsWithoutRef<'svg'> & { size?: number },
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>npm</title>

      <g>
        <rect
          x="21.6"
          y="19.9"
          width="2.5px"
          height="4.5px"
          fill="currentColor"
        />
        <path
          fill="currentColor"
          d="M2,15V29.7H14.2v2.5H24V29.7H46V15ZM14.2,27.2H11.8V19.9H9.3v7.3H4.5V17.5h9.7Zm12.3,0H21.6v2.5H16.7V17.5h9.8Zm17.1,0H41.2V19.9H38.7v7.3H36.2V19.9H33.8v7.3H28.9V17.5H43.6Z"
        />
      </g>
    </svg>
  )
}
