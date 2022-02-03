import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'

import { Lorem } from '../components/Lorem'
import './Home.css'

import { useIonHeaderParallax } from 'ionic-react-header-parallax'

const Home: React.FC = () => {
  const { ref, loading } = useIonHeaderParallax({
    image: 'https://picsum.photos/1080',
    titleColor: 'black',
    showBarButtons: true,
  })

  return (
    <IonPage>
      <IonHeader ref={ref}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Post Title</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding-start ion-padding-end">
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
