import * as React from 'react'

export type UseIonHeaderParallaxInput = {
  image: string
  expandedColor?: string
  titleColor?: string
  maximumHeight?: number
}

export type UseIonHeaderParallaxResult = {
  ref: React.RefObject<any>
}

export function useIonHeaderParallax(input: UseIonHeaderParallaxInput): UseIonHeaderParallaxResult
