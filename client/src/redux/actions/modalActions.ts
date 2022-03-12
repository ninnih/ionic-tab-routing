import { OPEN_MODAL, CLOSE_MODAL } from "../constants/index";

export const openAlertAction = () => {
  return {
    type: OPEN_MODAL,
    payload: true
  };
};

export const closeAlertAction = () => {
  return {
    type: CLOSE_MODAL,
    payload: false
  };
};

