import React, { FC } from 'react'
import { IonModal } from '@ionic/react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers';
import { closeModalAction } from '../../redux/actions/modalActions';
import './Modal.scss'

const Modal: FC = () => {
  const dispatch = useDispatch()
  const modal = useSelector((state: RootState) => state.modal)
  const css = modal.sheetModal ? 'main__modal main__modal--sheet' : modal.small ? 'main__modal main__modal--small' : 'main__modal'

  return (
    <IonModal 
      isOpen={modal.isOpen}
      onIonModalDidDismiss={() => dispatch(closeModalAction())}
      breakpoints={ modal.sheetModal ? [0.1, 0.5, 1] : undefined }
      initialBreakpoint={ modal.sheetModal ? 0.5 : undefined }
      class={css}
      >
      { modal.component }
    </IonModal>
  )
}

export default Modal