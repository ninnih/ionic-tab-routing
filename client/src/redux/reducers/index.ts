import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import ModalReducer from "./modalReducer";
import ToastReducer from "./toastReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  alert: alertReducer,
  modal: ModalReducer,
  toast: ToastReducer
});

export type RootState = ReturnType<typeof rootReducer>