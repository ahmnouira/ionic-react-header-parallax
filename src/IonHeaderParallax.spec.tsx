import * as React from 'react'
import { render } from '@testing-library/react'
import { IonHeaderParallax } from './IonHeaderParallax'

describe('IonHeaderParallax', () => {
  it('should render correctly', () => {
    const {} = render(
      <IonHeaderParallax
        image="https://picsum.photos/1080"
        maximumHeight={350}
        expandedColor="#AAA"
        headerMinHeight={100}
        originalToolbarBgColor="blue"
      />
    )
  })
})
