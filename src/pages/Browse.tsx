import { RefresherEventDetail } from '@ionic/core';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonNote, IonPage, IonRefresher, IonRefresherContent, IonSpinner, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { useState } from 'react';
import { getCategories, getSets } from '../services/api';

const BrowsePage: React.FC = () => {
  const [state, setState] = useState<any>({ categories: null, sets: null })

  useIonViewDidEnter(async () => {
    const setResult = await getSets()
    const categoryResult = await getCategories()

    setState({ categories: categoryResult, sets: setResult })
  })

  const doRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
    const setResult = await getSets()
    const categoryResult = await getCategories()

    setState({ categories: categoryResult, sets: setResult })

    event.detail.complete()
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Browse</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        {state.categories == null ?
          <div className="ion-text-center ion-padding">
            <IonSpinner color="primary" />
          </div>
          :
          state.categories.map((categorie: any) => (
            <IonList key={categorie._id}>
              <IonListHeader>
                <IonLabel>{categorie.name}</IonLabel>
              </IonListHeader>
              {categorie.set.map((set: any) => (
                <IonItem routerLink={'set/' + set._id} key={set._id}>
                  <IonLabel>{set.name}</IonLabel>
                  <IonNote slot="end">{set.likes}</IonNote>
                </IonItem>))}
            </IonList>
          ))
        }
        <IonList>
          <IonListHeader>
            <IonLabel>All Sets</IonLabel>
          </IonListHeader>
          {state.sets == null ?
            <div className="ion-text-center ion-padding">
              <IonSpinner color="primary" />
            </div>
            :
            state.sets.items.map((set: any) => (
              <IonItem routerLink={'set/' + set._id} key={set._id}>
                <IonLabel>{set.name}</IonLabel>
                <IonNote slot="end">{set.likes}</IonNote>
              </IonItem>))
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default BrowsePage