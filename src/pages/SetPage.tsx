import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonSpinner, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { useContext, useState } from 'react';
import EmptyStateComponent from '../components/EmptyStateComponent';
import { getSetById } from '../services/api';
import { replaceStringWithIcon } from '../services/replaceGender';
import { AppContext } from '../state_management/State';

const SetPage: React.FC = (props: any) => {
  const [state, setState] = useState<any>({ isLoading: true, set: null })
  const { globalState, dispatch }: any = useContext(AppContext)

  useIonViewDidEnter(async () => {
    const setId = props.match.params.setId
    const result = await getSetById(setId)

    setState({ isLoading: false, set: result })
  })

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/browse"></IonBackButton>
          </IonButtons>
          <IonTitle>{state.set?.name ?? ''}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <p>set.truthCount: {state.set?.truthCount}</p>
        <p>set.daresCount: {state.set?.daresCount}</p>
        <p>set total count: {state.set?.daresCount + state.set?.truthCount}</p>
        <p>taskList.length: {state.set?.taskList.length}</p>
        <IonButton expand="full" onClick={() => dispatch({type: "CG_SET_ADD", data: state.set})}>Play</IonButton>
        <IonList>
          {state.isLoading ?
            (<div className="ion-text-center ion-padding">
              <IonSpinner color="primary" />
            </div>) :
            state.set.taskList.length == 0 ?
              <EmptyStateComponent text={"No Tasks yet"}></EmptyStateComponent>
              :
              state.set.taskList.map((task: any, key: number) => (
                <IonItem key={key}>
                  <IonLabel>{key}: {replaceStringWithIcon(task.content.message)}</IonLabel>
                </IonItem>))
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SetPage;
