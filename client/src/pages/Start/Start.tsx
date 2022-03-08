import React, { FC } from 'react'
import { IonContent, IonPage } from '@ionic/react'
import Header from '../../components/Header/Header'

const Start: FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <p>Start page</p>
      </IonContent>
    </IonPage>
  )
}

export default Start