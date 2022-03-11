import React, { FC } from 'react'
import { InputChangeEventDetail, TextFieldTypes } from '@ionic/core'
import { IonInput, IonItem, IonLabel, IonRow, IonCol, IonText } from '@ionic/react'

interface ComponentProps {
  label: string
  name: string
  type: TextFieldTypes
  value: string
  onInputChange: ((e: CustomEvent<InputChangeEventDetail>, key: string) => void)
  error: string
}

const TextInput: FC<ComponentProps> = ({ label, name, type, value, onInputChange, error }) => {
  return (
    <IonRow class="fullWidth">
      <IonCol>
        <IonItem color="lightgrey border-r8">
          <IonLabel position='floating'>{label}</IonLabel>
          <IonInput onIonChange={(e) => {
              onInputChange(e, name)
            }} 
            type={type} 
            value={value} 
            name="name"
            />
        </IonItem>
        <IonRow>
          <IonText color="danger">{ error }</IonText>
        </IonRow>
      </IonCol>
    </IonRow>
  )
}

export default TextInput