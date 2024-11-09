import { useId } from 'react'
import ClotheColor from './ClotheColor'

export default function ShirtVNeck () {
  const path1 = useId()
  const mask1 = useId()

  return (
    <g transform='translate(0, 170)'>
      <defs>
        <path id={path1}
              d='M171.319631,29.9364358 C205.706337,35.3665707 232,65.13854 232,101.051724 L232,110 L32,110 L32,101.051724 C32,65.1380521 58.2943778,35.3657617 92.6817711,29.9362145 C93.5835973,35.0053598 96.116393,39.8238432 100.236125,43.5389794 L100.236125,43.5389794 L129.321203,69.7676333 C130.843316,71.1402598 133.156684,71.1402598 134.678797,69.7676333 L134.678797,69.7676333 L163.763875,43.5389794 C164.189462,43.1551884 164.601167,42.7562772 164.998197,42.3430127 C168.414164,38.7873666 170.517305,34.4520434 171.319628,29.9364354 Z'/>
      </defs>
      <mask id={mask1} fill='white'>
        <use xlinkHref={'#' + path1}/>
      </mask>
      <use fill='#E6E6E6' fillRule='evenodd' xlinkHref={'#' + path1}/>
      <ClotheColor maskID={mask1}/>
    </g>
  )
}
