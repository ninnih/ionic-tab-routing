import React, { FC } from 'react'
import { IonButton, IonContent, IonFooter, IonHeader, IonItem, IonList, IonMenu, IonTitle, IonToolbar } from '@ionic/react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { logoutUser } from '../../redux/actions/authActions';
import { NavLink } from 'react-router-dom'
import ROUTES from '../ProtectedRoute/Routes';


const Menu: FC = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  const state = useSelector((state: RootState) => console.log(state))

  return (
    <IonMenu side="start" menuId="first" contentId="main">
      <IonHeader>
        <IonToolbar color="darkblue">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="forestgreen">
        <IonList class="p-0">
          { ROUTES.map(route => {
            if(route.key !== 'LOGIN' && route.key !== 'REGISTER') {
              return <NavLink  exact 
              activeStyle={{
                fontWeight: "bold",
                textDecoration: 'underline',
                color: 'white'
              }} to={route.path} key={'route--' + route.key}>
                <IonItem color="forestgreen" routerDirection='forward'>{route.name}</IonItem>
              </NavLink>
            }
          })}
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