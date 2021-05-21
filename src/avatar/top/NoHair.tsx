import uniqueId from '../../util/uniqueId'
import FacialHair from './facialHair'
import { useMemo } from 'react'

const NoHair = ({ children }) => {
  const filter1 = useMemo(() => uniqueId('react-filter-'), [])
  const mask1 = useMemo(() => uniqueId('react-mask-'), [])
  const path1 = useMemo(() => uniqueId('react-path-'), [])

  return (
    <g strokeWidth='1' fillRule='evenodd'>
      <defs>
        <rect id={path1} x='0' y='0' width='264' height='280'/>
        <filter x='-0.8%' y='-2.0%' width='101.5%' height='108.0%' filterUnits='objectBoundingBox' id={filter1}>
          <feOffset dx='0' dy='2' in='SourceAlpha' result='shadowOffsetOuter1'/>
          <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0' type='matrix' in='shadowOffsetOuter1' result='shadowMatrixOuter1'/>
          <feMerge>
            <feMergeNode in='shadowMatrixOuter1'/>
            <feMergeNode in='SourceGraphic'/>
          </feMerge>
        </filter>
      </defs>
      <mask id={mask1} fill='white'>
        <use xlinkHref={'#' + path1}/>
      </mask>
      <g mask={`url(#${mask1})`}>
        <g transform='translate(-1.000000, 0.000000)'>
          <FacialHair/>
          {children}
        </g>
      </g>
    </g>
  )
}

export default NoHair
