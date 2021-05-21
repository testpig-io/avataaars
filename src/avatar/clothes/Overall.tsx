import { useMemo } from 'react'
import uniqueId from '../../util/uniqueId'
import ClotheColor from './ClotheColor'

export default function Overall () {
  const path1 = useMemo(() => uniqueId('react-path-'), [])
  const mask1 = useMemo(() => uniqueId('react-mask-'), [])

  return (
    <g transform='translate(0.000000, 170.000000)'>
      <defs>
        <path id={path1}
              d='M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z'/>
      </defs>
      <mask id={mask1} fill='white'>
        <use xlinkHref={'#' + path1}/>
      </mask>
      <use fill='#B7C1DB' fillRule='evenodd' xlinkHref={'#' + path1}/>
      <ClotheColor maskID={mask1}/>
      <circle fill='#F4F4F4' fillRule='evenodd' cx='81' cy='83' r='5'/>
      <circle fill='#F4F4F4' fillRule='evenodd' cx='183' cy='83' r='5'/>
    </g>
  )
}
