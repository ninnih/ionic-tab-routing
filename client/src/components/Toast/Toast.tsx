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
          icon: toast.button1icon,
          text: toast.button1text,
          handler: () => {
            toast.button1handler && toast.button1handler()
          }
        },
        {
          text: toast.button2text,
          icon: toast.button2icon,
          role: 'cancel',
          handler: () => {
            toast.button2handler && toast.button2handler()
          }
        }
      ]}
    />
  )
}

export default Toast