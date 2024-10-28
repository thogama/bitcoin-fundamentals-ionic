import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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
import '@ionic/react/css/palettes/dark.class.css';


/* Theme variables */
import './theme/variables.css';
import { AppProvider } from './providers';
import Fundaments from './pages/Fundaments';
import What from './pages/What';

setupIonicReact();

const App: React.FC = () => (
  <AppProvider>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Switch>

            <Route path="/home" component={Home}></Route>
            <Redirect exact from="/" to="/home" />
            <Route path="/what-is" component={What}></Route>
            <Route path="/fundaments" component={Fundaments}></Route>
          </Switch>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  </AppProvider >
);

export default App;
