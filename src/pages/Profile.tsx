import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import { AppContext } from '../state_management/State';

const Profile: React.FC = () => {
  const { state, dispatch }: any = useContext(AppContext)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      </IonContent>
    </IonPage>
  );
};

export default Profile;