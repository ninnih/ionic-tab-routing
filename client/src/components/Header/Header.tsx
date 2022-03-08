import React from 'react'
import { IonButton, IonGrid, IonHeader, IonIcon, IonMenuToggle, IonRow, IonTitle, IonToolbar } from '@ionic/react'
import { menuOutline} from 'ionicons/icons';

const Header: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonGrid>
          <IonRow>
            <IonMenuToggle>
              <IonButton fill="clear">
                <IonIcon icon={menuOutline} color="dark" />
              </IonButton>
            </IonMenuToggle>
            <IonTitle>Things and stuff</IonTitle>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  )
}
export default Header