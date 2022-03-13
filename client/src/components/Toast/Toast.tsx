import React from 'react'
import { IonToast } from '@ionic/react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { closeToastAction } from '../../redux/actions/toastActions';

const Toast = () => {
  const dispatch = useDispatch()
  const toast = useSelector((state: RootState) => state.toast)

  return (
    <IonToast
      isOpen={toast.isOpen}
      onDidDismiss={() => dispatch(closeToastAction())}
      message={ toast.message ? toast.message : undefined }
      icon={ toast.icon ? toast.icon : undefined }
      position={toast.position}
      buttons={[
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]}
    />
  )
}

export default Toast