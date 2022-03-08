import React, { useEffect, useState } from 'react'
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact, 
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
import TabWrapper from './components/TabWrapper/TabWrapper';
import ROUTES, { RenderRoutes } from './components/ProtectedRoute/ProtectedRoute';
import Menu from './components/Menu/Menu';
import Alert from './components/Alert/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/reducers';
import { openAlertAction } from './redux/actions/alertActions';
import { AlertState } from './redux/types/alertTypes';

setupIonicReact();

const App: React.FC = () => {
  const dispatch = useDispatch()
  const alert = useSelector((state: RootState) => state.alert)
  const errors = useSelector((state: RootState) => state.errors)
  const isAuthenticated = true
  const [tabBar, setTabBar] = useState<boolean>(true)
  const [showAlert, setShowAlert] = useState(false)
  const tabItems = [{
    url: '/home',
    title: 'Hem',
    icon: 'home'
  },{
    url: '/me',
    title: 'Min sida',
    icon: 'home'
  }]

  useEffect(() => {
    setShowAlert(alert.showAlert)
  })
 
  return <IonApp>
    <Alert 
      showAlert={showAlert}
      setShowAlert={setShowAlert}
      />
    <Menu/>
    <IonReactRouter>
      <TabWrapper 
        items={tabItems} 
        tabBar={tabBar} 
        isAuthenticated={isAuthenticated} >
        <IonRouterOutlet id="main">
          <RenderRoutes routes={ROUTES} />
        </IonRouterOutlet>
      </TabWrapper>
    </IonReactRouter>
  </IonApp>
}

export default App;
