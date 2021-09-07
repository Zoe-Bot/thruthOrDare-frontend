import { IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonText, IonTitle, IonToolbar, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';
import { useContext } from 'react';
import ExploreContainer from '../components/SetCard';
import { Player } from '../model/game';
import { AppContext } from '../state_management/State';

const PlayPage: React.FC = () => {
  const { state, dispatch }: any = useContext(AppContext)


  useIonViewWillEnter(() => dispatch({
    type: "CG_PLAYER_REMOVE_EMPTY"
  }))

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Game</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonText><h5>Players from player menu</h5></IonText>
        <IonList>
          {state.currentGame.players.map((player: Player) => (<IonItem key={player.id}>{player.id} | {player.name} | {player.gender}</IonItem>))}
        </IonList>
        <IonText><h5>Selected set: {state.currentGame?.set?.name}</h5></IonText>
        <IonText><p>{JSON.stringify(state.currentGame?.set)}</p></IonText>
      </IonContent>
    </IonPage>
  );
};

export default PlayPage;
