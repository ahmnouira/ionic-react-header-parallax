import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import { Lorem } from "../components/Lorem";
import { Container } from "../components/Container";

import { useIonHeaderParallax } from "ionic-react-header-parallax";

const Home: React.FC = () => {
  const { ref } = useIonHeaderParallax({
    image: "https://picsum.photos/1080",
    titleColor: "black",
    showBarButtons: true,
  });

  return (
    <IonPage>
      <IonHeader ref={ref}>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
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
