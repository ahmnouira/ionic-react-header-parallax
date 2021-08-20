import * as React from 'react'

type IonHeaderParallaxProps = {
  image: string
  expandedColor?: string
  originalToolbarBgColor: string
  maximumHeight: number
  headerMinHeight: number
}

export const IonHeaderParallax: React.FC<React.PropsWithChildren<IonHeaderParallaxProps>> = ({
  children,
  image,
  expandedColor = '#313131',
  maximumHeight,
  originalToolbarBgColor,
  headerMinHeight,
}: React.PropsWithChildren<IonHeaderParallaxProps>) => {
  return (
    <div
      className="color-overlay"
      style={{
        zIndex: 10,
        left: 0,
        backgroundColor: originalToolbarBgColor,
        height: `${maximumHeight}px`,
        top: `${-headerMinHeight * 0}px`,
        position: 'absolute',
        pointerEvents: 'none',
        width: '100%',
      }}
    >
      <div
        className="image-overlay"
        style={{
          background: `${expandedColor} url(${image}) center no-repeat cover`,
          height: '100%',
          width: '100%',
          pointerEvents: 'none',
        }}
      >
        {children}
      </div>
    </div>
  )
}
