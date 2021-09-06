import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonTitle, IonToggle, IonToolbar, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';
import { closeOutline, search } from 'ionicons/icons';
import { useContext } from 'react';
import { Gender, Player } from '../model/game';
import { AppContext } from '../state_management/State';

const PlayersPage: React.FC = () => {
    const { state, dispatch }: any = useContext(AppContext)

    useIonViewWillEnter(() => dispatch({
        type: "CG_PLAYER_INIT"
    }))

    useIonViewWillLeave(() => dispatch({
        type: "CG_PLAYER_REMOVE_EMPTY"
    }))

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Player</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    {state.currentGame.players.map((player: Player) => (
                        <IonItem key={player.id}>
                            <IonLabel>{player.gender}</IonLabel>
                            <IonToggle slot="start" checked={player.gender === Gender.MALE ? false : true} onIonChange={(e: any) => dispatch({
                                type: "CG_PLAYER_UPDATE",
                                data: {
                                    id: player.id,
                                    gender: player.gender === Gender.FEMALE ? Gender.MALE : Gender.FEMALE
                                }
                            })}></IonToggle>
                            <IonInput value={player.name} placeholder="Enter name" onIonChange={(e: any) => dispatch({
                                type: "CG_PLAYER_UPDATE",
                                data: {
                                    id: player.id,
                                    name: e.detail.value
                                }
                            })}></IonInput>
                            <IonButtons slot="end">
                                <IonButton onClick={() => dispatch({
                                    type: "CG_PLAYER_REMOVE",
                                    data: {
                                        id: player.id
                                    }
                                })}>
                                    <IonIcon icon={closeOutline} slot="icon-only"></IonIcon>
                                </IonButton>
                            </IonButtons>
                        </IonItem>))}
                </IonList>
                <IonButton expand="full" onClick={() => dispatch({
                    type: "CG_PLAYER_ADD",
                    data: {
                        name: "",
                        gender: Gender.MALE
                    }
                })}>Add Player
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default PlayersPage;