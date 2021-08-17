export type UseIonHeaderParallaxInput = {
  image: string
  expandedColor: string
  titleColor: string
  maximumHeight?: number
}

export type UseIonHeaderParallaxInputResult = {
  ref: React.MutableRefObject<HTMLElement | null>
  onScroll: () => void
}


export function useIonHeaderParallax(input: UseIonHeaderParallaxInput): UseIonHeaderParallaxInputResult;


