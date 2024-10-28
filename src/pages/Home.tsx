import React from 'react';
import { IonRouterOutlet } from '@ionic/react';

import What from './What';
import { Route } from 'react-router';
import Fundaments from './Fundaments';
import Layout from '../layout';

function Home() {

  return (
    <Layout>

      <IonRouterOutlet>
        <Route path="/what-is" component={What}></Route>
        <Route path="/fundaments" component={Fundaments}></Route>
      </IonRouterOutlet>

    </Layout >
  )
}

export default Home;
