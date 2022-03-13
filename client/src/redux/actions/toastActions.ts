import { toastActionInterface } from './../types/toastTypes';
import { OPEN_TOAST, CLOSE_TOAST } from "../constants/index";

export const openToastAction = (payload: toastActionInterface) => {
  return {
    type: OPEN_TOAST,
    payload
  };
};

export const closeToastAction = () => {
  return {
    type: CLOSE_TOAST,
    payload: false
  };
};

