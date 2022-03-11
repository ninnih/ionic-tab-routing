import React, { FC } from 'react'
import { IonButton, IonContent, IonFooter, IonHeader, IonItem, IonList, IonMenu, IonTitle, IonToolbar } from '@ionic/react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { logoutUser } from '../../redux/actions/authActions';


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
          <IonItem color="forestgreen" routerLink="/" routerDirection="forward">Start</IonItem>
          <IonItem color="forestgreen" routerLink="/home" routerDirection="forward">Hem</IonItem>
        </IonList>
      </IonContent>
      { isAuthenticated ? 
      <IonFooter>
        <IonItem>
          <IonButton onClick={() => dispatch(logoutUser())}>
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