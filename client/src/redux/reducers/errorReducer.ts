import { authActions } from '../types/authTypes';
import { GET_ERRORS } from "../constants/index";

const initialState: Object = {};

const errorReducer = (state = initialState, action: authActions) => {
  const payload = action.payload;

  switch (action.type) {
    case GET_ERRORS:
      return payload;
    default:
      return state;
  }
}

export default errorReducer;