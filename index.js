//requirements
console.log('❇️ launching server');

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiConnect from './api';

//make express app
const app = express();

//set port
let port = process.env.PORT;
if (port == null || port == '') {
  port = 3001;
}

//configure express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//enable CORS
app.use(cors());

//Serve Static Content
app.use('/', express.static('static'));

//Create api
let api = new apiConnect(app);
api.connect();

//listen
app.listen(port, () => console.log('✅ listening on port', port));
