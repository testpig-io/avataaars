import { CSSProperties } from 'react'
import ClotheType from './clothes/ClotheType'
import GraphicType from './clothes/GraphicType'
import EyebrowType from './face/eyebrow/EyebrowType'
import AccessoriesType from './top/accessories/AccessoriesType'
import FacialHairType from './top/facialHair/FacialHairType'
import TopType from './top/TopType'
import EyeType from './face/eyes/EyeType'
import MouthType from './face/mouth/MouthType'

type AvatarProps = {
  circle?: boolean
  style?: CSSProperties
  topType?: TopType
  accessoriesType?: AccessoriesType
  hairColor?: string
  facialHairType?: FacialHairType
  facialHairColor?: string
  clotheType?: ClotheType
  clotheColor?: string
  graphicType?: GraphicType
  eyeType?: EyeType
  eyebrowType?: EyebrowType
  mouthType?: MouthType
  skinColor?: string
  hatColor?: string
}

export default AvatarProps
