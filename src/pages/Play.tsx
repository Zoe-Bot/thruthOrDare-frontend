import { IonChip, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonListHeader, IonPage, IonText, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
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
  const [erorrs, setErrors] = useState<string[]>([])
  useIonViewDidEnter(() => {
    dispatch({
      type: "CG_PLAYER_REMOVE_EMPTY"
    })
    const [_possibleTasks, _notPossibleTasks, _errors] = generatePossibleQuestions(state.currentGame.players, state.currentGame.set)
    console.log(_possibleTasks, _notPossibleTasks, _errors)
    setPossibleTasks(_possibleTasks)
    setNotPossibleTasks(_notPossibleTasks)
    if(_errors)
      setErrors(_errors)
    else
      setErrors([]) // Reset erros if there are fixed
  }, [state])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Game</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {erorrs.map((error: string, index: number) => (
        <IonChip key={`err_${index}`} color="danger">
          <IonLabel>{error}</IonLabel>
        </IonChip>))}
        <IonListHeader><h3>Players from player menu</h3></IonListHeader>
        <IonList>
          {state.currentGame.players.map((player: Player) => (<IonItem key={`pl_${player.id}`}>{player.id} | {player.name} | {player.gender}</IonItem>))}
        </IonList>
        <IonListHeader className="ion-padding-top"><h3>Game Data</h3></IonListHeader>
        <IonList>
          {possibleTasks && possibleTasks.map((player: Player) => (
            <div key={player.id + "" + player.name}>
              <IonItemDivider>
                <IonLabel>
                  {player.name}
                </IonLabel>
              </IonItemDivider>
              {player.tasks.length !== 0 ? player.tasks.map((gameTask: any, index:number) => (
                <IonItem key={`gm_${gameTask.id}${index}`}><IonLabel>{player.name}, {gameTask.message}</IonLabel></IonItem>
              )) : (<EmptyStateComponent text={`${player.name} has no tasks this round`}> </EmptyStateComponent>)}
            </div>
          ))}
        </IonList>
        <IonListHeader className="ion-padding-top"><h3>Not possible Tasks for this players</h3></IonListHeader>
        <IonList>
          {notPossibleTasks && notPossibleTasks.map((task: any, index: number) => (
            <IonItem key={"notpo_" + task._id + "" + index}>
              {replaceCurrentPlayerStringWithIcon(task.content.currentPlayerGender)}, {replaceStringWithIcon(task.content.message)}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PlayPage;
