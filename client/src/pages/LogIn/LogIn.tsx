import React, { FormEvent, useEffect, useState, FC } from 'react'
import { IonButton, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { RootState } from '../../redux/reducers';
import { loginUser } from '../../redux/actions/authActions'
import TextInput from '../../components/Input/TextInput';
import Header from '../../components/Header/Header'

interface InputChangeEventDetail {
  value: string | undefined | null;
}

export interface LoginInterface {
	name: string,
	email: string,
	password: string,
	errors: any
}

const LogIn: FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const errors = useSelector((state: RootState) => state.errors)
  const [login, setLogin] = useState<LoginInterface>({
    name: '',
    password: '',
    email: '',
    errors: {}
  })

  useEffect(() => {
    setLogin({
      ...login,
      errors: errors
    })
  }, [errors])

  const onInputChange = (e: CustomEvent<InputChangeEventDetail>, key: string) => {
    const value = e.detail.value

    setLogin({
      ...login,
      [key]: value
    })
  }

  const onLogin = (e: FormEvent) => {
    e.preventDefault()

    const loginData = {
      email: login.email,
      password: login.password
    }

    dispatch(loginUser(loginData, history))
  }

  return (
    <IonPage>
      <Header/>
      <IonContent>
        <IonGrid class="fullHeight flex flex-col justify-center align-center">
          <TextInput label="Email" name="email" type="text" value={login.email} onInputChange={onInputChange} error={login.errors.email}/>
          <TextInput label="Lösenord" name="password" type="password" value={login.password} onInputChange={onInputChange} error={login.errors.password}/>
          <IonRow class="flex justify-center px-1">
            <IonButton 
              color="teal"
              class="fullWidth my-2"
              onClick={(e) => onLogin(e)}
              expand="block">Logga in</IonButton>
            <Link to="/register" color="primary">Har du inget konto? Registrera dig</Link>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default LogIn