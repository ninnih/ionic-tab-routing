import { OPEN_MODAL, CLOSE_MODAL } from "../constants/index";

export interface ModalState {
	isOpen: boolean
	sheetModal: boolean
	small: boolean
	component: JSX.Element | null
}

export interface openModalAction {
	type: typeof OPEN_MODAL
  payload: modalActionInterface
}

export interface closeModalAction {
	type: typeof CLOSE_MODAL
  payload: any
}

export interface modalActionInterface {
	sheetModal: boolean
	small: boolean
	component: JSX.Element | null
}

export type ModalActions = 
openModalAction |
closeModalAction;