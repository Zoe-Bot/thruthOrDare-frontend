import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import ExploreContainer from '../components/SetCard';
import { AppContext } from '../state_management/State';

const Tab2: React.FC = () => {
  const { state, dispatch }: any = useContext(AppContext)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonInput value={state.count} onIonChange={(e: any) => dispatch({type: "setCount", count: e.target.value})}></IonInput>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
