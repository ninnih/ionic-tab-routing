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
import './theme/variables.scss';
import './theme/custom.scss';
import { RenderRoutes } from './components/ProtectedRoute/ProtectedRoute';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/reducers';
import { openAlertAction } from './redux/actions/alertActions';
import { AlertState } from './redux/types/alertTypes';
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import ROUTES from './components/ProtectedRoute/Routes';
import TabWrapper from './components/TabWrapper/TabWrapper';
import Menu from './components/Menu/Menu';
import Alert from './components/Alert/Alert';
import { withRouter } from 'react-router-dom';
import { PageListener } from './helpers/pagelistener';

setupIonicReact();

const App: React.FC = () => {
  const dispatch = useDispatch()
  const alert = useSelector((state: RootState) => state.alert)
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  const [tabBar, setTabBar] = useState<boolean>(true)
  const [showAlert, setShowAlert] = useState(false)
  const tabItems = [{
    url: '/home',
    title: 'Hem',
    icon: 'home'
  },{
    url: '/user/0',
    title: 'Min sida',
    icon: 'home'
  }]

  useEffect(() => {
  })

  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      setAuthToken(token);
      const decoded: any = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      const currentTime = Date.now() / 1000; 
      if (decoded.exp < currentTime) {
        dispatch(logoutUser());
        window.location.href = "./login";
      }
    }
  }, [])

  useEffect(() => {
    setShowAlert(alert.showAlert)
  })
 
  return <IonApp>
    <Alert 
      showAlert={showAlert}
      setShowAlert={setShowAlert}
      />
    <IonReactRouter>
      <PageListener />
      <Menu />
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

export default withRouter(App);
