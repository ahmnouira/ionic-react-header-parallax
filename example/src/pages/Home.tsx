import * as React from 'react'
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react'

import { arrowBack as arrowBack } from 'ionicons/icons'

import { Lorem } from '../components/Lorem'
import './Home.css'
import { useIonHeaderParallax } from 'ionic-react-header-parallax'

const Home: React.FC = () => {
  const { ref, loading } = useIonHeaderParallax({ image: 'https://picsum.photos/1080', titleColor: 'black' })

  return (
    <IonPage>
      <IonHeader translucent ref={ref}>
        <IonToolbar>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton className="custom-back" color="dark">
                <IonIcon icon={arrowBack} />
              </IonButton>
            </IonButtons>
            <IonTitle>Post Details</IonTitle>
          </IonToolbar>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {Array(20)
          .fill(1)
          .map((el, index) => (
            <Lorem key={index} />
          ))}
      </IonContent>
    </IonPage>
  )
}

export default Home
