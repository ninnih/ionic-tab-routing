import { Schema, model, Document } from 'mongoose';

export interface UserInterface {
	name: string,
	password: string,
	email: string,
	date: Date
}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}) 

export const User = model<UserInterface & Document>('users', UserSchema)
