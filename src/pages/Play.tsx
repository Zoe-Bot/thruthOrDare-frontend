import { IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonListHeader, IonPage, IonText, IonTitle, IonToolbar, useIonViewWillEnter, useIonViewWillLeave } from '@ionic/react';
import { useContext, useState } from 'react';
import EmptyStateComponent from '../components/EmptyStateComponent';
import ExploreContainer from '../components/SetCard';
import { Player } from '../model/game';
import { generatePossibleQuestions } from '../services/prepareGame';
import { replaceCurrentPlayerStringWithIcon, replaceStringWithIcon } from '../services/replaceGender';
import { AppContext } from '../state_management/State';

const PlayPage: React.FC = () => {
  const { state, dispatch }: any = useContext(AppContext)
  const [possibleTasks, setPossibleTasks]: any = useState()
  const [notPossibleTasks, setNotPossibleTasks]: any = useState()

  useIonViewWillEnter(() => {
    dispatch({
      type: "CG_PLAYER_REMOVE_EMPTY"
    })
    const [_possibleTasks, _notPossibleTasks] = generatePossibleQuestions(state.currentGame.players, state.currentGame.set)
    setPossibleTasks(_possibleTasks)
    setNotPossibleTasks(_notPossibleTasks)
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Game</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonListHeader><h3>Players from player menu</h3></IonListHeader>
        <IonList>
          {state.currentGame.players.map((player: Player) => (<IonItem key={player.id}>{player.id} | {player.name} | {player.gender}</IonItem>))}
        </IonList>
        <IonListHeader className="ion-padding-top"><h3>Game Data</h3></IonListHeader>
        <IonList>
          {possibleTasks && possibleTasks.map((player: Player) => (
            <>
          <IonItemDivider>
              <IonLabel>
                {player.name}
              </IonLabel>
            </IonItemDivider>
            {player.tasks.length !== 0 ? player.tasks.map((gameTask: any) => (
              <IonItem><IonLabel>{player.name}, {gameTask.message}</IonLabel></IonItem>
            )) : (<EmptyStateComponent text={`${player.name} has no tasks this round`}> </EmptyStateComponent>)}
            </>
          ))}
        </IonList>
        <IonListHeader className="ion-padding-top"><h3>Not possible Tasks for this players</h3></IonListHeader>
        <IonList>
          {notPossibleTasks && notPossibleTasks.map((task: any) => (
            <IonItem>
              {replaceCurrentPlayerStringWithIcon(task.content.currentPlayerGender)}, {replaceStringWithIcon(task.content.message)}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PlayPage;
