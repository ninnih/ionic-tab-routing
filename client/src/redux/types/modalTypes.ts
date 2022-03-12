import { OPEN_MODAL, CLOSE_MODAL } from "../constants/index";

export interface ModalState {
	isOpen: boolean
}

export interface openModalAction {
	type: typeof OPEN_MODAL
  payload: any
}

export interface closeModalAction {
	type: typeof CLOSE_MODAL
  payload: any
}

export type ModalActions = 
openModalAction |
closeModalAction;