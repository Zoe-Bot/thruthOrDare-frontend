import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonAlert } from '@ionic/react';
import { ellipsisHorizontal, ellipsisVertical, personCircle, search, settings, trash } from 'ionicons/icons';
import { useContext } from 'react';
import { AppContext } from '../state_management/State';

const SettingsPage: React.FC = () => {
  const { state, dispatch }: any = useContext(AppContext)
  const [ present ] = useIonAlert();

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/profile"></IonBackButton>
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonItem button detail detailIcon={trash} onClick={() => present({
              header: 'Delete all user data?',
              message: 'This action will remove all your app cache. You will lose all created players and picked sets. If you are logged in this action will log you out. (You wont lose account data like craeted sets or tasks)',
              buttons: [
                { text: 'Delete', handler: (d) => dispatch({ type: 'APP_RESET' }) },
                { text: 'Cancel', role: 'cancel'},
              ],
              onDidDismiss: (e) => {},
            })}>
            <IonLabel>
              Clear cache
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;