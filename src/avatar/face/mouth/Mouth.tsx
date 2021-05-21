import Concerned from './Concerned'
import Default from './Default'
import Disbelief from './Disbelief'
import Eating from './Eating'
import Grimace from './Grimace'
import Sad from './Sad'
import ScreamOpen from './ScreamOpen'
import Serious from './Serious'
import Smile from './Smile'
import Tongue from './Tongue'
import Twinkle from './Twinkle'
import Vomit from './Vomit'
import { useContext } from 'react'
import AvatarContext from '../../AvatarContext'
import MouthType from './MouthType'

export default function Mouth () {
  const type = useContext(AvatarContext).mouthType
  switch (type) {
    case MouthType.Concerned:
      return <Concerned/>
    case MouthType.Disbelief:
      return <Disbelief/>
    case MouthType.Eating:
      return <Eating/>
    case MouthType.Grimace:
      return <Grimace/>
    case MouthType.Sad:
      return <Sad/>
    case MouthType.ScreamOpen:
      return <ScreamOpen/>
    case MouthType.Serious:
      return <Serious/>
    case MouthType.Smile:
      return <Smile/>
    case MouthType.Tongue:
      return <Tongue/>
    case MouthType.Twinkle:
      return <Twinkle/>
    case MouthType.Vomit:
      return <Vomit/>
    default:
      return <Default/>
  }
}
