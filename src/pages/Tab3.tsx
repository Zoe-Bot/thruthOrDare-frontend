import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import ExploreContainer from '../components/SetCard';
import { AppContext } from '../state_management/State';

const Tab3: React.FC = () => {
  const { state }: any = useContext(AppContext)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>{state.count}</h1>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
