export type UseIonHeaderParallaxInput = {
  image: string
  expandedColor: string
  titleColor: string
  maximumHeight?: number
}

export type UseIonHeaderParallaxResult = {
  ref: React.MutableRefObject<HTMLElement | null>
  onScroll: () => void
}

export type IonHeaderParallaxProps = {
  image: string
  expandedColor?: string
  originalToolbarBgColor: string
  maximumHeight: number
  headerMinHeight: number
}

export const IonHeaderParallax: React.FC<React.PropsWithChildren<IonHeaderParallaxProps>>

export function useIonHeaderParallax(input: UseIonHeaderParallaxInput): UseIonHeaderParallaxResult
