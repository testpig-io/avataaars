import Angry from './Angry'
import AngryNatural from './AngryNatural'
import Default from './Default'
import DefaultNatural from './DefaultNatural'
import FlatNatural from './FlatNatural'
import RaisedExcited from './RaisedExcited'
import RaisedExcitedNatural from './RaisedExcitedNatural'
import SadConcerned from './SadConcerned'
import SadConcernedNatural from './SadConcernedNatural'
import UnibrowNatural from './UnibrowNatural'
import UpDown from './UpDown'
import UpDownNatural from './UpDownNatural'
import { useContext } from 'react'
import AvatarContext from '../../AvatarContext'
import EyebrowType from './EyebrowType'

export default function Eyebrow () {
  const type = useContext(AvatarContext).eyebrowType
  switch (type) {
    case EyebrowType.Angry:
      return <Angry/>
    case EyebrowType.AngryNatural:
      return <AngryNatural/>
    case EyebrowType.DefaultNatural:
      return <DefaultNatural/>
    case EyebrowType.FlatNatural:
      return <FlatNatural/>
    case EyebrowType.RaisedExcited:
      return <RaisedExcited/>
    case EyebrowType.RaisedExcitedNatural:
      return <RaisedExcitedNatural/>
    case EyebrowType.SadConcerned:
      return <SadConcerned/>
    case EyebrowType.SadConcernedNatural:
      return <SadConcernedNatural/>
    case EyebrowType.UnibrowNatural:
      return <UnibrowNatural/>
    case EyebrowType.UpDown:
      return <UpDown/>
    case EyebrowType.UpDownNatural:
      return <UpDownNatural/>
    default:
      return <Default/>
  }
}
