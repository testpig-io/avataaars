import Eyebrow from './eyebrow'
import Eyes from './eyes'
import Mouth from './mouth'
import Nose from './nose/Default'

export default function Face () {
  return (
    <g transform='translate(76, 82)' fill='#000000'>
      <Mouth/>
      <Nose/>
      <Eyes/>
      <Eyebrow/>
    </g>
  )
}
