import { ComponentPropsWithoutRef } from 'react'

export const AboutIcon = (
  props: ComponentPropsWithoutRef<'svg'> & { size?: number },
) => {
  return (
    <svg
      fill="currentColor"
      height={props.size}
      width={props.size}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 399.178 399.178"
      {...props}
    >
      <g>
        <path
          d="M237.332,163.014c-2.197-5.082-7.195-8.366-12.733-8.366c-0.02,0-51.21,0.087-51.488,0.087
		c-4.91,0-9.264,3.652-11.265,8.279l-26.725,61.801c-1.47,3.398-1.528,7.167-0.164,10.61c1.364,3.443,3.987,6.149,7.386,7.619
		c1.753,0.757,3.602,1.141,5.498,1.141c5.537,0,10.534-3.283,12.731-8.364l4.865-11.251V342.49c0,8.419,6.85,15.268,15.269,15.268
		c8.42,0,15.27-6.85,15.27-15.268v-78.62h6.475v78.62c0,8.419,6.85,15.268,15.271,15.268c8.419,0,15.268-6.85,15.268-15.268V222.833
		l5.616,12.987c2.198,5.081,7.195,8.364,12.73,8.364c1.896,0,3.745-0.384,5.498-1.141c3.399-1.47,6.022-4.175,7.387-7.619
		c1.363-3.442,1.305-7.211-0.165-10.61L237.332,163.014z"
        />
        <path
          d="M197.851,149.566c19.265,0,34.938-15.676,34.938-34.944c0-19.27-15.674-34.946-34.938-34.946
		c-19.27,0-34.946,15.677-34.946,34.946C162.904,133.89,178.581,149.566,197.851,149.566z"
        />
        <path
          d="M342.833,78.787l-62.815-62.368C270.432,6.905,253.674,0,240.171,0H72.761c-18.2,0-33.008,14.808-33.008,33.008v333.161
		c0,18.201,14.808,33.009,33.008,33.009h253.654c18.201,0,33.01-14.808,33.01-33.009V118.634
		C359.425,105.085,352.445,88.325,342.833,78.787z M72.753,366.169L72.761,33h167.41c0.556,0,1.168,0.053,1.815,0.145v59.752
		c0,18.201,14.808,33.009,33.008,33.009h51.431l-0.006,240.272L72.753,366.169z"
        />
      </g>
    </svg>
  )
}
