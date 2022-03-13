import { modalActionInterface } from './../types/modalTypes';
import { OPEN_MODAL, CLOSE_MODAL } from "../constants/index";

export const openModalAction = (payload: modalActionInterface) => {
  return {
    type: OPEN_MODAL,
    payload
  };
};

export const closeModalAction = () => {
  return {
    type: CLOSE_MODAL,
    payload: false
  };
};

