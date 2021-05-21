import Close from './Close'
import Cry from './Cry'
import Default from './Default'
import Dizzy from './Dizzy'
import EyeRoll from './EyeRoll'
import Happy from './Happy'
import Hearts from './Hearts'
import Side from './Side'
import Squint from './Squint'
import Surprised from './Surprised'
import Wink from './Wink'
import WinkWacky from './WinkWacky'
import { useContext } from 'react'
import AvatarContext from '../../AvatarContext'
import EyeType from './EyeType'

export default function Eyes () {
  const type = useContext(AvatarContext).eyeType
  switch (type) {
    case EyeType.Close:
      return <Close/>
    case EyeType.Cry:
      return <Cry/>
    case EyeType.Dizzy:
      return <Dizzy/>
    case EyeType.EyeRoll:
      return <EyeRoll/>
    case EyeType.Happy:
      return <Happy/>
    case EyeType.Hearts:
      return <Hearts/>
    case EyeType.Side:
      return <Side/>
    case EyeType.Squint:
      return <Squint/>
    case EyeType.Surprised:
      return <Surprised/>
    case EyeType.Wink:
      return <Wink/>
    case EyeType.WinkWacky:
      return <WinkWacky/>
    default:
      return <Default/>
  }
}
