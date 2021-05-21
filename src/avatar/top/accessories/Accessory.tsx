import Kurt from './Kurt'
import Prescription01 from './Prescription01'
import Prescription02 from './Prescription02'
import Round from './Round'
import Sunglasses from './Sunglasses'
import Wayfarers from './Wayfarers'
import { useContext } from 'react'
import AvatarContext from '../../AvatarContext'
import AccessoriesType from './AccessoriesType'

export default function Accessory () {
  const type = useContext(AvatarContext).accessoriesType
  switch (type) {
    case AccessoriesType.Kurt:
      return <Kurt/>
    case AccessoriesType.Prescription01:
      return <Prescription01/>
    case AccessoriesType.Prescription02:
      return <Prescription02/>
    case AccessoriesType.Round:
      return <Round/>
    case AccessoriesType.Sunglasses:
      return <Sunglasses/>
    case AccessoriesType.Wayfarers:
      return <Wayfarers/>
    default:
      return null
  }
}
