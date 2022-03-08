import { AlertState, AlertActions,  } from '../types/alertTypes';
import { OPEN_ALERT, CLOSE_ALERT } from "../constants/index";

const initialState: AlertState = {
	showAlert: false,
	header: '',
	subheader: '',
	message: '',
  buttonText: '',
  buttonLink: ''
}

const alertReducer = (state = initialState, action: AlertActions) => {
  const payload = action.payload;
  
  switch (action.type) {
    case OPEN_ALERT:
      console.log(payload)
      return {
        ...state,
        ...payload
      };

    case CLOSE_ALERT:
      return {
        ...state,
        ...initialState
      };
    
    default:
      return state;
  }
}

export default alertReducer;