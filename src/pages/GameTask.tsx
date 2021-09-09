import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ellipsisHorizontal, ellipsisVertical, personCircle, search, settings } from 'ionicons/icons';
import { useContext } from 'react';
import { AppContext } from '../state_management/State';

const GameTask: React.FC = () => {
    const { state, dispatch }: any = useContext(AppContext)
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/game/choose"></IonBackButton>
                    </IonButtons>
                    <IonTitle>GameTask</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <h1>Truth</h1>
                <h3>Michael, gib dein Handy Joy. Joy darf nun etwas in deine Insta Sotry posten.</h3>
            </IonContent>
        </IonPage>
    );
};

export default GameTask;