import { IonContent, IonFooter, IonHeader, IonItem, IonList, IonMenu, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

const Menu: React.FC = () => {
  return (
    <IonMenu side="start" menuId="first" contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/" routerDirection="forward">Hem</IonItem>
          <IonItem>One</IonItem>
          <IonItem>Two</IonItem>
        </IonList>
      </IonContent>
      <IonFooter>
        <IonItem routerLink="/login">
          Logga in
        </IonItem>
        <IonItem routerLink="/register">
          Registrera konto
        </IonItem>
      </IonFooter>
    </IonMenu>
  )
}
export default Menu