import React, { FC } from 'react'
import { InputChangeEventDetail, TextFieldTypes } from '@ionic/core'
import { IonInput, IonItem, IonLabel, IonRow, IonCol } from '@ionic/react'

interface ComponentProps {
  label: string
  name: string
  type: TextFieldTypes
  value: string
  onInputChange: ((e: CustomEvent<InputChangeEventDetail>, key: string) => void)
  error: string
}

const TextInput: FC<ComponentProps> = ({ label, name, type, value, onInputChange, error }) => {
  console.log(error)
  return (
    <IonRow>
      <IonCol>
        <IonItem>
          <IonLabel position='floating'>{label}</IonLabel>
          <IonInput onIonChange={(e) => {
              onInputChange(e, name)
            }} 
            type={type} 
            value={value} 
            name="name"/>
        </IonItem>
        <IonRow>
        { error }
        </IonRow>
      </IonCol>
    </IonRow>
  )
}

export default TextInput