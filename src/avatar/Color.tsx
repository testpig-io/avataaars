import { SVGProps } from 'react'

type Props = {
  maskID: string
  color: string
} & SVGProps<SVGGElement>

export default function Color ({ maskID, color, ...props }: Props) {
  return (
    <g mask={`url(#${maskID})`} fill={color} {...props}>
      <rect x='0' y='0' width='264' height='280'/>
    </g>
  )
}
