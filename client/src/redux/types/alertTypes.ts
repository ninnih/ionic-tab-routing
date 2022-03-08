import { OPEN_ALERT, CLOSE_ALERT } from "../constants/index";

export interface AlertState {
	showAlert: boolean
	header: string
	subheader?: string
	message: string
	buttonText?: string,
	buttonLink?: string
}

export interface openAlertAction {
	type: typeof OPEN_ALERT
	payload: AlertState
}

export interface closeAlertAction {
	type: typeof CLOSE_ALERT
  payload: AlertState
}

export type AlertActions = 
openAlertAction |
closeAlertAction;