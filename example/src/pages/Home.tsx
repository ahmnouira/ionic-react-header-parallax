import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenuButton,
} from "@ionic/react";
import "./Home.css";
import { Lorem } from "../components/Lorem";
import { Container } from "../components/Container";

import { useIonHeaderParallax } from "ionic-react-header-parallax";

const Home: React.FC = () => {
  const { ref } = useIonHeaderParallax({
    image: "https://picsum.photos/1080",
    maximumHeight: 480,
    showBarButtons: true,
    titleColor: "white",
    titleStyle: {},
    endButtonStyle: {},
    startButtonStyle: {},
  });

  return (
    <IonPage>
      <IonHeader ref={ref}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="#" />
          </IonButtons>
          <IonButtons slot="end">
            <IonMenuButton autoHide={false} />
          </IonButtons>
          <IonTitle>Post Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Container>
          {Array(20)
            .fill(1)
            .map((el, index) => (
              <Lorem key={index} />
            ))}
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Home;
