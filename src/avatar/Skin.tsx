import { useContext } from 'react'
import AvatarContext from './AvatarContext'
import SkinColor from './SkinColor'
import Color from './Color'

type Props = {
  maskID: string
}

export default function Skin ({ maskID }: Props) {
  const color = useContext(AvatarContext).skinColor
  return <Color maskID={maskID} color={getSkinColor(color)}/>
}

function getSkinColor (color?: string) {
  if (color && color.startsWith('#')) return color
  switch (color) {
    case SkinColor.Tanned:
      return '#FD9841'
    case SkinColor.Yellow:
      return '#F8D25C'
    case SkinColor.Pale:
      return '#FFDBB4'
    case SkinColor.Brown:
      return '#D08B5B'
    case SkinColor.DarkBrown:
      return '#AE5D29'
    case SkinColor.Black:
      return '#614335'
    case SkinColor.Light:
    default:
      return '#EDB98A'
  }
}
