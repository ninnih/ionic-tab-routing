import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { IonAlert, AlertButton, AlertInput } from '@ionic/react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { openAlertAction } from '../../redux/actions/alertActions';

export interface AlertInterface {
  showAlert: boolean
  setShowAlert: Dispatch<SetStateAction<boolean>>
}

const Alert: FC<AlertInterface> = ({ showAlert, setShowAlert }) => {
  const alert = useSelector((state: RootState) => state.alert)
  const dispatch = useDispatch();
  const [buttonArray, setButtonArray] = useState<(AlertButton)[]>([{
    text: 'Cancel',
    role: 'cancel',
    cssClass: 'secondary',
    id: 'cancel-button',
    handler: blah => {
      console.log('Confirm Cancel: blah');
    }
  },
  {
    text: 'Okay',
    id: 'confirm-button',
    handler: () => {
      console.log('Confirm Okay');
    }
  }])

  return (
    <IonAlert
      isOpen={showAlert}
      onDidDismiss={() => dispatch(openAlertAction({...alert, showAlert: false}))}
      cssClass='my-custom-class'
      header={alert.header}
      subHeader={alert.subheader}
      message={alert.message}
      buttons={buttonArray}
      // inputs={inputs}
      keyboardClose />
  )
}

export default Alert