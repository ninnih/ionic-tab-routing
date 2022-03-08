import React, { useEffect, useState, FC, FormEvent } from 'react'
import { IonButton, IonContent, IonGrid, IonPage, IonRow, IonText } from '@ionic/react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { RootState } from '../../redux/reducers/index';
import { registerUser } from '../../redux/actions/authActions';
import Header from '../../components/Header/Header'
import TextInput from '../../components/Input/TextInput';

export interface InputChangeEventDetail {
  value: string | undefined | null;
}

export interface RegistrationInterface {
	name: string,
	email: string,
	password: string,
	password2: string,
	errors: any
}

const Register: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const errors = useSelector((state: RootState) => state.errors)
  const [register, setRegister] = useState<RegistrationInterface>({
    name: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  })

  useEffect(() => {
    setRegister({
      ...register,
      errors: errors
    })
  }, [errors])

  const onInputChange = (e: CustomEvent<InputChangeEventDetail>, key: string) => {
    const value = e.detail.value

    setRegister({
      ...register,
      [key]: value
    })
  }

  const onRegister = (e: FormEvent) => {
    e.preventDefault();

    const newUser = {
      name: register.name,
      email: register.email,
      password: register.password,
      password2: register.password2
    }
    dispatch(registerUser(newUser, history))
  }

  return (
    <IonPage>
      <Header/>
      <IonContent>
        <IonGrid>
          <TextInput label="Användarnamn" name="name" type="text" value={register.name} onInputChange={onInputChange} error={register.errors.name}/>
          <TextInput label="Email" name="email" type="text" value={register.email} onInputChange={onInputChange} error={register.errors.email}/>
          <TextInput label="Lösenord" name="password" type="password" value={register.password} onInputChange={onInputChange} error={register.errors.password}/>
          <TextInput label="Repetera lösenord" name="password2" type="password" value={register.password2} onInputChange={onInputChange} error={register.errors.password2}/>
          <IonRow>
            <IonButton 
              onClick={(e) => onRegister(e)}
              expand="block">Registrera dig</IonButton>
          </IonRow>
          <IonText>Har du redan ett konto? Logga in</IonText>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Register