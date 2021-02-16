import express from 'express';
import bodyParser from "body-parser";
import {Sequelize} from 'sequelize';

//import connectDB from './Database/connection.js'
import routes from './routes.js';


const sequelize = new Sequelize ('esystem','root','123Mysql', {
  host:'localhost',
  dialect:'mysql'
});

try {
  await sequelize.authenticate();
   console.log('Successfull Connection');
}catch(error){
  console.log('connection error');
}

const app = express();
app.use(express.json());
app.use(routes)
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//app.use(connectDB);




app.listen(3333);