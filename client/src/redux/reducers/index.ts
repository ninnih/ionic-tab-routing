import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer,
  alert: alertReducer
});

export type RootState = ReturnType<typeof rootReducer>