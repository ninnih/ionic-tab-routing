import {
	GET_ERRORS,
	USER_LOADING,
	SET_CURRENT_USER,
	REMOVE_CURRENT_USER
} from '../constants/index';

export interface AuthState {
	isAuthenticated: boolean | null,
  user: currentUser | null,
  loading: boolean | null
}

export interface currentUser {
	exp: number | null,
	iat: number | null,
	id: string | null,
	name: string | null
}

export interface NewRegisteredUser {
	name: string,
	email: string,
	password: string,
	password2: string
}

export interface LogInUser {
	email: string,
	password: string
}

export interface getErrorsAction {
	type: typeof GET_ERRORS
	payload: Object
}

export interface userLoadingAction {
	type: typeof USER_LOADING
	payload: any
}

export interface setCurrentUserAction {
	type: typeof SET_CURRENT_USER
	payload: currentUser
}
export interface removeCurrentUserAction {
	type: typeof REMOVE_CURRENT_USER
	payload: any
}

export type authActions = 
getErrorsAction |
userLoadingAction |
setCurrentUserAction |
removeCurrentUserAction;