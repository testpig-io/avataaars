import BeardLight from './BeardLight'
import BeardMajestic from './BeardMajestic'
import BeardMedium from './BeardMedium'
import MoustacheFancy from './MoustacheFancy'
import MoustacheMagnum from './MoustacheMagnum'
import { useContext } from 'react'
import AvatarContext from '../../AvatarContext'
import FacialHairType from './FacialHairType'

export default function FacialHair () {
  const type = useContext(AvatarContext).facialHairType ?? FacialHairType.Blank
  switch (type) {
    case FacialHairType.Blank:
      return null
    case FacialHairType.BeardMedium:
      return <BeardMedium/>
    case FacialHairType.BeardLight:
      return <BeardLight/>
    case FacialHairType.BeardMajestic:
      return <BeardMajestic/>
    case FacialHairType.MoustacheFancy:
      return <MoustacheFancy/>
    case FacialHairType.MoustacheMagnum:
      return <MoustacheMagnum/>
  }
}
