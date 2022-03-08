import { AuthState, authActions } from '../types/authTypes';
import { 
  SET_CURRENT_USER, 
  USER_LOADING, 
  REMOVE_CURRENT_USER 
} from "../constants/index";
const isEmpty = require("is-empty");

const initialState: AuthState = {
  isAuthenticated: false,
  user: { 
    exp: null,
    iat: null,
    id: null,
    name: null
  },
  loading: false
};

const authReducer = (state = initialState, action: authActions) => {
  const payload = action.payload;
  
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(payload),
        user: payload
      };

    case USER_LOADING:
      return {
        ...state,
        loading: true
      };

    case REMOVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        loading: false
      }
    
    default:
      return state;
  }
}

export default authReducer;