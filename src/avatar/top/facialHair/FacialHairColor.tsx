import FacialHairColorName from './FacialHairColorName'
import { useContext } from 'react'
import AvatarContext from '../../AvatarContext'

export interface Props {
  maskID: string
}

export default function FacialHairColor ({ maskID }: Props) {
  const color = useContext(AvatarContext).facialHairColor
  return (
    <g mask={`url(#${maskID})`} fill={getFacialHairColorCode(color)}>
      <g transform='translate(-32, 0)'>
        <rect x='0' y='0' width='264' height='244'/>
      </g>
    </g>
  )
}

export function getFacialHairColorCode (color?: string) {
  if (color && color.startsWith('#')) return color
  switch (color) {
    case FacialHairColorName.Auburn:
      return '#A55728'
    case FacialHairColorName.Black:
      return '#2C1B18'
    case FacialHairColorName.Blonde:
      return '#B58143'
    case FacialHairColorName.BlondeGolden:
      return '#D6B370'
    case FacialHairColorName.Brown:
      return '#724133'
    case FacialHairColorName.Platinum:
      return '#ECDCBF'
    case FacialHairColorName.Red:
      return '#C93305'
    case FacialHairColorName.BrownDark:
    default:
      return '#4A312C'
  }
}
