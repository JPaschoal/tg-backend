import express from 'express';
import {Sequelize} from 'sequelize';
import bodyParser from 'body-parser';
import connection from './Database/configdb.js'

import routes from './routes.js';

const app = express();
const db = () =>{new Sequelize(connection)}

app.use(express.json());
app.use(routes)
app.use(db);
app.use(bodyParser.urlencoded({extended: false}));


app.listen(3333);