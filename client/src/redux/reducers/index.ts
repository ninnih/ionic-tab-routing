import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import ModalReducer from "./modalReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  alert: alertReducer,
  modal: ModalReducer
});

export type RootState = ReturnType<typeof rootReducer>