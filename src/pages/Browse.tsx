import { RefresherEventDetail } from '@ionic/core';
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonNote, IonPage, IonRefresher, IonRefresherContent, IonSpinner, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { closeCircle } from 'ionicons/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getSets } from '../services/api';

const BrowsePage: React.FC = () => {
  const [state, setState] = useState<any>({ isLoading: true, sets: null })

  useIonViewDidEnter(async () => {
    const result = await getSets()

    setState({ isLoading: false, sets: result })
  })

  const doRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    const result = await getSets()

    setState({ sets: result })

    event.detail.complete()
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Hello</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList>
          <IonListHeader lines="inset">
            <IonLabel>New This Week</IonLabel>
          </IonListHeader>
          {state.isLoading ?
            (<div className="ion-text-center ion-padding">
              <IonSpinner color="primary" />
            </div>) :
            (state.sets.map((set: any, key: number) => (
              
                <IonItem routerLink={'set/' + set._id} key={set._id}>
                  <IonLabel>{set.name}</IonLabel>
                  <IonNote slot="end">{set.likes}</IonNote>
                </IonItem>
            )))
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default BrowsePage