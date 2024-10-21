import { ComponentPropsWithoutRef } from 'react'

export const Dark = (
  props: ComponentPropsWithoutRef<'svg'> & { size?: number },
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 744.094 1052.362"
      version="1.1"
      {...props}
    >
      <path
        style={{
          opacity: 1,
          fill: '#171717',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
          strokeWidth: 0,
          strokeLinejoin: 'bevel',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        d="M372.047 166.182a360 360 0 0 0-360 360 360 360 0 0 0 360 360 360 360 0 0 0 360-360 360 360 0 0 0-360-360m0 50a310 310 0 0 1 310 310 310 310 0 0 1-310 310 310 310 0 0 1-310-310 310 310 0 0 1 310-310"
      ></path>
      <path
        style={{
          opacity: 1,
          fill: '#171717',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
          strokeWidth: 0,
          strokeLinejoin: 'bevel',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        d="M381.138 216.766a155 155.01 0 0 0-155 155.01 155 155.01 0 0 0 155 155.01 155 155.01 0 0 0 .48-.018 155 155.01 0 0 1 154.52 154.987 155 155.01 0 0 1-141.793 154.351 310 310 0 0 0 296.793-309.34 310 310 0 0 0-310-310m.133 619.994a155 155.01 0 0 1-.133.004v.002z"
      ></path>
      <circle
        style={{
          opacity: 1,
          fill: '##171717',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
          strokeWidth: 0,
          strokeLinejoin: 'bevel',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        cx="-947.953"
        cy="754.752"
        r="310"
      ></circle>
      <path
        style={{
          opacity: 1,
          fill: '#fff',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
          strokeWidth: 0,
          strokeLinejoin: 'bevel',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
        d="M417.047 374.048a45 45 0 0 1-45 45 45 45 0 0 1-45-45 45 45 0 0 1 45-45 45 45 0 0 1 45 45"
      ></path>
      <circle
        r="45"
        cy="684.028"
        cx="372.047"
        style={{
          opacity: 1,
          fill: '#171717',
          fillOpacity: 1,
          fillRule: 'nonzero',
          stroke: 'none',
          strokeWidth: 0,
          strokeLinejoin: 'bevel',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 1,
        }}
      ></circle>
    </svg>
  )
}
