import React from 'react'
import { IonPage } from '@ionic/react'
import Header from '../../components/Header/Header'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';

const Home: React.FC = () => {

  return (
    <IonPage>
      <Header />

    </IonPage>
  )
}
export default Home