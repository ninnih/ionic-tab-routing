import { ToastState, ToastActions,  } from '../types/toastTypes';
import { OPEN_TOAST, CLOSE_TOAST } from "../constants/index";

const initialState: ToastState = {
	isOpen: false,
	icon: '',
  position: 'top',
  message: 'test',
  button1text: '',
  button1icon: '',
  button1handler: () => console.log('first'),
  button2text: '',
  button2icon: '',
  button2handler: () => console.log('second')
}

const ToastReducer = (state = initialState, action: ToastActions) => {
  const payload = action.payload;
  
  switch (action.type) {
    case OPEN_TOAST:
      return {
        ...state,
        isOpen: true,
      };

    case CLOSE_TOAST:
      return {
        ...state,
        isOpen: false,
      };
    
    default:
      return state;
  }
}

export default ToastReducer;