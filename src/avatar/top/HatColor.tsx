import HatColorName from './HatColorName'
import { useContext } from 'react'
import AvatarContext from '../AvatarContext'
import Color from '../Color'

export interface Props {
  maskID: string
  defaultColor?: string
}

export default function HatColor ({ maskID, defaultColor }: Props) {
  const color = useContext(AvatarContext).hatColor ?? defaultColor
  return <Color maskID={maskID} color={getHatColorCode(color)} fillRule='evenodd'/>
}

function getHatColorCode (color?: string) {
  if (color && color.startsWith('#')) return color
  switch (color) {
    case HatColorName.Black:
      return '#262E33'
    case HatColorName.Blue01:
      return '#65C9FF'
    case HatColorName.Blue02:
      return '#5199E4'
    case HatColorName.Blue03:
      return '#25557C'
    case HatColorName.Gray02:
      return '#929598'
    case HatColorName.Heather:
      return '#3C4F5C'
    case HatColorName.PastelBlue:
      return '#B1E2FF'
    case HatColorName.PastelGreen:
      return '#A7FFC4'
    case HatColorName.PastelOrange:
      return '#FFDEB5'
    case HatColorName.PastelRed:
      return '#FFAFB9'
    case HatColorName.PastelYellow:
      return '#FFFFB1'
    case HatColorName.Pink:
      return '#FF488E'
    case HatColorName.Red:
      return '#FF5C5C'
    case HatColorName.White:
      return '#FFFFFF'
    case HatColorName.Gray01:
    default:
      return '#E6E6E6'
  }
}
