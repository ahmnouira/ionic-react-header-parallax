import * as React from 'react'

type IonHeaderParallaxProps = {}

export const IonHeaderParallax: React.FC<IonHeaderParallaxProps> = ({}: IonHeaderParallaxProps) => {
  return (
    <div className="color-overlay">
      <div className="image-overlay"></div>
    </div>
  )
}
