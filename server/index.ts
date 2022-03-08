import express, { Application } from 'express';
import { Socket, Server } from 'socket.io';
import { ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData } from './types/socket'
import http from 'http';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose, { ConnectOptions } from 'mongoose';
import passport from 'passport';
import * as dotenv from 'dotenv';

const app: Application = express();
const server = http.createServer(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>();
const port = process.env.PORT || 8000;
const users = require('./api/routes/users');

import { key } from './config/keys';
dotenv.config();

app.use(cors())
app.use(express.static(path.resolve('./client/build')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(passport.initialize());

const config = require('./config/passport')(passport);

mongoose.connect(key.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true} as ConnectOptions)
  .then(() => console.log('Successful connection to db yippie'))
  .catch(err => console.log(err)
);

app.get('/', (req, res) => {
	res.send('hello')
})

app.use("/api/users", users);

server.listen(port, () => console.log(`Server running on port ${port}`))
