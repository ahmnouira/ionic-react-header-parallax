export type UseIonHeaderParallxInput = {
  image: string
  expandedColor: string
  titleColor: string
  maximumHeight?: number
}

export type UseIonHeaderParallxInputResult = {
  ref: React.MutableRefObject<HTMLElement | null>
}

import {useIonHeaderParallax} from '../src/useIonicHeaderParallax'

export {
  useIonHeaderParallax
}