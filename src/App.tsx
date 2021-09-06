import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, peopleOutline, personOutline, playOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import BrowsePage from './pages/Browse';
import SetPage from './pages/SetPage';
import { AppContextProvider } from './state_management/State';
import Profile from './pages/Profile';
import PlayersPage from './pages/Players';
import PlayPage from './pages/Play';

const App: React.FC = () => (
  <AppContextProvider>
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/browse" component={BrowsePage} />
            <Route exact path="/set/:setId" component={SetPage} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/players" component={PlayersPage} />
            <Route path="/play" component={PlayPage} />
            <Route exact path="/">
              <Redirect to="/browse" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="browse" href="/browse">
              <IonIcon icon={homeOutline} />
              <IonLabel>Browse</IonLabel>
            </IonTabButton>
            <IonTabButton tab="play" href="/play">
              <IonIcon icon={playOutline} />
              <IonLabel>Play</IonLabel>
            </IonTabButton>
            <IonTabButton tab="player" href="/players">
              <IonIcon icon={peopleOutline} />
              <IonLabel>Players</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={personOutline} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  </AppContextProvider>
);

export default App;
