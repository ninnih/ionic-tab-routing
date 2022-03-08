import { OPEN_ALERT } from './../constants/index';
import { currentUser, NewRegisteredUser, LogInUser } from '../types/authTypes';
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING, REMOVE_CURRENT_USER } from "../constants/index";
import { History } from 'history'

interface TokenInterface {
  success: boolean
  token: string
}

export const registerUser = (userData: NewRegisteredUser, history: History) => (dispatch: any) => {
  axios
  .post("http://localhost:8000/api/users/register", userData)
  .then((res : any) => {
    console.log(res)
    history.push("/login")}) 
  .catch((err: any) =>{
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
    dispatch({
      type: OPEN_ALERT,
      payload: {
        showAlert: true,
        header: 'Felmeddelande',
        subheader: 'Nånting gick snett',
        message: 'Var vänlig se över din information'
      }
    })
  })
}

export const loginUser = (userData: LogInUser, history: History) => (dispatch: any) => {
  axios
    .post("http://localhost:8000/api/users/login", userData)
    .then((res: any) => {
      const { token } = res.data as TokenInterface;
      
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      console.log(localStorage)
      const decoded: currentUser = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      
      history.push('/home')
    })
    .catch((err: any) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })

      let message = 'Please review your information'
      if(err.response.data.emailnotfound) {
        message = err.response.data.emailnotfound
      }

      dispatch({
        type: OPEN_ALERT,
        payload: {
          showAlert: true,
          header: 'Felmeddelande',
          subheader: '',
          message: message
        }
      })
    }
    );
};

export const setCurrentUser = (decoded: currentUser) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

export const logoutUser = () => {
  localStorage.removeItem("jwtToken");

  setAuthToken(false);

  return {
    type: REMOVE_CURRENT_USER,
  };
};