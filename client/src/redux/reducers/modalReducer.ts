import { ModalState, ModalActions,  } from '../types/modalTypes';
import { OPEN_MODAL, CLOSE_MODAL } from "../constants/index";

const initialState: ModalState = {
	isOpen: false,
  sheetModal: false,
  small: false,
  component: null
}

const ModalReducer = (state = initialState, action: ModalActions) => {
  const payload = action.payload;
  
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        sheetModal: payload.sheetModal,
        small: payload.small,
        component: payload.component
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        sheetModal: false,
        small: false
      };
    
    default:
      return state;
  }
}

export default ModalReducer;