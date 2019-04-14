//requirements

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiConnect from './api';

//make express app
const app = express();

//connect api
let api = new apiConnect(app);

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

//Static
app.use('/', express.static('static'));

//listen
app.listen(port, () => console.log('👋 👋 👋 listening on port', port));
