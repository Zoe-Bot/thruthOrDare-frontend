import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ellipsisHorizontal, ellipsisVertical, personCircle, search, settings } from 'ionicons/icons';
import { useContext } from 'react';
import { AppContext } from '../state_management/State';

const Profile: React.FC = () => {
  const { state, dispatch }: any = useContext(AppContext)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton routerLink="/profile/settings">
              <IonIcon slot="icon-only" icon={settings} />
            </IonButton>
          </IonButtons>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      </IonContent>
    </IonPage>
  );
};

export default Profile;