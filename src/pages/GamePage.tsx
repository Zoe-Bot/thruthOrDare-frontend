import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { ellipsisHorizontal, ellipsisVertical, personCircle, search, settings } from 'ionicons/icons';
import { useContext, useEffect, useState } from 'react';
import { getNextPlayer } from '../services/Game';
import { AppContext } from '../state_management/State';

const GamePage: React.FC = () => {
    const { state, dispatch }: any = useContext(AppContext)
    const [ isTask, setIsTask ] = useState(false)
    const onClickTruth = () => {
        console.log("truth")
    }

    const onClickDare = () => {
        console.log("dare")
    }
    useEffect(() => {
        console.log(getNextPlayer())
    }, [isTask])
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
                { !isTask ? (<>
                    <h3>Michael</h3>
                    <p>Du bist dran!</p>
                    <IonButton color="danger" expand="full" onClick={() => onClickTruth()}>Truth</IonButton>
                    <IonButton color="warning" expand="full" onClick={() => onClickDare()}>Dare</IonButton>
                    <IonButton onClick={() => setIsTask(true)}>DEVELOPER: VIEW TASK</IonButton>
                </>) : (<> <h1>Truth</h1>
                    <h3>Michael, gib dein Handy Joy. Joy darf nun etwas in deine Insta Sotry posten.</h3>
                    <IonButton onClick={() => setIsTask(false)}>Continue</IonButton></>)}
            </IonContent>
        </IonPage>
    );
};

export default GamePage;