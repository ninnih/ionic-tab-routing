import { OPEN_TOAST, CLOSE_TOAST } from "../constants/index";

export interface ToastState {
	isOpen: boolean
	icon?: any
  position: "top" | "bottom" | "middle" | undefined
  message: string
  button1text?: string
  button1icon?: any
  button1handler?: Function
  button2text?: string
  button2icon?: any
  button2handler?: Function
}

export interface openToastAction {
	type: typeof OPEN_TOAST
  payload: toastActionInterface
}

export interface closeToastAction {
	type: typeof CLOSE_TOAST
  payload: any
}

export interface toastActionInterface {
	position: string
  message: string
}

export type ToastActions = 
openToastAction |
closeToastAction;