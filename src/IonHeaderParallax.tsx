import * as React from 'react'
import { UseIonHeaderParallaxResult } from './useIonicHeaderParallax'

type IonHeaderParallaxProps = Pick<UseIonHeaderParallaxResult, 'colorOverlayStyle'> & {
  image: string
  expandedColor?: string
}

export const IonHeaderParallax: React.FC<React.PropsWithChildren<IonHeaderParallaxProps>> = ({
  children,
  image,
  expandedColor = "#313131",
  colorOverlayStyle,
}: React.PropsWithChildren<IonHeaderParallaxProps>) => {
  return (
    <div className='color-overlay' style={colorOverlayStyle}>
      <div
        className='image-overlay'
        style={{
          background: `${expandedColor} url(${image}) center no-repeat cover`,
          height: '100%',
          width: '100%',
          pointerEvents: 'none',
        }}>
        {children}
      </div>
    </div>
  )
}