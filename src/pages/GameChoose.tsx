import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ellipsisHorizontal, ellipsisVertical, personCircle, search, settings } from 'ionicons/icons';
import { useContext } from 'react';
import { AppContext } from '../state_management/State';

const GameChoose: React.FC = () => {
    const { state, dispatch }: any = useContext(AppContext)

    const onClickTruth = () => {
        console.log("truth")
    }

    const onClickDare = () => {
        console.log("dare")
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/game"></IonBackButton>
                    </IonButtons>
                    <IonTitle>Game</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <h3>Michael</h3>
                <p>Du bist dran!</p>
                <IonButton color="danger" expand="full" onClick={() => onClickTruth()}>Truth</IonButton>
                <IonButton color="warning" expand="full" onClick={() => onClickDare()}>Dare</IonButton>
                <IonButton routerLink="/game/task">DEVELOPER: VIEW TASK</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default GameChoose;