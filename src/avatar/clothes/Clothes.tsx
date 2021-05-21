import ClotheType from './ClotheType'
import ShirtCrewNeck from './ShirtCrewNeck'
import ShirtScoopNeck from './ShirtScoopNeck'
import ShirtVNeck from './ShirtVNeck'
import BlazerShirt from './BlazerShirt'
import GraphicShirt from './GraphicShirt'
import Hoodie from './Hoodie'
import CollarSweater from './CollarSweater'
import BlazerSweater from './BlazerSweater'
import Overall from './Overall'
import { useContext } from 'react'
import AvatarContext from '../AvatarContext'

export default function Clothes () {
  const type = useContext(AvatarContext).clotheType ?? ClotheType.BlazerShirt
  switch (type) {
    case ClotheType.BlazerShirt:
      return <BlazerShirt/>
    case ClotheType.BlazerSweater:
      return <BlazerSweater/>
    case ClotheType.CollarSweater:
      return <CollarSweater/>
    case ClotheType.GraphicShirt:
      return <GraphicShirt/>
    case ClotheType.Hoodie:
      return <Hoodie/>
    case ClotheType.Overall:
      return <Overall/>
    case ClotheType.ShirtCrewNeck:
      return <ShirtCrewNeck/>
    case ClotheType.ShirtScoopNeck:
      return <ShirtScoopNeck/>
    case ClotheType.ShirtVNeck:
      return <ShirtVNeck/>
  }
}
