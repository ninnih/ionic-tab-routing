import React, { FormEvent, useEffect, useState, FC } from 'react'
import { IonButton, IonContent, IonGrid, IonInput, IonItem, IonLabel, IonPage, IonRow, IonText } from '@ionic/react'
import Header from '../../components/Header/Header'
import { loginUser } from '../../redux/actions/authActions'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import TextInput from '../../components/Input/TextInput';
import { RootState } from '../../redux/reducers';

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
    console.log(login)
  })
  useEffect(() => {
    setLogin({
      ...login,
      errors: errors
    })
  }, [errors])

  const onInputChange = (e: CustomEvent<InputChangeEventDetail>, key: string) => {
    const value = e.detail.value
    console.log(key)

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
        <IonGrid>
        <TextInput label="Email" name="email" type="text" value={login.name} onInputChange={onInputChange} error={login.errors.email}/>
        <TextInput label="Lösenord" name="password" type="password" value={login.password} onInputChange={onInputChange} error={login.errors.password}/>
          <IonRow>
            <IonButton 
              onClick={(e) => onLogin(e)}
              expand="block">Logga in</IonButton>
          </IonRow>
          <IonText>Har du inget konto? Registrera dig</IonText>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default LogIn