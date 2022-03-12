import { ModalState, ModalActions,  } from '../types/modalTypes';
import { OPEN_MODAL, CLOSE_MODAL } from "../constants/index";

const initialState: ModalState = {
	isOpen: false
}

const ModalReducer = (state = initialState, action: ModalActions) => {
  const payload = action.payload;
  
  switch (action.type) {
    case OPEN_MODAL:
      console.log(payload)
      return {
        ...state,
        isOpen: true
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false
      };
    
    default:
      return state;
  }
}

export default ModalReducer;