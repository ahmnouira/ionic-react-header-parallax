import * as React from 'react'
import { render, } from '@testing-library/react/'
import { useIonHeaderParallax } from './useIonicHeaderParallax'
import {
  IonBackButton,
  IonButton,
  IonPage,
  IonButtons,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react'

const Element: JSX.Element = (
  <IonPage>
    <IonHeader translucent>
      <IonToolbar mode="ios">
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle>Post Details</IonTitle>
        <IonButtons slot="end">
          <IonButton>Button</IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent className="ion-padding">
      {Array(20)
        .fill(1)
        .map((_el, index) => (
          <p key={index} />
        ))}
    </IonContent>
  </IonPage>
)

describe('IonHeaderParallax', () => {

  beforeEach(() => {
    jest.useFakeTimers()
  })

  it('should render correctly', () => {
    const Component = () => {
      useIonHeaderParallax({})
      return Element
    }

    const { container } = render(<Component />)
    expect(container).toBeTruthy()
  })



  // Running all pending timers and switching to real timers using Jest
  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })
})
