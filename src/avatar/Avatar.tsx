import Skin from './Skin'
import Clothe from './clothes'
import Face from './face'
import Top from './top'
import Accessories from './top/accessories'
import uniqueId from '../util/uniqueId'
import { SVGProps, useMemo } from 'react'
import AvatarProps from './AvatarProps'
import AvatarContext from './AvatarContext'

type Props = AvatarProps & SVGProps<SVGSVGElement>

export default function Avatar ({
                                  style, circle, topType, accessoriesType, hairColor, facialHairType, facialHairColor, clotheType, clotheColor, graphicType,
                                  eyeType, eyebrowType, mouthType, skinColor, hatColor, ...props
                                }: Props) {
  const path1 = useMemo(() => uniqueId('react-path-'), [])
  const path2 = useMemo(() => uniqueId('react-path-'), [])
  const path3 = useMemo(() => uniqueId('react-path-'), [])
  const mask1 = useMemo(() => uniqueId('react-mask-'), [])
  const mask2 = useMemo(() => uniqueId('react-mask-'), [])
  const mask3 = useMemo(() => uniqueId('react-mask-'), [])
  return (
    <AvatarContext.Provider value={{
      topType, accessoriesType, hairColor, facialHairType, facialHairColor, clotheType, clotheColor, graphicType, eyeType, eyebrowType, mouthType, skinColor,
      hatColor
    }}>
      <svg width='264px' height='280px' viewBox='0 0 264 280' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
           style={style} {...props}>
        <desc>Created with getavataaars.com</desc>
        <defs>
          <circle id={path1} cx='120' cy='120' r='120'/>
          <path id={path2}
                d='M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z'/>
          <path id={path3}
                d='M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z'/>
        </defs>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          {circle && (
            <g strokeWidth='1' fillRule='evenodd' transform='translate(12.000000, 40.000000)'>
              <mask id={mask1} fill='white'>
                <use xlinkHref={'#' + path1}/>
              </mask>
              <use fill='#E6E6E6' xlinkHref={'#' + path1}/>
              <g mask={'url(#' + mask1 + ')'} fill='#65C9FF'>
                <rect x='0' y='0' width='240' height='240'/>
              </g>
            </g>
          )}
          {circle && (
            <mask id={mask2} fill='white'>
              <use xlinkHref={'#' + path2}/>
            </mask>
          )}
          <g strokeWidth='1' fillRule='evenodd' mask={'url(#' + mask2 + ')'}>
            <g transform='translate(32.000000, 36.000000)'>
              <mask id={mask3} fill='white'>
                <use xlinkHref={'#' + path3}/>
              </mask>
              <use fill='#D0C6AC' xlinkHref={'#' + path3}/>
              <Skin maskID={mask3}/>
              <path fillOpacity='0.100000001' fill='#000000' mask={'url(#' + mask3 + ')'}
                    d='M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z'/>
            </g>
            <Clothe/>
            <Face/>
            <Top>
              <Accessories/>
            </Top>
          </g>
        </g>
      </svg>
    </AvatarContext.Provider>
  )
}
