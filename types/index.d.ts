import * as React from 'react'

export type UseIonHeaderParallaxInput = {
  image: string
  expandedColor?: string
  titleColor?: string
  maximumHeight?: number
  defaultImage: string
  showBarButtons?: boolean
}

export type UseIonHeaderParallaxResult = {
  ref: React.RefObject<any>
  loading: boolean
}

export function useIonHeaderParallax(input: UseIonHeaderParallaxInput): UseIonHeaderParallaxResult
