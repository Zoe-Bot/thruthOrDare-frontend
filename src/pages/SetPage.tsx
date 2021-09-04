import { IonBackButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonSpinner, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { useState } from 'react';
import { getSetById } from '../services/api';
import { replaceWithIcon } from '../services/replaceGender';

const SetPage: React.FC = (props: any) => {
  const [state, setState] = useState<any>({ isLoading: true, set: null })

  useIonViewDidEnter(async () => {
    const setId = props.match.params.setId
    const result = await getSetById(setId)
    replaceWithIcon(result.taskList)
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
        <IonList>
          {state.isLoading ?
            (<div className="ion-text-center ion-padding">
              <IonSpinner color="primary" />
            </div>) :
            (state.set.taskList.map((task: any, key: number) => (
            <IonItem key={key}>
                <IonLabel>{task.content.message}</IonLabel>
              </IonItem>)))
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SetPage;
