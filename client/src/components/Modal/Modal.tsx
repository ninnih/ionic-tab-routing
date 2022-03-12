import React, { FC } from 'react'
import { IonModal } from '@ionic/react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';

const Modal: FC = () => {
  const dispatch = useDispatch()
  const modal = useSelector((state: RootState) => state.modal)

  return (
    <IonModal isOpen={modal.isOpen}>
      IonModal
    </IonModal>
  )
}

export default Modal