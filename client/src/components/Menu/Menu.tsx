import React, { FC } from 'react'
import { IonButton, IonContent, IonFooter, IonHeader, IonItem, IonList, IonMenu, IonTitle, IonToolbar } from '@ionic/react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { logoutUser } from '../../redux/actions/authActions';
import { NavLink } from 'react-router-dom'


const Menu: FC = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  return (
    <IonMenu side="start" menuId="first" contentId="main">
      <IonHeader>
        <IonToolbar color="darkblue">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="forestgreen">
        <IonList class="p-0">
          <NavLink to="/">
            <IonItem color="forestgreen" routerDirection="forward">Start</IonItem>
          </NavLink>
          <NavLink to="/home">
            <IonItem color="forestgreen" routerDirection="forward">Hem</IonItem>
          </NavLink>
        </IonList>
      </IonContent>
      { isAuthenticated ? 
      <IonFooter>
        <IonItem color="forestgreen">
          <IonButton size="default" color="teal" class="rounded-button" onClick={() => dispatch(logoutUser())}>
            Logga ut
          </IonButton>
        </IonItem>
      </IonFooter>
      :
      <IonFooter>
        <IonItem routerLink="/login" color="forestgreen">
          Logga in
        </IonItem>
        <IonItem routerLink="/register" color="forestgreen">
          Registrera konto
        </IonItem>
      </IonFooter>
       }
    </IonMenu>
  )
}
export default Menu