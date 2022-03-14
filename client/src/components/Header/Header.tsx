import React from 'react'
import { IonButton, IonCol, IonGrid, IonHeader, IonIcon, IonMenuToggle, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import { menuOutline} from 'ionicons/icons';
import { NavLink } from 'react-router-dom';
import ROUTES from '../ProtectedRoute/Routes';
import './Header.scss'

const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar color="darkblue">
        <IonGrid>
          <IonRow>
            <IonCol class="flex align-center">
              <IonMenuToggle>
                <IonButton fill="clear">
                  <IonIcon icon={menuOutline} color="light" />
                </IonButton>
              </IonMenuToggle>
              <IonTitle>Things and stuff</IonTitle>
            </IonCol>
            <IonCol class="navMenu flex align-center justify-end">
              { ROUTES.map(route => {
                if(route.key !== 'LOGIN' && route.key !== 'REGISTER') {
                  return <NavLink exact 
                    activeStyle={{
                      fontWeight: "bold",
                      textDecoration: 'underline'
                    }}
                    className="m-2" 
                    to={route.path} 
                    key={'route--' + route.key}>
                   { route.name }
                  </NavLink>
                }
              })}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  )
}
export default Header