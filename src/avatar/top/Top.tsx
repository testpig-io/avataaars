import { useContext } from 'react'
import AvatarContext from '../AvatarContext'
import Eyepatch from './Eyepatch'
import Hat from './Hat'
import Hijab from './Hijab'
import LongHairBigHair from './LongHairBigHair'
import LongHairBob from './LongHairBob'
import LongHairBun from './LongHairBun'
import LongHairCurly from './LongHairCurly'
import LongHairCurvy from './LongHairCurvy'
import LongHairDreads from './LongHairDreads'
import LongHairFrida from './LongHairFrida'
import LongHairFro from './LongHairFro'
import LongHairFroBand from './LongHairFroBand'
import LongHairMiaWallace from './LongHairMiaWallace'
import LongHairNotTooLong from './LongHairNotTooLong'
import LongHairShavedSides from './LongHairShavedSides'
import LongHairStraight from './LongHairStraight'
import LongHairStraight2 from './LongHairStraight2'
import LongHairStraightStrand from './LongHairStraightStrand'
import NoHair from './NoHair'
import PrinceCut from './PrinceCut'
import ShortHairDreads01 from './ShortHairDreads01'
import ShortHairDreads02 from './ShortHairDreads02'
import ShortHairFrizzle from './ShortHairFrizzle'
import ShortHairShaggyMullet from './ShortHairShaggyMullet'
import ShortHairShortCurly from './ShortHairShortCurly'
import ShortHairShortFlat from './ShortHairShortFlat'
import ShortHairShortRound from './ShortHairShortRound'
import ShortHairShortWaved from './ShortHairShortWaved'
import ShortHairSides from './ShortHairSides'
import ShortHairTheCaesar from './ShortHairTheCaesar'
import ShortHairTheCaesarSidePart from './ShortHairTheCaesarSidePart'
import TopType from './TopType'
import Turban from './Turban'
import WinterHat1 from './WinterHat1'
import WinterHat2 from './WinterHat2'
import WinterHat3 from './WinterHat3'
import WinterHat4 from './WinterHat4'

const Top = ({ children }) => {
  const type = useContext(AvatarContext).topType ?? TopType.LongHairStraight
  switch (type) {
    case TopType.NoHair:
      return <NoHair>{children}</NoHair>
    case TopType.Eyepatch:
      return <Eyepatch/>
    case TopType.Hat:
      return <Hat>{children}</Hat>
    case TopType.Hijab:
      return <Hijab>{children}</Hijab>
    case TopType.Turban:
      return <Turban>{children}</Turban>
    case TopType.WinterHat1:
      return <WinterHat1>{children}</WinterHat1>
    case TopType.WinterHat2:
      return <WinterHat2>{children}</WinterHat2>
    case TopType.WinterHat3:
      return <WinterHat3>{children}</WinterHat3>
    case TopType.WinterHat4:
      return <WinterHat4>{children}</WinterHat4>
    case TopType.LongHairBigHair:
      return <LongHairBigHair>{children}</LongHairBigHair>
    case TopType.LongHairBob:
      return <LongHairBob>{children}</LongHairBob>
    case TopType.LongHairBun:
      return <LongHairBun>{children}</LongHairBun>
    case TopType.LongHairCurly:
      return <LongHairCurly>{children}</LongHairCurly>
    case TopType.LongHairCurvy:
      return <LongHairCurvy>{children}</LongHairCurvy>
    case TopType.LongHairDreads:
      return <LongHairDreads>{children}</LongHairDreads>
    case TopType.LongHairFrida:
      return <LongHairFrida>{children}</LongHairFrida>
    case TopType.LongHairFro:
      return <LongHairFro>{children}</LongHairFro>
    case TopType.LongHairFroBand:
      return <LongHairFroBand>{children}</LongHairFroBand>
    case TopType.LongHairNotTooLong:
      return <LongHairNotTooLong>{children}</LongHairNotTooLong>
    case TopType.LongHairShavedSides:
      return <LongHairShavedSides>{children}</LongHairShavedSides>
    case TopType.LongHairMiaWallace:
      return <LongHairMiaWallace>{children}</LongHairMiaWallace>
    case TopType.LongHairStraight:
      return <LongHairStraight>{children}</LongHairStraight>
    case TopType.LongHairStraight2:
      return <LongHairStraight2>{children}</LongHairStraight2>
    case TopType.LongHairStraightStrand:
      return <LongHairStraightStrand>{children}</LongHairStraightStrand>
    case TopType.ShortHairDreads01:
      return <ShortHairDreads01>{children}</ShortHairDreads01>
    case TopType.ShortHairDreads02:
      return <ShortHairDreads02>{children}</ShortHairDreads02>
    case TopType.ShortHairFrizzle:
      return <ShortHairFrizzle>{children}</ShortHairFrizzle>
    /* XXX: broken, fix it later
    case TopType.ShortHairShaggy:
      return <ShortHairShaggy>{children}</ShortHairShaggy>*/
    case TopType.ShortHairShaggyMullet:
      return <ShortHairShaggyMullet>{children}</ShortHairShaggyMullet>
    case TopType.ShortHairShortCurly:
      return <ShortHairShortCurly>{children}</ShortHairShortCurly>
    case TopType.ShortHairShortFlat:
      return <ShortHairShortFlat>{children}</ShortHairShortFlat>
    case TopType.ShortHairShortRound:
      return <ShortHairShortRound>{children}</ShortHairShortRound>
    case TopType.ShortHairShortWaved:
      return <ShortHairShortWaved>{children}</ShortHairShortWaved>
    case TopType.ShortHairSides:
      return <ShortHairSides>{children}</ShortHairSides>
    case TopType.ShortHairTheCaesar:
      return <ShortHairTheCaesar>{children}</ShortHairTheCaesar>
    case TopType.ShortHairTheCaesarSidePart:
      return <ShortHairTheCaesarSidePart>{children}</ShortHairTheCaesarSidePart>
    case TopType.PrinceCut:
      return <PrinceCut>{children}</PrinceCut>
  }
}

export default Top
