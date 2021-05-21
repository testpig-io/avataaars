import Color from '../Color'
import { useContext } from 'react'
import AvatarContext from '../AvatarContext'
import HairColorName from './HairColorName'

type Props = {
  maskID: string
}

export default function HairColor ({ maskID }: Props) {
  const hairColor = useContext(AvatarContext).hairColor
  return <Color maskID={maskID} color={getHairColorCode(hairColor)}/>
}

function getHairColorCode (hairColor?: string) {
  if (hairColor && hairColor.startsWith('#')) return hairColor
  switch (hairColor) {
    case HairColorName.Auburn:
      return '#A55728'
    case HairColorName.Black:
      return '#2C1B18'
    case HairColorName.Blonde:
      return '#B58143'
    case HairColorName.BlondeGolden:
      return '#D6B370'
    case HairColorName.Brown:
      return '#724133'
    case HairColorName.PastelPink:
      return '#F59797'
    case HairColorName.Platinum:
      return '#ECDCBF'
    case HairColorName.Red:
      return '#C93305'
    case HairColorName.SilverGray:
      return '#E8E1E1'
    case HairColorName.BrownDark:
    default:
      return '#4A312C'
  }
}
