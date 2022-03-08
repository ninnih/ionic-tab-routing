import { AlertState } from './../types/alertTypes';
import { OPEN_ALERT, CLOSE_ALERT } from "../constants/index";

export const openAlertAction = (payload: AlertState) => {
  return {
    type: OPEN_ALERT,
    payload
  };
};

export const closeAlertAction = () => {
  return {
    type: CLOSE_ALERT,
    payload: {} as AlertState
  };
};

